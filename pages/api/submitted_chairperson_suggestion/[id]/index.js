import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedChairpersonSuggestionHandler from "@/services/handlers/submitted_chairperson_suggestion/deleteSubmittedChairpersonSuggestionHandler";
import getSubmittedChairpersonSuggestionHandler from "@/services/handlers/submitted_chairperson_suggestion/getSubmittedChairpersonSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedChairpersonSuggestionHandler(req, res);
      case "DELETE":
        return deleteSubmittedChairpersonSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
