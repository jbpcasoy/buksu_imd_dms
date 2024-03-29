import userAbility from "@/services/abilities/defineAbility";
import readCollege from "@/services/api/college/readCollege";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCollegeHandler(req, res) {
  const { name } = req.body;
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const college = await readCollege({
    id,
    ability: await userAbility(user),
    filter: { name },
  });

  return res.status(200).json(college);
}
