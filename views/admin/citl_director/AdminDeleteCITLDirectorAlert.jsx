import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AdminDeleteCITLDirectorAlert({
  open,
  onClose,
  onAgree,
}) {
  return (
    <Dialog open={open}>
      <DialogTitle>Delete CITL Director</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action cannot be undone, are you sure? If this CITL Director have
          corresponding references, this will fail.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAgree} color='error'>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
