import { useEffect, useState } from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  remoteItem,
  plusOnePosition,
  removeOnePosition,
} from "../../store/cartSlice";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { image, title, price, quantity, id } = props;
  const [priceCount, setPriceCount] = useState(price);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const indexPosition = cart.findIndex((item) => item.item.id === id);
    const { priceCurrentPosition } = cart[indexPosition];
    setPriceCount(priceCurrentPosition);
  }, [cart]);

  return (
    <div className={classes.cartItem}>
      <ImageWrapper {...props} style={{ width: "33%" }} />
  
      <Box className={classes.cartDescription}>
        <Typography level="h4" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
          {priceCount.toFixed(2)} ₴
        </Typography>

        <Box className={classes.cartCounter}>
          <div>
            <Button
              disabled={quantity === 1}
              size="small"
              variant="outlined"
              // style={{ background: "#3b556f" }}
              onClick={() => dispatch(removeOnePosition(props))}
            >
              -
            </Button>
            <div className={classes.quentity}>{quantity}</div>
            <Button
              variant="outlined"
              size="small"
              // style={{ background: "#3b556f" }}  
              onClick={() => dispatch(plusOnePosition(props))}
            >
              +
            </Button>
          </div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              dispatch(remoteItem(props.id));
            }}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </div>
  );
}
