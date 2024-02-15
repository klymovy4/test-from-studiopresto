import { useEffect } from "react";
import useApi from "./api/useApi";
import Box from "@mui/material/Box";
import Loader from "./Components/Loader/Loader";
import DrawerComponent from "./Components/DrawerComponent/DrawerComponent";
import MainPage from "./Components/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { initializedApp } from "./store/itemsSlice";
import { Typography } from "@mui/material";

export default function App() {
  const dispatch = useDispatch();
  const { initialized, error } = useSelector((state) => state.items);
  const { init } = useApi();

  useEffect(() => {
    if (!initialized) {
      init();
      dispatch(initializedApp());
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      {error ? (
        <Typography variant="h5">Something went wrong</Typography>
      ) : initialized ? (
        <MainPage />
      ) : (
        <Loader />
      )}
    </Box>
  );
}
