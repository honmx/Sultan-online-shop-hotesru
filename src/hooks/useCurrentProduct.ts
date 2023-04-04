import { useAppSelector } from "../store/hooks";

export const useCurrentProduct = (id: number) => {
  const products = useAppSelector(state => state.products.products);
  const product = products.find(item => item.id === id);

  return product;
} 