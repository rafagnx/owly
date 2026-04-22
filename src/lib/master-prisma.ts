import { PrismaClient } from "../generated/master";

const globalForMasterPrisma = globalThis as unknown as {
  masterPrisma: PrismaClient | undefined;
};

// Ensure we use the correct database URL for the master database
const masterDbUrl = process.env.MASTER_DATABASE_URL || process.env.DATABASE_URL?.replace("owly", "clinicos_master") || "postgresql://postgres:Rafa040388@localhost:5434/clinicos_master?schema=public";

export const masterPrisma =
  globalForMasterPrisma.masterPrisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: masterDbUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForMasterPrisma.masterPrisma = masterPrisma;
