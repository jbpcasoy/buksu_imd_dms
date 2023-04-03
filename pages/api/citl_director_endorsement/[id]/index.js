import { reqLog } from "@/services/api/logger";
import getCITLDirectorEndorsementHandler from "@/services/handlers/citl_director_endorsement/getCITLDirectorEndorsementHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCITLDirectorEndorsementHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
