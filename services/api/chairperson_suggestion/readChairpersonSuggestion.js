import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonSuggestion =
      await prisma.chairpersonSuggestion.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          SubmittedChairpersonReview: true,
        },
      });
    return chairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
