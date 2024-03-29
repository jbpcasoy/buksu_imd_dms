import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedPeerSuggestionHandler from "@/services/handlers/submitted_peer_suggestion/deleteSubmittedPeerSuggestionHandler";
import getSubmittedPeerSuggestionHandler from "@/services/handlers/submitted_peer_suggestion/getSubmittedPeerSuggestionHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedPeerSuggestionHandler(req, res);
      case "DELETE":
        return deleteSubmittedPeerSuggestionHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
