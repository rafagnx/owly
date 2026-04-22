const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.conversation.count();
    console.log('Successfully connected to DB. Conversations found:', count);
  } catch (e) {
    console.error('FAILED to connect to DB:', e.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
