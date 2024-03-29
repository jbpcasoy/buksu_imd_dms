import { reqLog } from "@/services/api/logger";
import deleteIMDCoordinatorEndorsementHandler from "@/services/handlers/imd_coordinator_endorsement/deleteIMDCoordinatorEndorsementHandler";
import getIMDCoordinatorEndorsement from "@/services/handlers/imd_coordinator_endorsement/getIMDCoordinatorEndorsement";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getIMDCoordinatorEndorsement(req, res);
      case "DELETE":
        return deleteIMDCoordinatorEndorsementHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
