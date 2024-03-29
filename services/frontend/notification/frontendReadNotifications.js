import axios from "axios";

export default async function frontendReadNotifications({
  limit,
  page,
  userId,
  facultyId,
  read = false,
}) {
  try {
    const notifications = await axios.get("/api/notification", {
      params: {
        limit,
        page,
        userId,
        facultyId,
        read,
      },
    });

    return notifications.data;
  } catch (error) {
    throw error;
  }
}
