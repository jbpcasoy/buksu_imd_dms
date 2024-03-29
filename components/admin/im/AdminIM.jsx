import frontendDeleteIM from "@/services/frontend/im/frontendDeleteIM";
import frontendUpdateIM from "@/services/frontend/im/frontendUpdateIM";
import AdminIMView from "@/views/admin/im/AdminIMView";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminIM({ im }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [iMData, setIMData] = useState(im);
  const router = useRouter();

  async function onEdit(values) {
    return frontendUpdateIM(iMData.id, {
      serialNumber: values.serialNumber,
      authors: values.authors,
      title: values.title,
      type: values.type,
      status: values.status,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "IM updated successfully",
          variant: "success",
        });
        setIMData(res);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to update IM",
          variant: "error",
        });
      });
  }

  async function onDelete() {
    return frontendDeleteIM(iMData.id)
      .then(() => {
        enqueueSnackbar({
          message: "IM deleted successfully",
          variant: "success",
        });
        setIMData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to update IM",
          variant: "error",
        });
      });
  }

  async function onTrackIM() {
    return router.push(`/admin/im/${iMData.id}/track`);
  }

  if (!iMData) {
    return null;
  }

  return (
    <AdminIMView
      type={iMData.type}
      peerReviewed={Boolean(iMData.SubmittedPeerReview)}
      coordinatorReviewed={Boolean(iMData.SubmittedCoordinatorReview)}
      chairpersonReviewed={Boolean(iMData.SubmittedChairpersonReview)}
      serialNumber={iMData.serialNumber}
      title={iMData.title}
      owner={iMData.owner.user.name}
      department={iMData.owner.department.name}
      status={iMData.status}
      dateCreated={iMData.createdAt}
      key={iMData.id}
      authors={iMData.authors}
      onEdit={onEdit}
      onDelete={onDelete}
      onViewPeerReview={() =>
        router.push(
          `/admin/peer_review/${iMData.SubmittedPeerReview.PeerReview.id}`
        )
      }
      onViewChairpersonReview={() =>
        router.push(
          `/admin/chairperson_review/${iMData.SubmittedChairpersonReview.ChairpersonReview.id}`
        )
      }
      onViewCoordinatorReview={() =>
        router.push(
          `/admin/coordinator_review/${iMData.SubmittedCoordinatorReview.CoordinatorReview.id}`
        )
      }
      onViewIM={() => {
        router.push(`/admin/im/${iMData.id}`);
      }}
      onTrackIM={onTrackIM}
    />
  );
}
