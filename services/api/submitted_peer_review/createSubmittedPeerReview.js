import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import updateIM from "../im/updateIM";
import readPeerReview from "../peer_review/readPeerReview";

export default async function createSubmittedPeerReview({
  peerReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const peerReview = await readPeerReview({ id: peerReviewId, ability });

  const submittedPeerReview = await prisma.submittedPeerReview.create({
    data: {
      PeerReview: {
        connect: {
          id: peerReview.id,
        },
      },
      IM: {
        connect: {
          id: peerReview.iMId,
        },
      },
      Notification: {
        create: {
          Type: "SUBMITTED_PEER_REVIEW",
        },
      },
      IMEvent: {
        create: {
          IM: {
            connect: {
              id: peerReview.iMId,
            },
          },
          IMEventType: "SUBMITTED_PEER_REVIEW",
        },
      },
    },
  });

  await updateIM(
    peerReview.iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );
  return submittedPeerReview;
}
