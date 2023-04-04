import React, { Dispatch, FC, SetStateAction } from "react";
import ProductParameter from "../ProductParameter/ProductParameter";
import { IProduct } from "../../types/IProducts";
import s from "./ProductInfo.module.scss";

interface Props {
  product: IProduct;
  descriptionOpen: boolean;
  parametersOpen: boolean;
  setDescriptionOpen: Dispatch<SetStateAction<boolean>>;
  setParametersOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductInfo: FC<Props> = ({ product, descriptionOpen, parametersOpen, setDescriptionOpen, setParametersOpen }) => {
  return (
    <div className={s.infoContainer}>
      <div className={s.mainInfo}>
        <ProductParameter type="Производитель:" value={product.producer} classname={s.option} />
        <ProductParameter type="Бренд:" value={product.brand} classname={s.option} />
        <ProductParameter type="Штрихкод:" value={product.barcode} classname={s.option} />
      </div>
      <div className={s.description}>
        <p className={s.title} onClick={() => setDescriptionOpen(prev => !prev)}>Описание <span>▼</span></p>
        {
          descriptionOpen &&
          <p className={s.descriptionText}>{product.description}</p>
        }
      </div>
      <div className={s.options}>
        <p className={s.title} onClick={() => setParametersOpen(prev => !prev)}>Характеристики <span>▼</span></p>
        {
          parametersOpen &&
          <>
            <ProductParameter type="Производитель:" value={product.producer} classname={s.option} />
            <ProductParameter type="Бренд:" value={product.brand} classname={s.option} />
            <ProductParameter type="Штрихкод:" value={product.barcode} classname={s.option} />
            <ProductParameter type="Тип:" value={product.type.main} classname={s.option} />
            <ProductParameter type="Объем:" value={product.capacity?.value + " " + product.capacity?.type} classname={s.option} />
          </>
        }
      </div>
    </div>
  )
};

export default ProductInfo;
