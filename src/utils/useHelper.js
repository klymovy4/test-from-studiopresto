import { useDispatch } from "react-redux";
import {
    findBySearch
  } from "../store/itemsSlice";
export default function useHelper() {
  const dispatch = useDispatch();

  const filterBySearch = function (title) {
    console.log(title);


    // return
    dispatch(findBySearch([title]))
  };

  return { filterBySearch };
}
