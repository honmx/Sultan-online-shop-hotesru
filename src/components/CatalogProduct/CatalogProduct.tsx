import React, { FC } from "react";
import { IProduct } from "../../types/IProducts";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import whiteCart from "../../assets/whiteCart.svg";
import checkWhite from "../../assets/check-white.svg";
import bottle from "../../assets/bottle.svg";
import box from "../../assets/box.svg";
import { addProduct } from "../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCartItemsToLocalStorage } from "../../helpers/setCartItemsToLocalStorage";
import { useCartProduct } from "../../hooks/useCartProduct";
import s from "./CatalogProduct.module.scss";

interface Props {
  product: IProduct
}

const CatalogProduct: FC<Props> = ({ product }) => {

  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const { inCart } = useCartProduct(product);

  const handleAddClick = () => {

    if (!product.stock) return;

    if (cartProducts.find(item => item.product.id === product.id)) return;

    const newProduct = {product, quantity: 1}
    dispatch(addProduct(newProduct));
    setCartItemsToLocalStorage([...cartProducts, newProduct]);
  }

  return (
    <div className={s.card}>
      <NavLink to={`/catalog/${product.type.main}/${product.id}`} className="link">
        <div className={s.imgWrapper}>
          <img src={product.url} alt="" />
        </div>
        <p className={`${s.stock} ${product.stock ? s.inStock : s.notInStock}`}>{ product.stock ? "В наличии" : "Нет в наличии" }</p>
        <p className={s.capacity}>
          <img src={
            product.capacity?.type === "л" || product.capacity?.type === "мл"
              ? bottle : box
          } alt="" />
          <span className={s.capacityText}>{product.capacity?.value} {product.capacity?.type}</span>
        </p>
        <p className={s.name}>
          <span className={s.mainName}>{product.name.main} </span>
          <span className={s.secondaryName}>{product.name.secondary}</span>
        </p>
      </NavLink>
      <div className={s.parameters}>
        <p className={s.barcode}>
          <span className={s.parameterType}>Штрихкод: </span>
          <span className={s.parameterValue}>{product.barcode}</span>
        </p>
        <p className={s.producer}>
          <span className={s.parameterType}>Производитель: </span>
          <span className={s.parameterValue}>{product.producer}</span>
        </p>
        <p className={s.brand}>
          <span className={s.parameterType}>Бренд: </span>
          <span className={s.parameterValue}>{product.brand}</span>
        </p>
      </div>
      <div className={s.priceAndButtonContainer}>
        <p className={s.price}>{product.price.value} {product.price.currency}</p>
        <Button className={s.button} tt="uppercase" img={inCart ? checkWhite : whiteCart} p="15px 20px" onClick={handleAddClick}>{ inCart ? "Добавлено" : "в корзину"}</Button>
      </div>
    </div>
  )
};

export default CatalogProduct;
