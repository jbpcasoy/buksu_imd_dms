import { reqLog } from "@/services/api/logger";
import getCollegesHandler from "@/services/handlers/college/getCollegesHandler";
import postCollegeHandler from "@/services/handlers/college/postCollegeHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCollegesHandler(req, res);
      case "POST":
        return postCollegeHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
