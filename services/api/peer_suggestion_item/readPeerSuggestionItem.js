import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerSuggestionItem({ id, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerSuggestionItem;

  const peerSuggestionItem = await prisma.peerSuggestionItem.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          id,
        },
      ],
    },
    include: {
      PeerSuggestion: {
        include: {
          SubmittedPeerReview: {
            include: {
              PeerReview: {
                include: {
                  IM: {
                    include: {
                      SubmittedPeerSuggestion: true,
                    },
                  },
                },
              },
              IM: true,
            },
          },
        },
      },
    },
  });
  return peerSuggestionItem;
}
