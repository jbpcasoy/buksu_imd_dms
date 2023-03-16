import readSubmittedCoordinatorReviews from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReviews";

export default async function getSubmittedCoordinatorReviewsHandler(req, res) {
  const { limit = 10, page = 1, coordinatorReviewId } = req.query;

  const submittedCoordinatorReviews = await readSubmittedCoordinatorReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    coordinatorReviewId,
  });
  return res.status(200).json(submittedCoordinatorReviews);
}
