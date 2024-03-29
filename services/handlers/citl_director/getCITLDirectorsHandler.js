import userAbility from "@/services/abilities/defineAbility";
import readCITLDirectors from "@/services/api/citl_director/readCITLDirectors";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCITLDirectorsHandler(req, res) {
  const {
    limit,
    page,
    name,
    sortColumn = "User.name",
    sortOrder = "asc",
    active,
    email,
  } = req.query;

  const user = await getServerUser(req, res);

  const cITLDirectors = await readCITLDirectors({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    sortColumn,
    sortOrder,
    active: active ? JSON.parse(active) : undefined,
    email,
    ability: await userAbility(user),
  });
  return res.status(200).json(cITLDirectors);
}
