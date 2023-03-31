import { IProduct } from "../types/IProducts";
import { sortOptionsType } from "./data/sortOptions";

export const sortBy = (field: keyof sortOptionsType, products: IProduct[]) => {
  switch (field) {
    case "name up":
      return products.sort((a, b) => a.name.main.localeCompare(b.name.main));
    case "name down":
      return products.sort((a, b) => b.name.main.localeCompare(a.name.main));
    case "price up":
      return products.sort((a, b) => a.price.value - b.price.value);
    case "price down":
      return products.sort((a, b) => b.price.value - a.price.value);
    default:
      throw new Error("unhandled case");
  }
}