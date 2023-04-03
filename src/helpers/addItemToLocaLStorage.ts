import { IProduct } from "../types/IProducts";
import { getItemsFormLocalStorage } from "./getItemsFormLocalStorage";

export const addItemToLocalStorage = (product: IProduct) => {
  const items = getItemsFormLocalStorage();

  if (!items) return;

  const filtered = items.filter(item => item.id !== product.id);

  localStorage.setItem("products", JSON.stringify([...filtered, product]));
}