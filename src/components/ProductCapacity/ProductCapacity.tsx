import React, { FC } from "react";
import bottle from "../../assets/bottle.svg";
import box from "../../assets/box.svg";
import s from "./ProductCapacity.module.scss";

interface Props {
  type?: string;
  value?: string | number;
  className?: string;
}

const ProductCapacity: FC<Props> = ({ type, value, className }) => {

  return (
    <div className={`${s.capacity} ${className}`}>
      <img src={
        type && (type === "л" || type === "мл")
          ? bottle : box
      } alt="" />
      <p className={s.textContainer}>
        <span className={s.capacityText}>{value}</span>
        <span className={s.capacityText}>{type}</span>
      </p>
    </div>
  )
};

export default ProductCapacity;
