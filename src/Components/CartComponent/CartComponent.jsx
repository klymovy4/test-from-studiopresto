import Typography from "@mui/joy/Typography";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { Box } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import CartTotalBlock from "../OrderBlock/CartTotalBlock";

export default function CartComponent() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <Box sx={{ margin: 3 }} style={{marginBottom: 0}}>
        <Typography level="h3" fontWeight="md" textColor="text.primary">
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
          <CartTotalBlock />
        </div>
      )}
    </>
  );
}
