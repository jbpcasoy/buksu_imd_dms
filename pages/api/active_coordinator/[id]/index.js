import { reqLog } from "@/services/api/logger";
import deleteActiveCoordinatorHandler from "@/services/handlers/active_coordinator/deleteActiveCoordinatorHandler";
import getActiveCoordinatorHandler from "@/services/handlers/active_coordinator/getActiveCoordinatorHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getActiveCoordinatorHandler(req, res);
      case "DELETE":
        return deleteActiveCoordinatorHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
