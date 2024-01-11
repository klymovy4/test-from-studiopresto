import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import classes from "./CartOrederBlock.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartTotalBlock() {
  const navigate = useNavigate();
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <Box className={classes.orderWrapper}>
      <Typography level="h4">Total: </Typography>

      <div className={classes.cartReceipt}>
        <Typography sx={{ marginRight: 2 }} variant="body">
          {totalPrice.toFixed(2)} ₴
        </Typography>

        <Button
          variant="contained"
          size="small"
          color="success"
          endIcon={<SendIcon />}
          onClick={() => navigate("/order")}
        >
          Order
        </Button>
      </div>
    </Box>
  );
}
