import ChairpersonReviewNotificationItem from "./ChairpersonReviewNotificationItem";
import ChairpersonSuggestionNotificationItem from "./ChairpersonSuggestionNotificationItem";
import CoordinatorReviewNotificationItem from "./CoordinatorReviewNotificationItem";
import CoordinatorSuggestionNotificationItem from "./CoordinatorSuggestionNotificationItem";
import PeerReviewNotificationItem from "./PeerReviewNotificationItem";
import PeerSuggestionNotificationItem from "./PeerSuggestionNotificationItem";

export default function NotificationItem({ notification }) {
  if (!notification) return null;

  if (notification.Type === "SUBMITTED_PEER_REVIEW") {
    return <PeerReviewNotificationItem notification={notification} />;
  } else if (notification.Type === "SUBMITTED_CHAIRPERSON_REVIEW") {
    return <ChairpersonReviewNotificationItem notification={notification} />;
  } else if (notification.Type === "SUBMITTED_COORDINATOR_REVIEW") {
    return <CoordinatorReviewNotificationItem notification={notification} />;
  } else if (notification.Type === "SUBMITTED_COORDINATOR_SUGGESTION") {
    return (
      <CoordinatorSuggestionNotificationItem notification={notification} />
    );
  } else if (notification.Type === "SUBMITTED_CHAIRPERSON_SUGGESTION") {
    return (
      <ChairpersonSuggestionNotificationItem notification={notification} />
    );
  } else if (notification.Type === "SUBMITTED_PEER_SUGGESTION") {
    return <PeerSuggestionNotificationItem notification={notification} />;
  }
}