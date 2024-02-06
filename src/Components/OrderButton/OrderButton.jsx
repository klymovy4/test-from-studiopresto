import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import classes from "./OrderButton.module.css";

export default function OrderButton({ onClick, totalPrice, type }) {

  return (
    <Box
      className={classes.cartReceipt}
      style={{ flexDirection: type ? "row-reverse" : null }}
    >
      <Typography
        sx={{
          marginRight: type ? undefined : 2,
          marginLeft: type ?   2 : undefined ,
        }}
        variant="body"
      >
        {totalPrice.toFixed(2)} ₴
      </Typography>

      <Button
        variant="contained"
        size="small"
        type={type ? type : null}
        color="success"
        endIcon={<SendIcon />}
        onClick={onClick ? onClick : null}
      >
        Order
      </Button>
    </Box>
  );
}
