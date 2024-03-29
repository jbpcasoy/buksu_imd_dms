import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updatePeerReviewItem(id, { answer }) {
  const prisma = PRISMA_CLIENT;

  const peerReviewItem = await prisma.peerReviewItem.update({
    data: {
      answer,
    },
    where: {
      id,
    },
  });
  return peerReviewItem;
}
