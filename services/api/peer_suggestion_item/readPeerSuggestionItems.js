import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerSuggestionItems({
  limit,
  page,
  peerSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  const peerSuggestionItems = await prisma.peerSuggestionItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      peerSuggestionId: { contains: peerSuggestionId },
    },
  });

  const total = await prisma.peerSuggestionItem.count({
    where: {
      peerSuggestionId: { contains: peerSuggestionId },
    },
  });

  return { data: peerSuggestionItems, total };
}
