import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import BasicCard from "../Card/ProductCard";
import DrawerComponent from "../Drawer/Drawer";

export default function MainPage() {
  return (
   


    <Box sx={{display: 'flex'}}>
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
     {/* <Toolbar /> */}
    <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((el) => {
          console.log(el);
          return <BasicCard el={el} />;
        })}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
     
      </Box>
    </Box>
    </Box>
  );
}
