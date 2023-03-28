import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinator from "../coordinator/readCoordinator";
import readIM from "../im/readIM";

export default async function createCoordinatorEndorsement({
  iMId,
  coordinatorId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iM = await readIM(iMId, {
      status: "DEPARTMENT_REVIEWED",
    });
    const coordinator = await readCoordinator(coordinatorId);

    const coordinatorEndorsement = await prisma.coordinatorEndorsement.create({
      data: {
        IM: {
          connect: {
            id: iM.id,
          },
        },
        Coordinator: {
          connect: {
            id: coordinator.id,
          },
        },
      },
    });

    return coordinatorEndorsement;
  } catch (error) {
    throw error;
  }
}