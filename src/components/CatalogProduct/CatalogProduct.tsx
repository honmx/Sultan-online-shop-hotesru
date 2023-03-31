import React, { FC } from "react";
import { IProduct } from "../../types/IProducts";
import Button from "../UI/Button/Button";
import s from "./CatalogProduct.module.scss";
import whiteCart from "../../assets/whiteCart.svg";
import { NavLink } from "react-router-dom";
import bottle from "../../assets/bottle.svg";
import box from "../../assets/box.svg";

interface Props {
  product: IProduct
}

const CatalogProduct: FC<Props> = ({ product }) => {

  // console.log(product);

  return (
    <div className={s.card}>
      <NavLink to={`/catalog/${product.type.main}/${product.id}`} className="link">
        <div className={s.imgWrapper}>
          <img src={product.url} alt="" />
        </div>
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
        <Button className={s.button} tt="uppercase" img={whiteCart} p="15px 20px">в корзину</Button>
      </div>
    </div>
  )
};

export default CatalogProduct;
