import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import updateIM from "../im/updateIM";
import readSubmittedIMDCoordinatorSuggestion from "../submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";

export default async function createIMDCoordinatorEndorsement({
  iMDCoordinatorId,
  submittedIMDCoordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedIMDCoordinatorSuggestion =
    await readSubmittedIMDCoordinatorSuggestion({
      id: submittedIMDCoordinatorSuggestionId,
      ability,
    });

  const iMDCoordinatorEndorsement =
    await prisma.iMDCoordinatorEndorsement.create({
      data: {
        IM: {
          connect: {
            id: submittedIMDCoordinatorSuggestion.IMDCoordinatorSuggestion.iMId,
          },
        },
        IMDCoordinator: {
          connect: {
            id: iMDCoordinatorId,
          },
        },
        SubmittedIMDCoordinatorSuggestion: {
          connect: {
            id: submittedIMDCoordinatorSuggestion.id,
          },
        },
        Notification: {
          create: {
            Type: "IMD_COORDINATOR_ENDORSEMENT",
          },
        },
        IMEvent: {
          create: {
            IM: {
              connect: {
                id: submittedIMDCoordinatorSuggestion.IMDCoordinatorSuggestion
                  .iMId,
              },
            },
            IMEventType: "IMD_COORDINATOR_ENDORSEMENT",
          },
        },
      },
    });

  await updateIM(
    submittedIMDCoordinatorSuggestion.IMDCoordinatorSuggestion.iMId,
    {
      status: "CITL_ENDORSED",
    },
    ability
  );

  return iMDCoordinatorEndorsement;
}
