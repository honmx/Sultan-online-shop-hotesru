import { IProduct } from "../../types/IProducts";

export const deleteItemFromLocalStorage = (product: IProduct) => {
  const jsonItems = localStorage.getItem("products");

  if (!jsonItems) return;

  const items = JSON.parse(jsonItems) as IProduct[];

  const filteredItems = items.filter(item => item.id !== product.id);

  localStorage.setItem("products", JSON.stringify(filteredItems));
}