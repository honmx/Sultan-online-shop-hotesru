import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/slices/apiSlice";
import s from "./ProductPage.module.scss";

interface Props {
  
}

const ProductPage: FC<Props> = ({  }) => {

  const params = useParams();
  const { data: product } = useGetProductQuery(Number(params.id));
  console.log(product);

  return (
    <div>
      
    </div>
  )
};

export default ProductPage;
