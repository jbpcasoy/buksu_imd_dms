import { reqLog } from "@/services/api/logger";
import deleteChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/deleteChairpersonSuggestionHandler";
import getChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/getChairpersonSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getChairpersonSuggestionHandler(req, res);
      case "DELETE":
        return deleteChairpersonSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
