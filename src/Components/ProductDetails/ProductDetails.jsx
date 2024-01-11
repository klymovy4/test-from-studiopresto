import { useLocation } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";

import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

export default function ProductDetails() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const item = state;

  return (
    <div className={classes.productDetails}>
      <ImageWrapper {...item} style={{ width: "50%" }} />
      <div className={classes.descriptionWrapper}>
        <div>
          <Typography level="h3" sx={{ mb: 0.5 }}>
            {item?.title}
          </Typography>

          <Typography level="h5" sx={{ mb: 0.5 }}>
            {item?.description}
          </Typography>
          <Typography level="body-sm" sx={{ mb: 1.5 }}>
            {item?.category}
          </Typography>

          <Rating
            readOnly
            name={item?.title}
            defaultValue={item?.rating.rate}
          />
        </div>
        <div className={classes.productFooter}>
          <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
            {item?.price} ₴
          </Typography>
          <Button
            variant="contained"
            style={{ background: "#3b556f" }}
            onClick={() => {
              dispatch(addToCart(item));
            }}
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
