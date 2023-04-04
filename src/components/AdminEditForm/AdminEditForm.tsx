import React, { FC, MouseEvent, useEffect, useState } from "react";
import { IProduct } from "../../types/IProducts";
import { FilterType } from "../../types/FilterType";
import FormProductLabels from "../FormProductLabels/FormProductLabels";
import { filters } from "../../helpers/data/filters";
import Button from "../UI/Button/Button";
// import { useEditProductMutation } from "../../store/slices/apiSlice";
import s from "./AdminEditForm.module.scss";
import { createProduct } from "../../helpers/createProduct";
import { useAppDispatch } from "../../store/hooks";
import { replaceProduct } from "../../store/slices/productsSlice";

interface Props {
  product: IProduct;
  changeEditStatus: () => void;
}

const AdminEditForm: FC<Props> = ({ product, changeEditStatus }) => {

  const dispatch = useAppDispatch();
  // const [editProduct, {}] = useEditProductMutation();

  const [brand, setBrand] = useState<string>(product.brand);
  const [name, setName] = useState<string>(product.name.secondary);
  const [description, setDescription] = useState<string>(product.description);
  const [url, setUrl] = useState<string>(product.url);
  const [price, setPrice] = useState<string>(product.price.value as unknown as string);
  const [capacity, setCapacity] = useState<string>(product.capacity?.value as string);
  const [currency, setCurrency] = useState<string>(product.price.currency);
  const [category, setCategory] = useState<FilterType>(product.type.main);
  const [types, setTypes] = useState<string[]>(filters[product.type.main]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(product.type.subtypes as string[]);

  const [error, setError] = useState<string>("");

  const handleDeleteClick = (type: string) => {
    setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
  }

  const handleConfirmEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!brand || !name || !description || !url || !capacity || !price || selectedTypes.length === 0) {
      setError("Все поля должны быть заполнены");
    } else {
      const newProduct = createProduct({ id: product.id, brand, name, description, url, price, capacity, selectedTypes, currency, category });
      dispatch(replaceProduct(newProduct));
      changeEditStatus();
    }
  }

  return (
    <form action="" className={s.form}>
      <FormProductLabels
        brand={brand} setBrand={setBrand}
        name={name} setName={setName}
        description={description} setDescription={setDescription}
        url={url} setUrl={setUrl}
        price={price} setPrice={setPrice}
        capacity={capacity} setCapacity={setCapacity}
        currency={currency} setCurrency={setCurrency}
        category={category} setCategory={setCategory}
        types={types} setTypes={setTypes}
        selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}
      />
      <div className={s.types}>
        {
          selectedTypes.map(type => <Button key={type} p="10px 20px" onClick={(e) => { e.preventDefault(); handleDeleteClick(type) }}>{type}</Button>)
        }
      </div>
      {
        error && <p className={s.error}>{error}</p>
      }
      <Button className={s.createButton} onClick={handleConfirmEditClick}>Изменить</Button>
    </form>
  )
};

export default AdminEditForm;
