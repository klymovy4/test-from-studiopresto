import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SuccessPage() {
  const { state } = useLocation();

  return (
    <Box sx={{ margin: 2, marginLeft: 0 }}>
      <Typography variant="h5" sx={{ ml: 3 }}>
        Purchase completed successfully, please check {state.email} email!
      </Typography>
    </Box>
  );
}
