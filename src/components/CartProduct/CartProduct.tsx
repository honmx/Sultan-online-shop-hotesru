import React, { FC } from "react";
import { IProduct } from "../../types/IProducts";
import trash from "../../assets/trash.svg";
import Button from "../UI/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeQuantity, deleteCartProduct } from "../../store/slices/cartSlice";
import { setCartItemsToLocalStorage } from "../../helpers/localStorage/setCartItemsToLocalStorage";
import ProductCapacity from "../ProductCapacity/ProductCapacity";
import s from "./CartProduct.module.scss";

interface Props {
  product: IProduct;
  quantity: number;
}

const CartProduct: FC<Props> = ({ product, quantity }) => {

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const handleDeleteClick = () => {
    dispatch(deleteCartProduct(product.id));
    setCartItemsToLocalStorage(cartProducts.filter(item => item.product.id !== product.id));
  }

  const handleMinusClick = () => {
    dispatch(changeQuantity({ product, quantity: quantity - 1 }));
  }

  const handlePlusClick = () => {
    dispatch(changeQuantity({ product, quantity: quantity + 1 }));
  }

  return (
    <div className={s.product}>
      <div className={s.imgWrapper}>
        <img src={product.url} />
      </div>
      <div className={s.text}>
        <ProductCapacity type={product.capacity?.type} value={product.capacity?.value} className={s.capacity} />
        <p className={s.name}>{product.name.main} {product.name.secondary}</p>
        <p className={s.description}>{product.description}</p>
      </div>
      <div className={s.buttonsContainer}>
        <div className={s.changeQuantityContainer}>
          <Button className={s.minus} w="30px" p="1px 10px" onClick={handleMinusClick}>-</Button>
          <p className={s.quantity}>{quantity}</p>
          <Button className={s.plus} w="30px" p="1px 10px" onClick={handlePlusClick}>+</Button>
        </div>
        <p className={s.price}>{product.price.value} {product.price.currency}</p>
        <Button img={trash} className={s.trash} onClick={handleDeleteClick} />
      </div>
    </div>
  )
};

export default CartProduct;
