import { IProduct } from "../types/IProducts";

export const setItemsToLocalStorage = (items: IProduct[]) => {
  
  localStorage.setItem("products", JSON.stringify(items));
}