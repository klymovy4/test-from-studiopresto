import { useLocation } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";

import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import classes from "./Cart.module.css";
import { Box } from "@mui/material";
import { Margin } from "@mui/icons-material";
import CartItem from "../CartItem/CartItem";
import TotalBlock from "../OrderBlock/TotalBlock";

export default function CartComponent() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  if (!cart || !Array.isArray(cart)) {
    return <p>Корзина пуста</p>;
  }
  return (
    <>
      <Box sx={{ margin: 2 }}>
        <Typography variant="h3" fontWeight="md" textColor="text.primary">
          Your cart {cart.length === 0 && "is empty."}
        </Typography>
      </Box>

      {cart.length !== 0 && (
        <div className={classes.cartWrapper}>
          {cart.map((item) => {
            const element = item.item;
            return (
              <CartItem
                key={element.id}
                {...element}
                quantity={item.quantity}
              />
            );
          })}

          
          <TotalBlock />
        </div>
      )}
    </>
  );
}
