import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";

//**
// type MessageType = 'success' | 'error' | 'info' | 'warning';

// interface NotifyProps {
//   message: string,
//   type: MessageType,
//   verticalPosition?: 'top' | 'bottom',
//   horizontalPosition?: 'left' | 'right' | 'center'
// } */

function NotificationSnackbar({
  message,
  type,
  verticalPosition,
  horizontalPosition,
}) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: verticalPosition ? verticalPosition : "bottom",
        horizontal: horizontalPosition ? horizontalPosition : "right",
      }}
      open={true}
      sx={{ position: "fixed", zIndex: 1500 }}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

const showNotification = ({
  message,
  type,
  verticalPosition,
  horizontalPosition,
}) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <NotificationSnackbar
      message={message}
      type={type}
      verticalPosition={verticalPosition}
      horizontalPosition={horizontalPosition}
    />
  );

  setTimeout(() => {
    document.body.removeChild(container);
  }, 2000);
};

export default showNotification;
