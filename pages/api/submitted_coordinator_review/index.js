import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedCoordinatorReviewsHandler from "@/services/handlers/submitted_coordinator_review/getSubmittedCoordinatorReviewsHandler";
import postSubmittedCoordinatorReview from "@/services/handlers/submitted_coordinator_review/postSubmittedCoordinatorReview";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postSubmittedCoordinatorReview(req, res);
      case "GET":
        return getSubmittedCoordinatorReviewsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
