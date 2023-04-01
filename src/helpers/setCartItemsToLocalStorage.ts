import { CartProductType } from "../types/CartProductType";

export const setCartItemsToLocalStorage = (items: CartProductType[]) => {
  localStorage.setItem("cartProducts", JSON.stringify(items))
}