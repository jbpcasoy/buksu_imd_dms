import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import checkAndUpdateStatus from "@/services/helpers/checkAndUpdateStatus";
import readChairpersonSuggestion from "../chairperson_suggestion/readChairpersonSuggestion";
import updateIM from "../im/updateIM";
import readSubmittedChairpersonReview from "../submitted_chairperson_review/readSubmittedChairpersonReview";

export default async function createSubmittedChairpersonSuggestion({
  chairpersonSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const chairpersonSuggestion = await readChairpersonSuggestion({
    id: chairpersonSuggestionId,
    ability,
  });

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.create({
      data: {
        ChairpersonSuggestion: {
          connect: {
            id: chairpersonSuggestion.id,
          },
        },
        IM: {
          connect: {
            id: chairpersonSuggestion.SubmittedChairpersonReview.iMId,
          },
        },
        Notification: {
          create: {
            Type: "SUBMITTED_CHAIRPERSON_SUGGESTION",
          },
        },
        IMEvent: {
          create: {
            IM: {
              connect: {
                id: chairpersonSuggestion.SubmittedChairpersonReview.iMId,
              },
            },
            IMEventType: "SUBMITTED_CHAIRPERSON_SUGGESTION",
          },
        },
      },
    });

  const submittedChairpersonReview = await readSubmittedChairpersonReview({
    id: chairpersonSuggestion.submittedChairpersonReviewId,
    ability,
  });
  await checkAndUpdateStatus({
    iMId: submittedChairpersonReview.iMId,
    ability,
  });

  await updateIM(
    submittedChairpersonReview.iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );

  return submittedChairpersonSuggestion;
}
