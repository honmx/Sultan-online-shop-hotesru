import React, { FC } from "react";
import { IProduct } from "../../types/IProducts";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import whiteCart from "../../assets/whiteCart.svg";
import checkWhite from "../../assets/check-white.svg";
import { addCartProduct } from "../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCartItemsToLocalStorage } from "../../helpers/localStorage/setCartItemsToLocalStorage";
import { useCartProduct } from "../../hooks/useCartProduct";
import ProductParameter from "../ProductParameter/ProductParameter";
import ProductCapacity from "../ProductCapacity/ProductCapacity";
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
    dispatch(addCartProduct(newProduct));
    setCartItemsToLocalStorage([...cartProducts, newProduct]);
  }

  return (
    <div className={s.card}>
      <NavLink to={`/catalog/${product.type.main}/${product.id}`} className="link">
        <div className={s.imgWrapper}>
          <img src={product.url} alt="" />
        </div>
        <p className={`${s.stock} ${product.stock ? s.inStock : s.notInStock}`}>{ product.stock ? "В наличии" : "Нет в наличии" }</p>
        <ProductCapacity type={product.capacity?.type} value={product.capacity?.value} className={s.capacity} />
        <p className={s.name}>
          <span className={s.mainName}>{product.name.main} </span>
          <span className={s.secondaryName}>{product.name.secondary}</span>
        </p>
      </NavLink>
      <div className={s.parameters}>
        <ProductParameter type="Штрихкод:" value={product.barcode} classname={s.barcode} />
        <ProductParameter type="Производитель:" value={product.producer} classname={s.barcode} />
        <ProductParameter type="Бренд:" value={product.brand} classname={s.barcode} />
      </div>
      <div className={s.priceAndButtonContainer}>
        <p className={s.price}>{product.price.value} {product.price.currency}</p>
        <Button className={s.button} tt="uppercase" img={inCart ? checkWhite : whiteCart} p="15px 20px" onClick={handleAddClick}>{ inCart ? "Добавлено" : "в корзину"}</Button>
      </div>
    </div>
  )
};

export default CatalogProduct;
