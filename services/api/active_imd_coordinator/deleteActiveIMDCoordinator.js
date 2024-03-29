import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveIMDCoordinator(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinator = await prisma.activeIMDCoordinator.delete({
    where: {
      ...filter,
      id,
    },
  });

  return iMDCoordinator;
}
