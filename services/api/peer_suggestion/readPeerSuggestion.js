import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const peerSuggestion = await prisma.peerSuggestion.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      SubmittedPeerReview: true,
    },
  });
  return peerSuggestion;
}
