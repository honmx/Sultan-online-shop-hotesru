import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProducts";

type CartProductType = {
  product: IProduct;
  quantity: number;
}

interface ICartSlice {
  cartItems: CartProductType[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  } as ICartSlice,
  reducers: {
    addProduct(state, action: PayloadAction<CartProductType>) {
      state.cartItems.push(action.payload);
    }
  }
});

export const { } = cartSlice.actions;
export default cartSlice.reducer;