import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { validationSchema } from "./yupSchema";
import showNotification from "../../Components/Notification/Notification";
import classes from "./FormComponent.module.css";

import { resetCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import useApi from "../../api/useApi";

export default function FormComponent() {
  const { postEmail } = useApi();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function concatResult(values) {
    const cartResult = cart.cart;
    const result = {
      ...values,
      cart: [...cartResult],
      totalPrice: cart.totalPrice,
    };
    console.log('%c result ', 'background: grey; padding: 5px; border-radius: 7px', result);
    postEmail(result);
    dispatch(resetCart());
    navigate("/success", { state: values });
    localStorage.clear();
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async (values) => {
      concatResult(values);
      showNotification({
        type: "success",
        message: "Purchase completed successfully",
      });
      formik.resetForm();
    },
    validationSchema,
  });

  return (
    <div className={classes.formWrapper}>
      <form
        style={{ width: "80%" }}
        id="submitForm"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="name"
            label="Name"
            color={formik.errors.name ? "error" : "primary"}
            name="name"
            variant="standard"
            {...formik.getFieldProps("name")}
          />
        </FormControl>
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <br />
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="email"
            label="Email"
            name="email"
            variant="standard"
            {...formik.getFieldProps("email")}
          />
        </FormControl>
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <br />
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="phone"
            label="Phone"
            name="phone"
            variant="standard"
            {...formik.getFieldProps("phone")}
          />
        </FormControl>
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        ) : null}

        <br />
        <div className={classes.orderComponentFooter}>
          <div className={classes.cartReceipt}>
            <Button
              variant="contained"
              type="submit"
              size="small"
              color="success"
              sx={{ marginRight: 1 }}
              endIcon={<SendIcon />}
            >
              Order
            </Button>
            <Typography variant="body">
              {cart.totalPrice.toFixed(2)} ₴
            </Typography>
          </div>
        </div>
      </form>
    </div>
  );
}
