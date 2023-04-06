import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import checkAndUpdateStatus from "@/services/helpers/checkAndUpdateStatus";
import readChairpersonSuggestion from "../chairperson_suggestion/readChairpersonSuggestion";
import readSubmittedChairpersonReview from "../submitted_chairperson_review/readSubmittedChairpersonReview";

export default async function createSubmittedChairpersonSuggestion({
  chairpersonSuggestionId,
}) {
  try {
    const prisma = PRISMA_CLIENT;

    const chairpersonSuggestion = await readChairpersonSuggestion(
      chairpersonSuggestionId
    );

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
              IMEventType: "SUBMITTED_CHAIRPERSON_SUGGESTION",
            },
          },
        },
      });

    const submittedChairpersonReview = await readSubmittedChairpersonReview(
      chairpersonSuggestion.submittedChairpersonReviewId
    );
    await checkAndUpdateStatus(submittedChairpersonReview.iMId);

    return submittedChairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
