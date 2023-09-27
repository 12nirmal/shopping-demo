import { createSlice } from "@reduxjs/toolkit";
// import products from "../_mock/product_items";
// import { useEffect } from "react";

const items =
  localStorage.getItem("cartData") != null
    ? JSON.parse(localStorage.getItem("cartData"))
    : [];

const totalA =
  localStorage.getItem("totalItem") != null
    ? JSON.parse(localStorage.getItem("totalItem"))
    : 0;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: items,
    totalItem: totalA,
  },

  reducers: {
    addToCart: (state, action) => {
      const pId = action.payload.productId;
      const qty = parseInt(action.payload.qty);
      const price = parseInt(action.payload.price);
      state.totalItem = state.totalItem + qty;
      const cartObj = {
        productId: pId,
        qty: qty,
        price: price,
      };

      const isCartEmpty = state.cartItems.length === 0;

      if (isCartEmpty) {
        state.cartItems = [cartObj, ...state.cartItems];
      } else {
        const isProEx = state.cartItems.find((item) => item.productId === pId);

        if (isProEx) {
          state.cartItems.flat().forEach((item) => {
            if (item.productId === pId) {
              item.qty += qty;
            }
          });
        } else {
          state.cartItems = [cartObj, ...state.cartItems];
        }
      }
      localStorage.setItem(
        "cartData",
        JSON.stringify(state.cartItems.map((item) => item))
      );

      localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },

    addQty: (state, action) => {
      const pId = action.payload;
      state.cartItems.forEach((item) => {
        if (item.productId === pId) {
          item.qty += 1;
        }
      });
      state.totalItem = state.totalItem + 1;
      // localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },

    decreaseQty: (state, action) => {
      // const pId = action.payload;
      // console.log(pId);
      const item = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (item.qty === 1) {
        item.qty = 1;
      } else {
        item.qty--;
      }
      state.totalItem = state.totalItem -= 1;
      // localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );

      state.cartItems = removeItem;
      state.totalItem = state.totalItem - 1;

      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
      localStorage.setItem("totalItem", JSON.stringify(state.totalItem));
    },
  },
});

export const { addToCart, addQty, decreaseQty, removeFromCart, getTotal } =
  cartSlice.actions;
export default cartSlice;
