import React, { FC, useEffect } from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
// import { useGetProductsQuery } from "../../store/slices/apiSlice";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import { useAppSelector } from "../../store/hooks";
import { setItemsToLocalStorage } from "../../helpers/localStorage/setItemsToLocalStorage";
import s from "./AdminPage.module.scss";

interface Props {

}

const AdminPage: FC<Props> = ({ }) => {

  // const { data: products } = useGetProductsQuery();
  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    setItemsToLocalStorage(products);
  }, [products]);
   
  return (
    <div className={s.container}>
      <ProductForm className={s.form} />
      <div className={s.productsList}>
        {
          products.map(product => <AdminProduct key={product.id} product={product} />)
        }
      </div>
    </div>
  )
};

export default AdminPage;
