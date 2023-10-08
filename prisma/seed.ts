import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const abood = await prisma.donation.create({
    data: {
      email: 'abood@prisma.com',
      displayName: 'abood',
      count: 5,
    },
  });

  console.log({ abood });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });