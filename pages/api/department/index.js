import { reqLog } from "@/services/api/logger";
import getDepartmentsHandler from "@/services/handlers/department/getDepartmentsHandler";
import postDepartmentHandler from "@/services/handlers/department/postDepartmentHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDepartmentsHandler(req, res);
    case "POST":
      return postDepartmentHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
