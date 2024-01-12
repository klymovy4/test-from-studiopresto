import { useSelector } from "react-redux";
import { useFormik} from "formik";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { validationSchema } from "./yupSchema";
import classes from "./FormComponent.module.css";


export default function FormComponent() {
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart);


  
  function concatResult(values) {
    const cartResult = cart.cart;
    const result  = {
      ...values, 
      cart: [...cart.cart],
      totalPrice: cart.totalPrice
    }
    // cartResult.push(values)
    console.log(result);
  }

  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async (values) => {
      // dend on google form
      // const formLink = `https://docs.google.com/forms/d/e/1FAIpQLSdaqy7_oa_ifX3LfwEA0cS4nsB8X9agV329K5YKhSXTy3SE8w/formResponse?usp=pp_url&entry.1656568190=${event.name}&entry.160385572=${event.email}&entry.986887705=${event.phone}&submit=Submit`;
      // const res = await fetch(formLink);

      concatResult(values);
      formik.resetForm();
    },
    validationSchema,
  });

  return (
    <div className={classes.formWrapper}>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdslx8TdDc6XkmBJT-UbbZYuuV68Xn8OVwd9_Fe02y1Yb3G6A/formResponse"
        target="_self"
        method="POST"
        id="mG61Hd"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormControl sx={{ width: "80%" }}>
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
        <FormControl sx={{ width: "80%" }}>
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
        <FormControl sx={{ width: "80%" }}>
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
            <Typography variant="body">{cart.totalPrice.toFixed(2)} ₴</Typography>
          </div>
        </div>
      </form>
    </div>
  );
}
