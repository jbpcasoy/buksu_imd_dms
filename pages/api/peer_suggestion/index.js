import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getPeerSuggestionsHandler from "@/services/handlers/peer_suggestion/getPeerSuggestionsHandler";
import postPeerSuggestionHandler from "@/services/handlers/peer_suggestion/postPeerSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postPeerSuggestionHandler(req, res);
      case "GET":
        return getPeerSuggestionsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
