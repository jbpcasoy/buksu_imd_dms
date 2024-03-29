import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createReadNotification({
  notificationId,
  userId,
}) {
  const prisma = PRISMA_CLIENT;

  const readNotification = await prisma.readNotification.create({
    data: {
      Notification: {
        connect: {
          id: notificationId,
        },
      },
      User: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return readNotification;
}
