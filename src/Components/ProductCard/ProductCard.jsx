import React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import "./ProductCard.css";

export default function BasicCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        margin: "0.5rem",
        cursor: "pointer",
      }}
      onClick={() => navigate(`item/${item.id}`, { state: item })}
    >
      <ImageWrapper {...item} style={{ height: "300px" }} />
      <CardContent style={{ display: "flex", justifyContent: "start" }}>
        <Typography variant="caption">{item?.category}</Typography>
        <Typography variant="subtitle1">{item.title}</Typography>

        <Typography variant="subtitl2" sx={{ mt: "auto" }}>
          {item?.price} ₴
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          variant="solid"
          size="lg"
          className="add-to-cart"
          style={{ background: "#3b556f" }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(item));
          }}
        >
          Buy
        </Button>
      </CardOverflow>
    </Card>
  );
}
