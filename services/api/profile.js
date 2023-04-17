import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export async function updateUser(id, data) {
  const prisma = PRISMA_CLIENT;

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: data,
  });

  return updatedUser;
}
