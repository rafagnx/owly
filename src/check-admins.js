const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const admins = await prisma.admin.findMany();
    console.log('ADMINS:', JSON.stringify(admins, null, 2));
  } catch (e) {
    console.error('ERROR:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
