import useCoordinatorSuggestion from "@/hooks/useCoordinatorSuggestion";
import useCoordinatorSuggestionItems from "@/hooks/useCoordinatorSuggestionItems";
import useSubmittedCoordinatorReview from "@/hooks/useSubmittedCoordinatorReview";
import CoordinatorSuggestionItemView from "./CoordinatorSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function CoordinatorSuggestionView({
  coordinatorReview,
  viewOnly = false,
}) {
  const {
    submittedCoordinatorReview,
    submittedCoordinatorReviewError,
    submittedCoordinatorReviewLoading,
  } = useSubmittedCoordinatorReview({
    coordinatorReviewId: coordinatorReview.id,
  });
  const {
    coordinatorSuggestion,
    coordinatorSuggestionError,
    coordinatorSuggestionLoading,
  } = useCoordinatorSuggestion({
    submittedCoordinatorReviewId: submittedCoordinatorReview?.id,
  });
  const {
    coordinatorSuggestionItems,
    coordinatorSuggestionItemsError,
    coordinatorSuggestionItemsLoading,
    refreshCoordinatorSuggestionItems,
  } = useCoordinatorSuggestionItems({
    coordinatorSuggestionId: coordinatorSuggestion?.id,
  });

  return (
    <SuggestionView title={"Coordinator Suggestions"} viewOnly={viewOnly}>
      {coordinatorSuggestionItems.map((coordinatorSuggestionItem) => (
        <CoordinatorSuggestionItemView
          viewOnly={viewOnly}
          key={coordinatorSuggestionItem.id}
          coordinatorSuggestionItem={coordinatorSuggestionItem}
        />
      ))}
    </SuggestionView>
  );
}