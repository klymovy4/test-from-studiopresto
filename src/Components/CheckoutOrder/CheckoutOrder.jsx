import { useSelector } from "react-redux";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import classes from "./CheckoutOrder.module.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

export default function CheckoutOrder() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div style={{marginTop: '1rem'}} className={classes.oreorderRecipienWrapper}>
      {cart &&
        cart.map((item) => (
          <div key={item.item.id} className={classes.orderRecipientItem}>
            <div className={classes.orderRecipientItemInner}>
            <ImageWrapper {...item.item} style={{width: '23%'}} />
           
            <Box className={classes.cartDescription}>
              <Typography level="body" sx={{ mb: 0.5 }}>
                {item?.item.title}
              </Typography>
              <Typography   level="body" sx={{ mt: 1}}>
                {item?.item.price} x {item.quantity} pcs :  {item.priceCurrentPosition} ₴
              </Typography>
            </Box>
            </div>
          </div>
        ))}
    </div>
  );
}
