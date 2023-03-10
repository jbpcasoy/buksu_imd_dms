import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";

export default function AdminIMView({
  peerReviewed,
  coordinatorReviewed,
  chairpersonReviewed,
  serialNumber,
  title,
  department,
  owner,
  status,
  dateCreated,
  onViewPeerReview,
  onViewChairpersonReview,
  onViewCoordinatorReview,
}) {
  const router = useRouter();

  return (
    <TableRow>
      <TableCell>{serialNumber}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{owner}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewPeerReview}
          disabled={!peerReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewChairpersonReview}
          disabled={!coordinatorReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewCoordinatorReview}
          disabled={!chairpersonReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell>{moment(dateCreated).format("lll")}</TableCell>
    </TableRow>
  );
}
