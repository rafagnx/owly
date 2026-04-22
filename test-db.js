const { PrismaClient } = require('@prisma/client');

async function test() {
  const p = new PrismaClient();
  try {
    await p.$queryRaw`SELECT 1`;
    console.log('Database OK');
    await p.$disconnect();
    process.exit(0);
  } catch (e) {
    console.log('Error:', e.message);
    await p.$disconnect();
    process.exit(1);
  }
}

test();