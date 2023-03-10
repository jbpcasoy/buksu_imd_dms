import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deletePeerReviewHandler from "@/services/handlers/peer_review/deletePeerReviewHandler";
import getPeerReviewHandler from "@/services/handlers/peer_review/getPeerReviewHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getPeerReviewHandler(req, res);
    case "DELETE":
      return deletePeerReviewHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
