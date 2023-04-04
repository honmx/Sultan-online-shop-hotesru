import React, { FC } from "react";
import s from "./ProductParameter.module.scss";

interface Props {
  type: string;
  value: string | number;
  classname?: string;
}

const ProductParameter: FC<Props> = ({ type, value, classname }) => {
  return (
    <p className={`${s.parameter} ${classname}`}>
      <span className={s.parameterType}>{type} </span>
      <span className={s.parameterValue}>{value}</span>
    </p>
  )
};

export default ProductParameter;
