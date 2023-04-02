import { IProduct } from "../types/IProducts";

export const getItemsFormLocalStorage = () => {
  const products = localStorage.getItem("products");

  if (!products) return [];

  return JSON.parse(products) as IProduct[];
}