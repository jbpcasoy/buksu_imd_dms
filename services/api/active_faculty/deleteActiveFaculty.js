import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveFaculty(id) {
  const prisma = PRISMA_CLIENT;

  const activeFaculty = await prisma.activeFaculty.delete({
    where: {
      id,
    },
  });

  return activeFaculty;
}
