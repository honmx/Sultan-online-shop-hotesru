import React, { FC, useState } from "react";
import { IProduct } from "../../types/IProducts";
import IconButton from "../UI/IconButton/IconButton";
import editPen from "../../assets/edit-pen.svg";
import s from "./AdminProduct.module.scss";
import AdminEditForm from "../AdminEditForm/AdminEditForm";

interface Props {
  product: IProduct;
}

const AdminProduct: FC<Props> = ({ product }) => {

  const [edit, setEdit] = useState<boolean>(false);

  const handleEditClick = () => {
    setEdit(prev => !prev);
  }

  return (
    <div className={s.product}>
      {
        edit && <AdminEditForm product={product} changeEditStatus={handleEditClick} />
      }
      {
        !edit && <>
          <div className={s.imgWrapper}>
            <img src={product.url} />
          </div>
          <div className={s.textWrapper}>
            <p className={s.brand}>{product.brand}</p>
            <p className={s.name}>{product.name.secondary}</p>
            <p className={s.price}>{product.price.value} {product.price.currency}</p>
            <p className={s.capacity}>{product.capacity?.value} {product.capacity?.type}</p>
            <p className={s.category}>{product.type.main}</p>
            <div className={s.subtypes}>
              {
                product.type.subtypes?.map(subtype => <p key={subtype} className={s.subtype}>{subtype}</p>)
              }
            </div>
          </div>
          <IconButton className={s.edit} img={editPen} w="45px" ar={1} onClick={handleEditClick} />
        </>
      }
    </div>
  )
};

export default AdminProduct;
