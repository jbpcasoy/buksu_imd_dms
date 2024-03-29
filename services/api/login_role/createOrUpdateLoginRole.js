import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createOrUpdateLoginRole({ userId, Role }) {
  const prisma = PRISMA_CLIENT;
  const user = await findUser({ userId, Role });
  if (!user) {
    try {
      const loginRole = await prisma.loginRole.update({
        where: {
          userId,
        },
        data: {
          Role: "UNAUTHORIZED",
        },
      });

      return loginRole;
    } catch (err) {
      const loginRole = await prisma.loginRole.create({
        data: {
          userId,
          Role: "UNAUTHORIZED",
        },
      });

      return loginRole;
    }
  }

  try {
    const loginRole = await prisma.loginRole.update({
      where: {
        userId: user.id,
      },
      data: {
        Role,
      },
    });

    return loginRole;
  } catch (err) {
    const loginRole = await prisma.loginRole.create({
      data: {
        userId: user.id,
        Role,
      },
    });

    return loginRole;
  }
}

async function findUser({ userId, Role }) {
  const prisma = PRISMA_CLIENT;
  switch (Role) {
    case "ADMIN":
      return prisma.user.findFirst({
        where: {
          Admin: {
            userId,
          },
        },
      });
    case "UNAUTHORIZED": // Same behavior as case "FACULTY"
    case "FACULTY":
      return prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    default:
      throw new Error(`Error: ${Role} is not supported.`);
  }
}
