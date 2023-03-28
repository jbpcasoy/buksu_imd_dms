import { PRISMA_CLIENT } from "@/prisma/prisma_client";
export default async function deleteCoordinatorEndorsement(id) {
  const prisma = PRISMA_CLIENT;
  try {
    const coordinatorEndorsement = await prisma.coordinatorEndorsement.delete({
      where: {
        id,
      },
    });

    return coordinatorEndorsement;
  } catch (error) {
    throw error;
  }
}
