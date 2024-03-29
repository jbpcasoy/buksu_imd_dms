import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionsHandler from "@/services/handlers/chairperson_suggestion/getChairpersonSuggestionsHandler";
import postChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/postChairpersonSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    switch (req.method) {
      case "POST":
        return postChairpersonSuggestionHandler(req, res);
      case "GET":
        return getChairpersonSuggestionsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
