const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.admin.update({
      where: { username: "admin" },
      data: { password: hashedPassword }
    });
    console.log("PASSWORD_RESET_SUCCESS");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
