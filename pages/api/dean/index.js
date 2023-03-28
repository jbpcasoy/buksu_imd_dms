import { reqLog } from "@/services/api/logger";
import getDeansHandler from "@/services/handlers/dean/getDeansHandler";
import postDeanHandler from "@/services/handlers/dean/postDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postDeanHandler(req, res);
    case "GET":
      return getDeansHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
