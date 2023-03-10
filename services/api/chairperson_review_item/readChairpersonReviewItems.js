import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReviewItems({
  limit,
  page,
  questionId,
  chairpersonReviewId,
}) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviewItems = await prisma.chairpersonReviewItem.findMany({
      take: limit,
      skip: page ? (page - 1) * limit : undefined,
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
  } catch (error) {
    throw error;
  }
}
