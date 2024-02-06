import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import OrderButton from "../OrderButton/OrderButton";

export default function CartComponent() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <Box className="main-wrap-style" component="main">
      <Box sx={{ margin: 2, marginLeft: 0 }}>
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
          <Box className={classes.orderWrapper}>
            <Typography>Total:</Typography>

            <OrderButton
              onClick={() => navigate("/order")}
              totalPrice={totalPrice}
            />
          </Box>
        </div>
      )}
    </Box>
  );
}
