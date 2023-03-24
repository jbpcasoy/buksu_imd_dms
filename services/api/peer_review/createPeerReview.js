import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createPeerReview({ facultyId, iMId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerReview = await prisma.peerReview.create({
      data: {
        facultyId,
        iMId,
      },
    });

    return peerReview;
  } catch (error) {
    throw error;
  }
}
