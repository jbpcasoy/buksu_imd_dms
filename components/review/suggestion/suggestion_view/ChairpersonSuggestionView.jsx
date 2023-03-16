import useChairpersonSuggestion from "@/hooks/useChairpersonSuggestion";
import useChairpersonSuggestionItems from "@/hooks/useChairpersonSuggestionItems";
import useSubmittedChairpersonReview from "@/hooks/useSubmittedChairpersonReview";
import ChairpersonSuggestionItemView from "./ChairpersonSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function ChairpersonSuggestionView({
  chairpersonReview,
  viewOnly = false,
}) {
  const {
    submittedChairpersonReview,
    submittedChairpersonReviewError,
    submittedChairpersonReviewLoading,
  } = useSubmittedChairpersonReview({
    chairpersonReviewId: chairpersonReview.id,
  });
  const {
    chairpersonSuggestion,
    chairpersonSuggestionError,
    chairpersonSuggestionLoading,
  } = useChairpersonSuggestion({
    submittedChairpersonReviewId: submittedChairpersonReview?.id,
  });
  const {
    chairpersonSuggestionItems,
    chairpersonSuggestionItemsError,
    chairpersonSuggestionItemsLoading,
    refreshChairpersonSuggestionItems,
  } = useChairpersonSuggestionItems({
    chairpersonSuggestionId: chairpersonSuggestion?.id,
  });

  return (
    <SuggestionView title={"Chairperson Suggestions"} viewOnly={viewOnly}>
      {chairpersonSuggestionItems.map((chairpersonSuggestionItem) => (
        <ChairpersonSuggestionItemView
          viewOnly={viewOnly}
          key={chairpersonSuggestionItem.id}
          chairpersonSuggestionItem={chairpersonSuggestionItem}
        />
      ))}
    </SuggestionView>
  );
}
