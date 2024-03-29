import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedCoordinatorSuggestion({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedCoordinatorSuggestion;

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
    });
  return submittedCoordinatorSuggestion;
}
