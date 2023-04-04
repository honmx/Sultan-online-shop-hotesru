import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { products } from "../../helpers/data/products";
import { IProduct } from "../../types/IProducts";
import { getItemsFormLocalStorage } from "../../helpers/localStorage/getItemsFormLocalStorage";

interface IProductsSlice {
  products: IProduct[];
}

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: getItemsFormLocalStorage() || products,
  } as IProductsSlice,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    replaceProduct(state, action: PayloadAction<IProduct>) {
      state.products = state.products.map(item => item.id !== action.payload.id ? item : action.payload);
    }
  }
});

export const { setProducts, addProduct, replaceProduct } = productsSlice.actions;
export default productsSlice.reducer;