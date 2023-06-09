import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartItemsFromLocalStorage } from "../../helpers/localStorage/getCartItemsFromLocalStorage";
import { CartProductType } from "../../types/CartProductType";

interface ICartSlice {
  cartItems: CartProductType[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: getCartItemsFromLocalStorage(),
  } as ICartSlice,
  reducers: {
    addCartProduct(state, action: PayloadAction<CartProductType>) {
      state.cartItems.push(action.payload);
    },
    deleteCartProduct(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(item => item.product.id !== action.payload)
    },
    changeQuantity(state, action: PayloadAction<CartProductType>) {
      if (action.payload.quantity < 1) return state;
      const product = state.cartItems.find(item => item.product.id === action.payload.product.id);
      state.cartItems = state.cartItems.map(item => item !== product ? item : {
        ...product,
        quantity: action.payload.quantity
      });
    },
    clearCart(state) {
      state.cartItems = [];
    }
  }
});

export const { addCartProduct, deleteCartProduct, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;