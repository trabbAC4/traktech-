const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const allUsers = await prisma.catalog.findMany(); // Adjust `user` to whatever model you want to test
    console.log(allUsers);
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();