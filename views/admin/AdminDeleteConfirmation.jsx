import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AdminDeleteConfirmation({
  onAgree,
  onClose,
  open,
  agreeText = "Delete",
  closeText = "Cancel",
  title = "Are you sure?",
  message = "This action cannot be undone.",
}) {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          {closeText}
        </Button>
        <Button
          onClick={() => {
            onAgree().then(() => {
              onClose();
            });
          }}
          color='error'
        >
          {agreeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
