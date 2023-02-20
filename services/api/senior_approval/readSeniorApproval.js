import { PrismaClient } from "@prisma/client";

export default async function readSeniorApproval(id) {
  const prisma = new PrismaClient();

  try {
    const seniorApproval = await prisma.seniorApproval.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return seniorApproval;
  } catch (error) {
    throw error;
  }
}