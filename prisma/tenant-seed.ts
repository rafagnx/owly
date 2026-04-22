import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Seeding Tenant Database (public schema)...");

  // Use a fixed ID if needed or let UUID generation handle it
  const hashedPassword = await bcrypt.hash("admin123", 12);
  
  // Create default admin
  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {
      password: hashedPassword,
      role: "admin",
    },
    create: {
      username: "admin",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
    },
  });

  // Create default settings
  await prisma.settings.upsert({
    where: { id: "default" },
    update: {
      businessName: "ClinicOS Demo",
    },
    create: {
      id: "default",
      businessName: "ClinicOS Demo",
      welcomeMessage: "Bem-vindo ao ClinicOS!",
      tone: "friendly",
      aiProvider: "openai",
      aiModel: "gpt-4o-mini",
    },
  });

  console.log("✅ Tenant Database Seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
