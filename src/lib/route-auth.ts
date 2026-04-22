import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { hasPermission, Permission } from "@/lib/rbac";
import { prisma, getPrismaForTenant } from "@/lib/prisma";
import { resolveTenantFromHostname, type ResolvedTenant } from "@/lib/tenant/resolver";
import { PrismaClient } from "@prisma/client";

interface AuthContext {
  userId: string;
  role: string;
  username: string;
  name: string;
  authMethod: "cookie" | "api_key";
  tenant: ResolvedTenant | null;
  tenantPrisma: PrismaClient;
}

/**
 * Resolve tenant from request and return scoped Prisma client
 */
async function resolveTenant(request: NextRequest): Promise<{
  tenant: ResolvedTenant | null;
  tenantPrisma: PrismaClient;
}> {
  const hostname = request.headers.get("host") || "localhost";
  const context = await resolveTenantFromHostname(hostname);
  
  if (context.type === "tenant") {
    return {
      tenant: context.tenant,
      tenantPrisma: getPrismaForTenant(context.tenant.dbSchema),
    };
  }
  
  // Fallback: check x-tenant-slug header (set by middleware)
  const tenantSlug = request.headers.get("x-tenant-slug");
  if (tenantSlug) {
    const tenantContext = await resolveTenantFromHostname(`${tenantSlug}.localhost`);
    if (tenantContext.type === "tenant") {
      return {
        tenant: tenantContext.tenant,
        tenantPrisma: getPrismaForTenant(tenantContext.tenant.dbSchema),
      };
    }
  }
  
  // No tenant context — use default prisma (backward compatibility)
  return { tenant: null, tenantPrisma: prisma };
}

/**
 * Authenticate via API key (X-API-Key header)
 */
async function authenticateApiKey(
  apiKey: string,
  tenantPrisma: PrismaClient,
  tenant: ResolvedTenant | null
): Promise<AuthContext | null> {
  const key = await tenantPrisma.apiKey.findUnique({
    where: { key: apiKey },
  });

  if (!key || !key.isActive) return null;

  // Update lastUsed timestamp
  tenantPrisma.apiKey
    .update({ where: { id: key.id }, data: { lastUsed: new Date() } })
    .catch(() => {});

  return {
    userId: "api-key:" + key.id,
    role: "admin",
    username: key.name,
    name: key.name,
    authMethod: "api_key",
    tenant,
    tenantPrisma,
  };
}

/**
 * Authenticate and authorize an API request.
 * Resolves tenant from hostname, then validates auth.
 */
export async function requireAuth(
  request: NextRequest,
  permission?: Permission
): Promise<AuthContext | NextResponse> {
  // Resolve tenant context
  const { tenant, tenantPrisma } = await resolveTenant(request);
  
  // Check if tenant is suspended
  if (tenant && tenant.status === "suspended") {
    return NextResponse.json(
      { error: { code: "TENANT_SUSPENDED", message: "This account has been suspended. Contact your administrator." } },
      { status: 403 }
    );
  }

  // Try API key auth first
  const apiKey = request.headers.get("x-api-key");
  if (apiKey) {
    const context = await authenticateApiKey(apiKey, tenantPrisma, tenant);
    if (!context) {
      return NextResponse.json(
        { error: { code: "INVALID_API_KEY", message: "Invalid or inactive API key" } },
        { status: 401 }
      );
    }

    if (permission && !hasPermission(context.role, permission)) {
      return NextResponse.json(
        { error: { code: "FORBIDDEN", message: "Insufficient permissions" } },
        { status: 403 }
      );
    }

    return context;
  }

  // Fall back to cookie auth
  const token = request.cookies.get("owly-token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: { code: "UNAUTHORIZED", message: "Authentication required. Use cookie or X-API-Key header." } },
      { status: 401 }
    );
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { error: { code: "INVALID_TOKEN", message: "Invalid or expired token" } },
      { status: 401 }
    );
  }

  const role = payload.role.toLowerCase();

  if (permission && !hasPermission(role, permission)) {
    return NextResponse.json(
      { error: { code: "FORBIDDEN", message: "Insufficient permissions" } },
      { status: 403 }
    );
  }

  const admin = await tenantPrisma.admin.findUnique({
    where: { id: payload.userId },
    select: { id: true, username: true, name: true, role: true },
  });

  if (!admin) {
    return NextResponse.json(
      { error: { code: "UNAUTHORIZED", message: "User not found" } },
      { status: 401 }
    );
  }

  return {
    userId: admin.id,
    role: admin.role.toLowerCase(),
    username: admin.username,
    name: admin.name,
    authMethod: "cookie",
    tenant,
    tenantPrisma,
  };
}

/**
 * Type guard: check if result is an auth context (not an error response).
 */
export function isAuthenticated(
  result: AuthContext | NextResponse
): result is AuthContext {
  return !(result instanceof NextResponse);
}
