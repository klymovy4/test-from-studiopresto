import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';


export default function AlertComponent() {
  return (
    <Snackbar
    //   open={open}
      autoHideDuration={6000}
    //   onClose={handleClose}
      message="Note archived"
    //   action={action}
    />
  );
}
