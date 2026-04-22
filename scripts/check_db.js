const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.admin.count();
    console.log(`ADMIN_COUNT:${count}`);
    
    if (count > 0) {
        const users = await prisma.admin.findMany({ select: { username: true } });
        console.log(`ADMIN_USERS:${JSON.stringify(users)}`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
