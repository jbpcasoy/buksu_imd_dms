import useNotification from "@/hooks/notification/useNotification";
import { useEffect } from "react";
import NotificationItemBase from "./NotificationItemBase";

export default function ChairpersonSuggestionNotificationItem({
  notification,
  refreshNotifications,
}) {
  const {
    notification: notificationData,
    notificationError,
    notificationLoading,
  } = useNotification({ notificationId: notification?.id });

  useEffect(() => {
    console.log({ notificationData, notificationError, notificationLoading });
  }, [notificationData, notificationError, notificationLoading]);

  return (
    <NotificationItemBase
      refreshNotifications={refreshNotifications}
      loading={notificationLoading}
      notificationId={notificationData?.id}
      href={`/im/${notificationData?.SubmittedChairpersonSuggestion?.IM?.id}`}
      imgSrc={
        notificationData?.SubmittedChairpersonSuggestion?.ChairpersonSuggestion
          ?.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty
          ?.user?.image
      }
      time={notificationData?.createdAt}
      icon={
        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-300  border border-white rounded-full dark:border-gray-800'>
          <svg
            fill='none'
            className='w-3 h-3 text-white'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            ></path>
          </svg>
        </div>
      }
    >
      New Chairperson Suggestion from{" "}
      <span className='font-semibold text-gray-900 dark:text-white'>
        {
          notificationData?.SubmittedChairpersonSuggestion
            ?.ChairpersonSuggestion?.SubmittedChairpersonReview
            ?.ChairpersonReview?.Chairperson?.Faculty?.user?.name
        }
      </span>
      {` on IM: "${notificationData?.SubmittedChairpersonSuggestion?.IM?.title}"`}
    </NotificationItemBase>
  );
}
