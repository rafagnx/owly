/**
 * Prisma Factory — Creates tenant-scoped PrismaClient instances
 * 
 * Uses PostgreSQL schemas for tenant isolation.
 * Each tenant gets its own schema (e.g., tenant_abc123) with identical tables.
 * The factory switches the search_path before returning the client.
 */

import { PrismaClient } from "@prisma/client";

// Pool of Prisma clients per schema to avoid creating too many connections
const clientPool = new Map<string, PrismaClient>();
const MAX_POOL_SIZE = 50;

/**
 * Get or create a PrismaClient for a specific tenant schema
 */
export function getTenantPrisma(dbSchema: string): PrismaClient {
  const existing = clientPool.get(dbSchema);
  if (existing) return existing;
  
  // Evict oldest if pool is full
  if (clientPool.size >= MAX_POOL_SIZE) {
    const oldestKey = clientPool.keys().next().value;
    if (oldestKey) {
      const oldClient = clientPool.get(oldestKey);
      oldClient?.$disconnect();
      clientPool.delete(oldestKey);
    }
  }
  
  const client = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    datasourceUrl: buildSchemaUrl(dbSchema),
  });
  
  clientPool.set(dbSchema, client);
  return client;
}

/**
 * Build DATABASE_URL with schema parameter
 * PostgreSQL: append ?schema=tenant_xxx
 */
function buildSchemaUrl(schema: string): string {
  const baseUrl = process.env.DATABASE_URL || "";
  
  // Remove existing schema param if present
  const url = new URL(baseUrl);
  url.searchParams.set("schema", schema);
  
  return url.toString();
}

/**
 * Execute raw SQL to set search_path for a connection
 * Alternative approach using $executeRawUnsafe
 */
export async function setSearchPath(client: PrismaClient, schema: string): Promise<void> {
  await client.$executeRawUnsafe(`SET search_path TO "${schema}"`);
}

/**
 * Create a new schema in PostgreSQL for a tenant
 */
export async function createTenantSchema(schema: string): Promise<void> {
  const client = new PrismaClient();
  try {
    // Create the schema
    await client.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);
  } finally {
    await client.$disconnect();
  }
}

/**
 * Drop a tenant schema (DANGEROUS - only for cleanup)
 */
export async function dropTenantSchema(schema: string): Promise<void> {
  const client = new PrismaClient();
  try {
    await client.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
  } finally {
    await client.$disconnect();
  }
}

/**
 * Run migrations on a specific tenant schema
 * Uses Prisma migrate programmatically
 */
export async function migrateTenantSchema(schema: string): Promise<void> {
  const { execSync } = await import("child_process");
  const baseUrl = process.env.DATABASE_URL || "";
  
  // Build URL with schema
  const url = new URL(baseUrl);
  url.searchParams.set("schema", schema);
  
  // Run prisma migrate deploy on this schema
  execSync(`npx prisma migrate deploy`, {
    env: {
      ...process.env,
      DATABASE_URL: url.toString(),
    },
    stdio: "pipe",
  });
}

/**
 * Disconnect all pooled clients (for graceful shutdown)
 */
export async function disconnectAllTenants(): Promise<void> {
  const promises = Array.from(clientPool.values()).map(c => c.$disconnect());
  await Promise.allSettled(promises);
  clientPool.clear();
}
