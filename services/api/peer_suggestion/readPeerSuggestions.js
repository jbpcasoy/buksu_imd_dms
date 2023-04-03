import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerSuggestions({
  limit,
  page,
  submittedPeerReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerSuggestions = await prisma.peerSuggestion.findMany({
      take: limit,
      skip: limit && page ? (page - 1) * limit : undefined,
      where: {
        submittedPeerReviewId: {
          contains: submittedPeerReviewId,
        },
      },
      include: {
        SubmittedPeerSuggestion: true,
        SubmittedPeerReview: {
          select: {
            PeerReview: {
              select: {
                Faculty: {
                  select: {
                    user: {
                      select: {
                        name: true,
                        image: true,
                        id: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    const total = await prisma.peerSuggestion.count({
      where: {
        submittedPeerReviewId: {
          contains: submittedPeerReviewId,
        },
      },
    });

    return { data: peerSuggestions, total };
  } catch (error) {
    throw error;
  }
}
