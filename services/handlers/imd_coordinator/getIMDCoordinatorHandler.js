import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinator from "@/services/api/imd_coordinator/readIMDCoordinator";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinator = await readIMDCoordinator({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(iMDCoordinator);
}
