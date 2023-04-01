import React, { FC, useState } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import Title from "../../components/UI/Title/Title";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import s from "./CartPage.module.scss";
import { getCartItemsFromLocalStorage } from "../../helpers/getCartItemsFromLocalStorage";
import Button from "../../components/UI/Button/Button";
import { countSummaryPrice } from "../../helpers/countSummaryPrice";
import { clearCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification/Notification";

interface Props {

}

const CartPage: FC<Props> = ({ }) => {

  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state.cart.cartItems);

  const [clicked, setClicked] = useState<boolean>(false);

  const handleOfferClick = () => {
    setClicked(true);
    dispatch(clearCart());
  }

  const handleCrossClick = () => {
    setClicked(false);
  }

  return (
    <div className={s.cart}>
      <Title usualText="Корзина" className={s.title} />
      {
        products.length === 0 &&
        <Title usualText="Товаров нет" className={s.noProducts} />
      }
      {
        products.map(product => <CartProduct key={product.product.id} product={product.product} quantity={product.quantity} />)
      }
      {
        products.length !== 0 &&
        <div className={s.cartFooter}>
          <Button onClick={handleOfferClick} className={s.offer}>Оформить заказ</Button>
          <p className={s.price}>{countSummaryPrice(products)}</p>
        </div>
      }
      {
        clicked && <Notification onClick={handleCrossClick} />
      }
    </div>
  )
};

export default CartPage;
