import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedIMDCoordinatorSuggestionsHandler from "@/services/handlers/submitted_imd_coordinator_suggestion/getSubmittedIMDCoordinatorSuggestionsHandler";
import postSubmittedIMDCoordinatorSuggestionHandler from "@/services/handlers/submitted_imd_coordinator_suggestion/postSubmittedIMDCoordinatorSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postSubmittedIMDCoordinatorSuggestionHandler(req, res);
      case "GET":
        return getSubmittedIMDCoordinatorSuggestionsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
