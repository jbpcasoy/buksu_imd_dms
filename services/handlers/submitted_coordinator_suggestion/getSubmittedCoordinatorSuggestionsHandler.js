import userAbility from "@/services/abilities/defineAbility";
import getServerUser from "@/services/helpers/getServerUser";
import readSubmittedCoordinatorSuggestions from "../../api/submitted_coordinator_suggestion/readSubmittedCoordinatorSuggestions";

export default async function getSubmittedCoordinatorSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const submittedCoordinatorSuggestions =
    await readSubmittedCoordinatorSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });

  return res.status(200).json(submittedCoordinatorSuggestions);
}
