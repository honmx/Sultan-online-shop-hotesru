import React, { FC } from "react";
import s from "./AdminPage.module.scss";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useGetProductsQuery } from "../../store/slices/apiSlice";
import AdminProduct from "../../components/AdminProduct/AdminProduct";

interface Props {

}

const AdminPage: FC<Props> = ({ }) => {

  const { data: products } = useGetProductsQuery();

  return (
    <div className={s.container}>
      <ProductForm className={s.form} />
      <div className={s.productsList}>
        {
          products?.map(product => <AdminProduct key={product.id} product={product} />)
        }
      </div>
    </div>
  )
};

export default AdminPage;
