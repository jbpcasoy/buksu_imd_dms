import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveFile(id) {
  const prisma = PRISMA_CLIENT;

  const activeFile = await prisma.activeFile.delete({
    where: {
      id,
    },
  });

  return activeFile;
}
