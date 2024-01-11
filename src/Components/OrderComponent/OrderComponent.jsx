import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutOrder from "../CheckoutOrder/CheckoutOrder";
import classes from "./OrderComponent.module.css";
import FormComponent from '../FormComponent/FormComponent';

export default function OrderComponent() {
  const navigate = useNavigate();
  const { totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    if(totalPrice === 0) {
      navigate("/cart") // todo 
    }
  })

  return (
    <div style={{ padding: "1rem" }}>
      <div className={classes.formWrapper}>
        <FormComponent />
      </div>
      <CheckoutOrder />
    </div>
  );
}
