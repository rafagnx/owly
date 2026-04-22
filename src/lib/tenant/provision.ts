/**
 * Tenant Provisioning — Creates new tenant with isolated schema and first admin
 */

import { PrismaClient as MasterPrismaClient } from "../../generated/master";
import { createTenantSchema, migrateTenantSchema, getTenantPrisma } from "./prisma-factory";
import bcrypt from "bcryptjs";

const masterPrisma = new MasterPrismaClient();

export interface ProvisionTenantInput {
  slug: string;
  name: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone?: string;
  adminUsername?: string;
  adminPassword: string;
  planId?: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  trialDays?: number;
}

export interface ProvisionResult {
  success: boolean;
  tenantId?: string;
  slug?: string;
  error?: string;
}

/**
 * Generate a safe schema name from slug
 */
function toSchemaName(slug: string): string {
  // PostgreSQL schema names: lowercase, alphanumeric + underscore
  return `tenant_${slug.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
}

/**
 * Provision a new tenant:
 * 1. Create record in master DB
 * 2. Create PostgreSQL schema
 * 3. Run migrations on new schema
 * 4. Create initial admin user in tenant schema
 * 5. Create default settings
 */
export async function provisionTenant(input: ProvisionTenantInput): Promise<ProvisionResult> {
  const dbSchema = toSchemaName(input.slug);
  
  // Validate slug is unique
  const existing = await masterPrisma.tenant.findUnique({
    where: { slug: input.slug },
  });
  
  if (existing) {
    return { success: false, error: "Slug already exists" };
  }
  
  // Validate schema name is unique
  const existingSchema = await masterPrisma.tenant.findUnique({
    where: { dbSchema },
  });
  
  if (existingSchema) {
    return { success: false, error: "Schema name conflict" };
  }
  
  try {
    // 1. Create tenant record in master DB
    const hashedPassword = await bcrypt.hash(input.adminPassword, 12);
    
    const tenant = await masterPrisma.tenant.create({
      data: {
        slug: input.slug,
        name: input.name,
        dbSchema,
        ownerName: input.ownerName,
        ownerEmail: input.ownerEmail,
        ownerPhone: input.ownerPhone || "",
        adminUsername: input.adminUsername || "admin",
        adminPassword: hashedPassword,
        planId: input.planId,
        logo: input.logo || "",
        primaryColor: input.primaryColor || "#6366f1",
        secondaryColor: input.secondaryColor || "#8b5cf6",
        accentColor: input.accentColor || "#06b6d4",
        trialEndsAt: input.trialDays
          ? new Date(Date.now() + input.trialDays * 24 * 60 * 60 * 1000)
          : null,
        status: input.trialDays ? "trial" : "active",
      },
    });
    
    // 2. Create PostgreSQL schema
    await createTenantSchema(dbSchema);
    
    // 3. Run migrations on new schema
    await migrateTenantSchema(dbSchema);
    
    // 4. Create initial admin in tenant schema
    const tenantPrisma = getTenantPrisma(dbSchema);
    await tenantPrisma.admin.create({
      data: {
        username: input.adminUsername || "admin",
        password: hashedPassword,
        name: input.ownerName,
        role: "admin",
      },
    });
    
    // 5. Create default settings in tenant schema
    await tenantPrisma.settings.create({
      data: {
        id: "default",
        businessName: input.name,
        welcomeMessage: `Olá! Bem-vindo ao ${input.name}. Como posso ajudar?`,
        language: "pt-BR",
      },
    });
    
    // 6. Create default business hours
    await tenantPrisma.businessHours.create({
      data: { id: "default" },
    });
    
    return {
      success: true,
      tenantId: tenant.id,
      slug: tenant.slug,
    };
    
  } catch (error) {
    // Cleanup on failure
    console.error("Tenant provisioning failed:", error);
    
    // Try to clean up master record
    try {
      await masterPrisma.tenant.deleteMany({ where: { slug: input.slug } });
    } catch {}
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Provisioning failed",
    };
  }
}

/**
 * Suspend a tenant (keep data, block access)
 */
export async function suspendTenant(tenantId: string): Promise<void> {
  await masterPrisma.tenant.update({
    where: { id: tenantId },
    data: { status: "suspended" },
  });
}

/**
 * Reactivate a suspended tenant
 */
export async function reactivateTenant(tenantId: string): Promise<void> {
  await masterPrisma.tenant.update({
    where: { id: tenantId },
    data: { status: "active" },
  });
}

/**
 * Delete a tenant and all its data (DESTRUCTIVE)
 */
export async function deleteTenant(tenantId: string): Promise<void> {
  const tenant = await masterPrisma.tenant.findUnique({
    where: { id: tenantId },
  });
  
  if (!tenant) throw new Error("Tenant not found");
  
  // Drop PostgreSQL schema (removes all data)
  const { dropTenantSchema } = await import("./prisma-factory");
  await dropTenantSchema(tenant.dbSchema);
  
  // Remove from master DB
  await masterPrisma.subscription.deleteMany({ where: { tenantId } });
  await masterPrisma.tenant.delete({ where: { id: tenantId } });
}

/**
 * List all tenants with stats
 */
export async function listTenants(options?: {
  status?: string;
  page?: number;
  limit?: number;
}) {
  const page = options?.page || 1;
  const limit = options?.limit || 20;
  
  const where = options?.status ? { status: options.status } : {};
  
  const [tenants, total] = await Promise.all([
    masterPrisma.tenant.findMany({
      where,
      include: { plan: true, subscription: true },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    masterPrisma.tenant.count({ where }),
  ]);
  
  return { tenants, total, page, limit, pages: Math.ceil(total / limit) };
}
