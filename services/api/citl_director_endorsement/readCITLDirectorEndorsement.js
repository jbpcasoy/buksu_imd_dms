import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCITLDirectorEndorsement(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirectorEndorsement =
      await prisma.cITLDirectorEndorsement.findFirstOrThrow({
        where: {
          ...filter,
          id,
        },
      });

    return cITLDirectorEndorsement;
  } catch (error) {
    throw error;
  }
}