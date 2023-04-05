import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./FormProductLabels.module.scss";
import { FilterType } from "../../types/FilterType";
import TextInput from "../UI/Input/TextInput";
import TextArea from "../UI/TextArea/TextArea";
import Select from "../UI/Select/Select";
import { filters } from "../../helpers/data/filters";
import ProductLabel from "../ProductLabel/ProductLabel";

interface Props {
  className?: string;
  brand: string;
  name: string;
  description: string;
  url: string;
  price: string;
  capacity: string;
  currency: string;
  category: FilterType;
  types: string[];
  selectedTypes: string[];
  setBrand: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>
  setDescription: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setCapacity: Dispatch<SetStateAction<string>>;
  setCurrency: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<FilterType>>;
  setTypes: Dispatch<SetStateAction<string[]>>;
  setSelectedTypes: Dispatch<SetStateAction<string[]>>;
}

const FormProductLabels: FC<Props> = (props) => {

  return (
    <>
      <ProductLabel className={s.label} label="Бренд" value={props.brand} setValue={props.setBrand} />
      <ProductLabel className={s.label} label="Название продукта" value={props.name} setValue={props.setName} />
      <ProductLabel className={s.label} label="Ссылка на изображение" value={props.url} setValue={props.setUrl} />
      <ProductLabel className={s.label} label="Описание продукта" value={props.description} setValue={props.setDescription} />
      <ProductLabel className={s.label} label="Цена" value={props.price} setValue={props.setPrice} />
      <ProductLabel className={s.label} label="Валюта" value={props.currency} setValue={props.setCurrency} />
      <ProductLabel className={s.label} label="Вместимость (опционально)" value={props.capacity} setValue={props.setCapacity} />
      <label className={s.label}>
        <p className={s.text}>Категория</p>
        <Select value={props.category} setFilter={props.setCategory} className={s.input} options={Object.keys(filters)} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Тип продукта</p>
        <Select value={props.selectedTypes[props.types.length - 1]} setValues={props.setSelectedTypes} className={s.input} options={filters[props.category]} />
      </label>
    </>
  )
};

export default FormProductLabels;
