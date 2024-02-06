import { useDispatch } from "react-redux";
import { GET } from "./api";
import { sliceItems } from "../utils/helper";
import {
  setItems,
  setItemsCategory,
  setSlicedItems,
  toggleLoader,
} from "../store/itemsSlice";

export default function useApi() {
  const dispatch = useDispatch();

  const init = function () {
    fetchItems();
    fetchItemsCategory();
    localStorage.setItem("currentCategory", "all");
  };

  const fetchItems = async function () {
    dispatch(toggleLoader(true));
    const products = await GET("products");
    if (products?.data) {
      let slicedItems = sliceItems(products.data);

      dispatch(setSlicedItems(slicedItems));
      dispatch(setItems(products.data));
      dispatch(toggleLoader(false));
    }
  };

  const fetchItemsCategory = async function () {
    let categories = await GET("products/categories");
    const data = categories?.data;
    if (data) {
      dispatch(setItemsCategory(data));
    }
  };

  const fetchSpetialCategory = async function (category) {
    dispatch(toggleLoader(true));
    let product;
    if (!category) {
      product = await GET("products");
      localStorage.setItem("currentCategory", "all");
    } else {
      product = await GET(`products/category/${category}`);
      localStorage.setItem("currentCategory", category);
    }
    let result;
    if (product?.data) {
      result = sliceItems(product.data);
    }

    dispatch(setSlicedItems(result));
    dispatch(toggleLoader(false));
  };

  const postEmail = async function (result) {
    fetch("http://localhost:4000/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return {
    fetchItems,
    fetchItemsCategory,
    fetchSpetialCategory,
    init,
    postEmail,
  };
}
