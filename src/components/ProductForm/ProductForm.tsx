import React, { FC, MouseEvent, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import { filters } from "../../helpers/data/filters";
import { FilterType } from "../../types/FilterType";
// import { useCreateProductMutation } from "../../store/slices/apiSlice";
import FormProductLabels from "../FormProductLabels/FormProductLabels";
import { createProduct } from "../../helpers/createProduct";
import { useAppDispatch } from "../../store/hooks";
import { addProduct } from "../../store/slices/productsSlice";
import { addItemToLocalStorage } from "../../helpers/localStorage/addItemToLocaLStorage";
import s from "./ProductForm.module.scss";
import Title from "../UI/Title/Title";

interface Props {
  className?: string;
}

const CreateForm: FC<Props> = ({ className }) => {

  const dispatch = useAppDispatch();

  const [brand, setBrand] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");
  const [currency, setCurrency] = useState<string>("₸");
  const [category, setCategory] = useState<FilterType>("cosmetics-and-hygiene");
  const [types, setTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const [error, setError] = useState<string>("");

  // const [createProduct, { }] = useCreateProductMutation();

  useEffect(() => {
    setTypes(filters[category]);
    setSelectedTypes([]);
  }, [category]);

  const clear = () => {
    setBrand("");
    setName("");
    setDescription("");
    setUrl("");
    setPrice("");
    setCapacity("");
    setCurrency("₸");
    setCategory("cosmetics-and-hygiene");
    setTypes([]);
    setSelectedTypes([]);
    setError("");
  }

  const handleDeleteClick = (type: string) => {
    setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
  }

  const handleCreateClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!brand || !name || !description || !url || !price || selectedTypes.length === 0) {
      setError("Все поля должны быть заполнены");
    } else {
      const newProduct = createProduct({ id: Math.round(Math.random() * 100000000), brand, name, description, url, price, capacity, selectedTypes, currency, category });
      dispatch(addProduct(newProduct));
      addItemToLocalStorage(newProduct);
      clear();
    }
  }

  return (
    <div className={`${s.formContainer} ${className}`}>
      <Title className={s.title} usualText="Создать товар" />
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
        <Button className={s.createButton} onClick={handleCreateClick}>Создать</Button>
      </form>
    </div>
  )
};

export default CreateForm;
