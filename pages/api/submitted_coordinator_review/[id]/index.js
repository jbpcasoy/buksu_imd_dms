import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedCoordinatorHandler from "@/services/handlers/submitted_coordinator_review/deleteSubmittedCoordinatorHandler";
import getSubmittedCoordinatorReviewHandler from "@/services/handlers/submitted_coordinator_review/getSubmittedCoordinatorReviewHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedCoordinatorReviewHandler(req, res);
      case "DELETE":
        return deleteSubmittedCoordinatorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
