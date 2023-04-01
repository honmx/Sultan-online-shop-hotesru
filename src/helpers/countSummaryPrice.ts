import { CartProductType } from "../types/CartProductType";

export const countSummaryPrice = (products: CartProductType[]) => {
  if (products.length === 0) return 0;

  return products.reduce((acc, cur) => acc += cur.product.price.value * cur.quantity, 0).toFixed(2) + products[0].product.price.currency;
}