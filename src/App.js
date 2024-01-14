import { useEffect } from "react";
import useApi from "./api/useApi";
import Box from "@mui/material/Box";
import DrawerComponent from "./Components/Drawer/Drawer";
import MainPage from "./Components/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { initializedApp } from "./store/itemsSlice";

export default function App() {
  const dispatch = useDispatch();
  const { initialized } = useSelector((state) => state.items);
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
      <MainPage />
    </Box>
  );
}
