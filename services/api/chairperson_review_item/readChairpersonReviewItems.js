import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonReviewItems({
  limit,
  page,
  questionId,
  chairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviewItems = await prisma.chairpersonReviewItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      questionId,
      chairpersonReviewId,
    },
  });
  const total = await prisma.chairpersonReviewItem.count({
    where: {
      questionId,
      chairpersonReviewId,
    },
  });
  return { data: chairpersonReviewItems, total };
}
