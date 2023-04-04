import { CartProductType } from "../../types/CartProductType";

export const getCartItemsFromLocalStorage = (): CartProductType[] => {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");

  return cartProducts as CartProductType[];
}