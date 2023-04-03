import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { products } from "../../helpers/data/products";
import { IProduct } from "../../types/IProducts";
import { getItemsFormLocalStorage } from "../../helpers/getItemsFormLocalStorage";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: getItemsFormLocalStorage() || products,
  },
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    replaceProduct(state, action: PayloadAction<IProduct>) {
      state.products = state.products.filter(item => item.id !== action.payload.id).concat(action.payload);
    }
  }
});

export const { setProducts, addProduct, replaceProduct } = productsSlice.actions;
export default productsSlice.reducer;