import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import getUserByEmail from "./getUserByEmail";
import statusError from "./throwError";

export default async function getServerUser(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
      throw statusError({
        statusCode: 401,
        message: "Unauthenticated",
      });
    }

    const user = await getUserByEmail(session?.user?.email);

    return user;
  } catch (error) {
    throw error;
  }
}