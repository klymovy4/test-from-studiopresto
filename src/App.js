import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DrawerComponent from "./Components/Drawer/Drawer";
import BasicPagination from "./Components/Pagination/Pagination";
import useApi from "./api/useApi";
import useHelper from "./utils/useHelper";
import BasicCard from "./Components/Card/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import Input from "@mui/joy/Input";
import { findBySearch } from "./store/itemsSlice";

export default function App() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const { fetchItems } = useApi();
  const { filterBySearch } = useHelper();
  const { items, slicedItems } = useSelector((state) => state.items);

  useEffect(() => {
    if (slicedItems) {
      setCurrentPage(1);
    }
  }, [slicedItems]);

  useEffect(() => {
    fetchItems();
  }, []);

  function checkCurrentPage() {
    if (slicedItems.length > 0 && slicedItems[currentPage - 1]) {
      return true;
    }
    return false;
  }

  function hanleSearch(event) {
    const value = event.target.value;
    dispatch(findBySearch(value));
    setSearchValue(value);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Input
          placeholder="Search..."
          sx={{ width: "300px", margin: "0.5rem" }}
          value={searchValue}
          onChange={(event) => hanleSearch(event)}
        />
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
          }}
        >
          {checkCurrentPage() &&
            slicedItems[currentPage - 1].map((item) => {
              return <BasicCard key={item.id} item={item} />;
            })}
        </Box>
        {slicedItems.length === 0 ? (
          <h3>No any items!</h3>
        ) : (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <BasicPagination
              slicedItems={slicedItems.length}
              page={currentPage}
              changePagination={(page) => setCurrentPage(page)}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
