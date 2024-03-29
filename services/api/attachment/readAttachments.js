import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readAttachments({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const attachments = await prisma.attachment.findMany({
    take: limit,
    skip: (page - 1) * limit,
  });

  return attachments;
}
