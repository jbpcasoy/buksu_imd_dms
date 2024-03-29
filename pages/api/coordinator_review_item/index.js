import { reqLog } from "@/services/api/logger";
import getCoordinatorReviewItemsHandler from "@/services/handlers/coordinator_review_item/getCoordinatorReviewItemsHandler";
import postCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/postCoordinatorReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postCoordinatorReviewItemHandler(req, res);
      case "GET":
        return getCoordinatorReviewItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
