import { useAppSelector } from "../store/hooks"
import { IProduct } from "../types/IProducts";

export const useCartProduct = (product: IProduct | undefined) => {
  const cartProduct = useAppSelector(state => state.cart.cartItems).find(item => item.product.barcode === product?.barcode);

  return { inCart: Boolean(cartProduct) }
}