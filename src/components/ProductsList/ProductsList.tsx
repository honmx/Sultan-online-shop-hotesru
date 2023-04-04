import React, { FC, useEffect } from "react";
import CatalogProduct from "../../components/CatalogProduct/CatalogProduct";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearAllFilters } from "../../store/slices/categorySlice";
import { IProduct } from "../../types/IProducts";
import s from "./ProductsList.module.scss";

interface Props {
  products: IProduct[];
  className?: string;
  limit?: number;
  page?: number;
}

const ProductsList: FC<Props> = ({ products, className, limit = 0, page = 0 }) => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(clearAllFilters());
  }, []);

  return (
    <div className={`${s.blockContainer} ${className}`}>
      {
        products
          .slice(limit * page, limit ? limit * (page + 1) : products.length)
          .map(product => <CatalogProduct key={product.id} product={product} />)
      }
    </div>
  )
};

export default ProductsList;
