import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorApproval(id) {
  const prisma = new PrismaClient();

  try {
    const coordinatorApproval =
      await prisma.coordinatorApproval.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return coordinatorApproval;
  } catch (error) {
    throw error;
  }
}
