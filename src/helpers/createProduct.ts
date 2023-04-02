import { ICreateProduct } from "../types/ICreateProduct";
import { IProduct } from "../types/IProducts";

export const createProduct = ({ id, brand, name, description, price, url, capacity, currency, category, selectedTypes }: ICreateProduct) => {
  const product: IProduct = {
    id,
    name: {
      main: brand,
      secondary: name
    },
    url,
    capacity: {
      value: parseFloat(capacity).toString(),
      type: capacity.slice(parseFloat(capacity).toString().length),
    },
    barcode: id,
    producer: brand,
    brand,
    description,
    price: {
      value: parseFloat(price),
      currency,
    },
    type: {
      main: category,
      subtypes: selectedTypes
    },
    stock: true
  };

  return product;
}