import { PrismaClient } from "@prisma/client";
import { getTenantPrisma } from "@/lib/tenant/prisma-factory";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const isBuildTime = process.env.NEXT_PHASE === "phase-production-build";

/**
 * Default Prisma client (public schema / build time)
 * Used for backward compatibility and when no tenant context exists
 */
export const prisma =
  globalForPrisma.prisma ??
  (isBuildTime
    ? new Proxy({} as PrismaClient, {
        get: () => () => Promise.resolve([]),
      })
    : new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
      }));

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * Get tenant-scoped Prisma client from request headers
 * Falls back to default client if no tenant context
 */
export function getTenantPrismaFromHeaders(headers: Headers): PrismaClient {
  const tenantSchema = headers.get("x-tenant-schema");
  if (tenantSchema) {
    return getTenantPrisma(tenantSchema);
  }
  return prisma;
}

/**
 * Get Prisma client for a specific tenant by schema name
 */
export function getPrismaForTenant(dbSchema: string): PrismaClient {
  return getTenantPrisma(dbSchema);
}
