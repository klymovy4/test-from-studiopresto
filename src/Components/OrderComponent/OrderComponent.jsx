import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutOrder from "../CheckoutOrder/CheckoutOrder";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./OrderComponent.module.css";

import FormComponent from "../FormComponent/FormComponent";

export default function OrderComponent() {
  const navigate = useNavigate();
  const { totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    if (totalPrice === 0) {
      navigate("/cart");
    }
  });

  return (
    <Box component="main" className="main-wrap-style">
      <Box sx={{ margin: 2, marginLeft: 0 }}>
        <Typography variant="h5" >
          Your order
        </Typography>
      </Box>

      <div className={classes.formAndCheckoutWrapper}>
        <FormComponent />
        <CheckoutOrder />
      </div>
    </Box>
  );
}
