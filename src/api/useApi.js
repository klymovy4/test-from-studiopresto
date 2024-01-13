import { useDispatch } from "react-redux";
import { GET } from "./api";
import { sliceItems } from "../utils/helper";
import {
  setItems,
  setItemsCategory,
  setSlicedItems,
  toggleLoader
} from "../store/itemsSlice";

const pagePagination = 6;

export default function useApi() {
  const dispatch = useDispatch();

  const fetchItems = async function () {
    dispatch(toggleLoader(true))
    // move to init()
    const products = await GET("products");

    let slicedItems = sliceItems(products.data);
    dispatch(setSlicedItems(slicedItems));
    dispatch(setItems(products.data));
    dispatch(toggleLoader(false))
  };

  const fetchItemsCategory = async function () {
    // move to init()
    let categories = await GET("products/categories");
    categories = categories.data.map(
      (element) => element.charAt(0).toUpperCase() + element.slice(1)
    );

    dispatch(setItemsCategory(categories));
  };

  const fetchSpetialCategory = async function (category) {
    dispatch(toggleLoader(true))
    let product;
    if (!category) {
      product = await GET("products");
    } else {
      category = category.toLowerCase();
      product = await GET(`products/category/${category}`);
    }
    let result = sliceItems(product.data);

    dispatch(setSlicedItems(result));
    dispatch(toggleLoader(false))
  };

  return { fetchItems, fetchItemsCategory, fetchSpetialCategory };
}
