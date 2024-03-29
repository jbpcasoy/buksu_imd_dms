import { reqLog } from "@/services/api/logger";
import getFacultiesHandler from "@/services/handlers/faculty/getFacultiesHandler";
import postFacultyHandler from "@/services/handlers/faculty/postFacultyHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getFacultiesHandler(req, res);
      case "POST":
        return postFacultyHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
