import { PrismaClient } from "@prisma/client";

export default async function readCoordinator(id) {
  const prisma = new PrismaClient();

  try {
    const coordinator = prisma.coordinator.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return coordinator;
  } catch (error) {
    throw error;
  }
}
