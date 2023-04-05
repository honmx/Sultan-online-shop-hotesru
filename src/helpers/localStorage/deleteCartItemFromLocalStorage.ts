import { CartProductType } from "../../types/CartProductType";
import { IProduct } from "../../types/IProducts";

export const deleteCartItemFromLocalStorage = (product: IProduct) => {
  const jsonItems = localStorage.getItem("cartProducts");

  if (!jsonItems) return;

  const items = JSON.parse(jsonItems) as CartProductType[];

  const filteredItems = items.filter(item => item.product.id !== product.id);

  localStorage.setItem("cartProducts", JSON.stringify(filteredItems));
}