import { reqLog } from "@/services/api/logger";
import getChairpersonReviewItemsHandler from "@/services/handlers/chairperson_review_item/getChairpersonReviewItemsHandler";
import postChairpersonReviewItemHandler from "@/services/handlers/chairperson_review_item/postChairpersonReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "POST":
        return postChairpersonReviewItemHandler(req, res);
      case "GET":
        return getChairpersonReviewItemsHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
