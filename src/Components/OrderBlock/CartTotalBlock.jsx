import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./CartOrederBlock.module.css";
import OrderButton from "../OrderButton/OrderButton";

export default function CartTotalBlock() {
  const navigate = useNavigate();
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <Box className={classes.orderWrapper}>
      <Typography>Total:</Typography>

      <OrderButton onClick={() => navigate("/order")} totalPrice={totalPrice} />
    </Box>
  );
}
