import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairperson({ facultyId }) {
  const prisma = PRISMA_CLIENT;

  const chairperson = await prisma.chairperson.create({
    data: {
      facultyId,
    },
  });

  return chairperson;
}
