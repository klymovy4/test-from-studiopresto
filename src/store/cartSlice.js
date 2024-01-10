import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

import {
  cartCounter,
  setPriceCurrentPosition,
  subOfOnePosition,
  sumOfOnePosition,
  getTotalPrice,
} from "../utils1/helper";

const initialState = {
  cart: [],
  cartCounter: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const itemCart = state.cart.find((el) => el.item.id === item.id);

      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push({
          item,
          quantity: 1,
          priceCurrentPosition: 0,
        });
      }
      state.cartCounter = cartCounter(state.cart);
      state.cart.forEach((item) => {
        item.priceCurrentPosition = sumOfOnePosition(item);
      });
    },
    getQuantityOfProducts: (state, action) => {},

    remoteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.item.id != action.payload);
      console.log(state.cart.item); // todo 1
      state.cartCounter = cartCounter(state.cart);
      state.cart.forEach((item) => {
        item.priceCurrentPosition = subOfOnePosition(item);
      });
    },

    plusOnePosition: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.item.id === id);

      if (index !== -1) {
        state.cart[index].quantity += 1;
        state.cart[index].priceCurrentPosition =
          state.cart[index].quantity * state.cart[index].item.price;
      }

      // Обновляем счетчик и общую стоимость (если нужно)
      state.cartCounter = cartCounter(state.cart);
      state.totalPrice = "getTotalPrice(state.cart);";
    },

    removeOnePosition: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.item.id === id);

      if (index !== -1) {
        state.cart[index].quantity -= 1;

        if (state.cart[index].quantity <= 0) {
          // state.cart.splice(index, 1);


        } else {
          state.cart[index].priceCurrentPosition =
            state.cart[index].quantity * state.cart[index].item.price;
        }
      }
      state.cartCounter = cartCounter(state.cart);
      state.totalPrice = "getTotalPrice(state.cart);";
    },
  },
});

export const {
  addToCart,
  getQuantityOfProducts,
  remoteItem,
  removeOnePosition,
  plusOnePosition,
} = cartSlice.actions;

export default cartSlice.reducer;
