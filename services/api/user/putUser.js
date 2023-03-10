import { PrismaClient } from ".prisma/client";

export default async function putUser(id, { name, image }) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        image,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
