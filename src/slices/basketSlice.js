import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      if (state.items.length > 0) {
        state.items.forEach((item) => {
          if (item.id === action.payload.id) {
            item.itemCount++;
            item.price += item.initialPrice;
          } else if (
            !state.items.find((item) => item.id === action.payload.id)
          ) {
            state.items = [...state.items, action.payload];
          }
        });
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    itemCounter: (state, action) => {
      if (action.payload.event === "increaseCounter") {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.itemCount++;
            item.price += item.initialPrice;
          }
        });
      } else {
        state.items.map((item) => {
          if (item.id === action.payload.id && item.itemCount > 1) {
            item.itemCount--;
            item.price = item.price - item.initialPrice;
          }
        });
      }
    },
  },
});

export const { addToBasket, removeFromBasket, itemCounter } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const totalItemPrice = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
