import Box from "@mui/material/Box";
import DrawerComponent from "./Components/Drawer/Drawer";
import MainPage from "./Components/MainPage/MainPage";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      <MainPage />
    </Box>
  );
}
