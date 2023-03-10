import { reqLog } from "@/services/api/logger";
import deleteFileHandler from "@/services/handlers/file/deleteFileHandler";
import getFileHandler from "@/services/handlers/file/getFileHandler";
import putFileHandler from "@/services/handlers/file/putFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getFileHandler(req, res);
    case "PUT":
      return putFileHandler(req, res);
    case "DELETE":
      return deleteFileHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
