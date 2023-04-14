import userAbility from "@/services/abilities/defineAbility";
import readDepartments from "@/services/api/department/readDepartments";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDepartmentsHandler(req, res) {
  try {
    const {
      limit,
      page,
      name,
      collegeName,
      collegeId,
      sortColumn = "name",
      sortOrder = "asc",
    } = req.query;

    const user = await getServerUser(req, res);

    const departments = await readDepartments({
      limit: parseInt(limit),
      page: parseInt(page),
      name,
      collegeName,
      collegeId,
      sortColumn,
      sortOrder,
      ability: await userAbility(user),
    });

    return res.status(200).json(departments);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
