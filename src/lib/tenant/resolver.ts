/**
 * Tenant Resolver — Resolves tenant from hostname (subdomain or custom domain)
 * 
 * Routing:
 * - admin.domain.com → SuperAdmin panel
 * - {slug}.domain.com → Tenant dashboard
 * - app.domain.com → Landing / tenant login
 * - customdomain.com → Tenant via custom domain lookup
 */

import { masterPrisma } from "@/lib/master-prisma";

export interface ResolvedTenant {
  id: string;
  slug: string;
  name: string;
  dbSchema: string;
  status: string;
  customDomain: string | null;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  planId: string | null;
}

export type TenantContext = 
  | { type: "superadmin" }
  | { type: "tenant"; tenant: ResolvedTenant }
  | { type: "landing" }
  | { type: "unknown" };

const BASE_DOMAIN = process.env.BASE_DOMAIN || "localhost";
const SUPERADMIN_SUBDOMAIN = "admin";

// Cache tenants for 60s to avoid DB hits on every request
const tenantCache = new Map<string, { tenant: ResolvedTenant; expiresAt: number }>();
const CACHE_TTL = 60_000;

function getCachedTenant(key: string): ResolvedTenant | null {
  const cached = tenantCache.get(key);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.tenant;
  }
  tenantCache.delete(key);
  return null;
}

function cacheTenant(key: string, tenant: ResolvedTenant): void {
  tenantCache.set(key, { tenant, expiresAt: Date.now() + CACHE_TTL });
}

export function invalidateTenantCache(slug?: string): void {
  if (slug) {
    tenantCache.delete(`slug:${slug}`);
  } else {
    tenantCache.clear();
  }
}

/**
 * Extract subdomain from hostname
 * e.g., "tenant1.owly.com" → "tenant1"
 * e.g., "admin.owly.com" → "admin"
 * e.g., "owly.com" → null
 * e.g., "localhost:3000" → null
 * e.g., "tenant1.localhost" → "tenant1"
 */
function extractSubdomain(hostname: string): string | null {
  // Remove port
  const host = hostname.split(":")[0];
  
  // localhost special handling: tenant1.localhost
  if (host.endsWith(".localhost") || host.endsWith(`.${BASE_DOMAIN}`)) {
    const parts = host.split(".");
    if (parts.length >= 2) {
      const sub = parts[0];
      if (sub !== "www" && sub !== "app") return sub;
    }
    return null;
  }
  
  // Custom domain: check if it matches BASE_DOMAIN at all
  const baseParts = BASE_DOMAIN.split(".");
  const hostParts = host.split(".");
  
  if (hostParts.length > baseParts.length) {
    // Has subdomain
    const subdomain = hostParts.slice(0, hostParts.length - baseParts.length).join(".");
    if (subdomain !== "www" && subdomain !== "app") return subdomain;
  }
  
  return null;
}

/**
 * Resolve tenant context from hostname
 */
export async function resolveTenantFromHostname(hostname: string): Promise<TenantContext> {
  const subdomain = extractSubdomain(hostname);
  
  // SuperAdmin panel
  if (subdomain === SUPERADMIN_SUBDOMAIN) {
    return { type: "superadmin" };
  }
  
  // Known subdomain → resolve tenant by slug
  if (subdomain) {
    const cached = getCachedTenant(`slug:${subdomain}`);
    if (cached) {
      return { type: "tenant", tenant: cached };
    }
    
    const tenant = await masterPrisma.tenant.findUnique({
      where: { slug: subdomain },
      select: {
        id: true,
        slug: true,
        name: true,
        dbSchema: true,
        status: true,
        customDomain: true,
        logo: true,
        favicon: true,
        primaryColor: true,
        secondaryColor: true,
        accentColor: true,
        planId: true,
      },
    });
    
    if (tenant && tenant.status !== "cancelled") {
      cacheTenant(`slug:${subdomain}`, tenant);
      return { type: "tenant", tenant };
    }
    
    return { type: "unknown" };
  }
  
  // No subdomain — check if it's a custom domain
  const host = hostname.split(":")[0];
  if (host !== "localhost" && host !== BASE_DOMAIN && !host.endsWith(`.${BASE_DOMAIN}`)) {
    const cached = getCachedTenant(`domain:${host}`);
    if (cached) {
      return { type: "tenant", tenant: cached };
    }
    
    const tenant = await masterPrisma.tenant.findUnique({
      where: { customDomain: host },
      select: {
        id: true,
        slug: true,
        name: true,
        dbSchema: true,
        status: true,
        customDomain: true,
        logo: true,
        favicon: true,
        primaryColor: true,
        secondaryColor: true,
        accentColor: true,
        planId: true,
      },
    });
    
    if (tenant && tenant.status !== "cancelled") {
      cacheTenant(`domain:${host}`, tenant);
      return { type: "tenant", tenant };
    }
    
    return { type: "unknown" };
  }
  
  // Root domain → landing page
  return { type: "landing" };
}

/**
 * Get tenant by ID (for API routes that have x-tenant-id header)
 */
export async function getTenantById(tenantId: string): Promise<ResolvedTenant | null> {
  const cached = getCachedTenant(`id:${tenantId}`);
  if (cached) return cached;
  
  const tenant = await masterPrisma.tenant.findUnique({
    where: { id: tenantId },
    select: {
      id: true,
      slug: true,
      name: true,
      dbSchema: true,
      status: true,
      customDomain: true,
      logo: true,
      favicon: true,
      primaryColor: true,
      secondaryColor: true,
      accentColor: true,
      planId: true,
    },
  });
  
  if (tenant) {
    cacheTenant(`id:${tenantId}`, tenant);
  }
  
  return tenant;
}

export { masterPrisma };
