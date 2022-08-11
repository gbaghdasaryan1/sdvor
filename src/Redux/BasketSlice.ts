import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBasketItem {
  productId: number;
  productName: string;
  productPictureLink: string;
  productPrice: number;
  productCode: string;
}

interface IBasketState {
  items: IBasketItem[];
}

const LOCAL_STORAGE_KEY = "lsk";
const initialState: IBasketState = {
  items: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"),
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<IBasketItem>) => {
      state.items.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    removeBasketItem: (state, action: PayloadAction<IBasketItem>) => {
      state.items = state.items.filter(
        (f) => f.productId !== action.payload.productId
      );

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
  },
});

export const basketAction = basketSlice.actions;
export const basketReduser = basketSlice.reducer;
