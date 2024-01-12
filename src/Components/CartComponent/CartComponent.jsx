import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import CartTotalBlock from "../OrderBlock/CartTotalBlock";
import classes from "./Cart.module.css";

export default function CartComponent() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Box
    className="main-wrap-style"
      component="main"
    >
      <Box sx={{ margin: 2, marginLeft: 0}}>
        <Typography variant="h5">
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
    </Box>
  );
}
