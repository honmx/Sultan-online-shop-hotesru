import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
// import { useGetProductQuery } from "../../store/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useCurrentProduct } from "../../hooks/useCurrentProduct";
import ProductCapacity from "../../components/ProductCapacity/ProductCapacity";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductButtons from "../../components/ProductButtons/ProductButtons";
import s from "./ProductPage.module.scss";

interface Props {

}

const ProductPage: FC<Props> = ({ }) => {

  const dispatch = useAppDispatch();

  const params = useParams();

  // const { data: product, isLoading, isSuccess } = useGetProductQuery(Number(params.id));
  const product = useCurrentProduct(Number(params.id));

  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(false);
  const [parametersOpen, setParametersOpen] = useState<boolean>(false);

  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return <p>Product was not found</p>

  return (
    <div className={s.container}>
      <div className={s.productImgWrapper}>
        <img src={product?.url} />
      </div>
      <div className={s.productOptions}>
        <p className={`${s.stock} ${product.stock ? s.stock : s.notStock}`}>{product.stock ? "В наличии" : "Нет в наличии"}</p>
        <p className={s.productName}>
          <span className={s.mainName}>{product.name.main}</span>
          <span className={s.secondaryName}>{product.name.secondary}</span>
        </p>
        <ProductCapacity type={product.capacity?.type} value={product.capacity?.value} />
        <ProductButtons product={product} quantity={quantity} setQuantity={setQuantity} className={s.buttonsContainer} />
        <ProductInfo
          product={product}
          descriptionOpen={descriptionOpen}
          parametersOpen={parametersOpen}
          setDescriptionOpen={setDescriptionOpen}
          setParametersOpen={setParametersOpen}
        />
      </div>
    </div>
  )
};

export default ProductPage;
