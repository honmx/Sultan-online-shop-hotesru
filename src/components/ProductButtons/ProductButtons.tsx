import React, { Dispatch, FC, SetStateAction } from "react";
import { IProduct } from "../../types/IProducts";
import Button from "../UI/Button/Button";
import IconButton from "../UI/IconButton/IconButton";
import { useCartProduct } from "../../hooks/useCartProduct";
import share from "../../assets/share.svg";
import whiteCart from "../../assets/whiteCart.svg";
import whiteCheck from "../../assets/check-white.svg";
import darkDownload from "../../assets/darkDownload.svg";
import { addCartProduct } from "../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCartItemsToLocalStorage } from "../../helpers/localStorage/setCartItemsToLocalStorage";
import s from "./ProductButtons.module.scss";

interface Props {
  product: IProduct;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  className?: string;
}

const ProductButtons: FC<Props> = ({ product, quantity, setQuantity, className }) => {

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const { inCart } = useCartProduct(product);

  const handleMinusClick = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  }

  const handlePlusClick = () => {
    setQuantity(prev => prev + 1);
  }

  const addToCart = () => {
    if (!product || inCart) return;

    const newProduct = { product, quantity: product.stock ? quantity : 0 };
    dispatch(addCartProduct(newProduct));
    setCartItemsToLocalStorage([...cartProducts, newProduct]);
  }

  return (
    <div className={`${s.buttonsContainer} ${className}`}>
      <p className={s.price}>{product.price.value} {product.price.currency}</p>
      <div className={s.changeQuantityContainer}>
        <Button className={s.minus} w="30px" p="1px 10px" onClick={handleMinusClick}>-</Button>
        <p className={s.quantity}>{quantity}</p>
        <Button className={s.plus} w="30px" p="1px 10px" onClick={handlePlusClick}>+</Button>
      </div>
      <Button img={inCart ? whiteCheck : whiteCart} className={s.cart} onClick={addToCart}>{inCart ? "Добавлено" : "В корзину"}</Button>
      <IconButton img={share} className={s.share} w="50px" ar={1} />
      <p className={s.announcement}>
        При покупке от <span className={s.bold}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
      </p>
      <Button img={darkDownload} className={s.priceList}>Прайс-лист</Button>
    </div>
  )
};

export default ProductButtons;
