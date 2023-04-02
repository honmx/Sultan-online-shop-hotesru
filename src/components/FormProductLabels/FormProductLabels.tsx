import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./FormProductLabels.module.scss";
import { FilterType } from "../../types/FilterType";
import TextInput from "../UI/Input/TextInput";
import TextArea from "../UI/TextArea/TextArea";
import Select from "../UI/Select/Select";
import { filters } from "../../helpers/data/filters";

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
      <label className={s.label}>
        <p className={s.text}>Бренд</p>
        <TextInput value={props.brand} setValue={props.setBrand} className={s.input} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Название продукта</p>
        <TextInput value={props.name} setValue={props.setName} className={s.input} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Ссылка на изображение</p>
        <TextInput value={props.url} setValue={props.setUrl} className={s.input} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Описание продукта</p>
        <TextArea value={props.description} setValue={props.setDescription} className={`${s.input} ${s.description}`} />
      </label>
      <label className={`${s.label} ${s.priceValueInput}`}>
        <p className={s.text}>Цена</p>
        <TextInput value={props.price} setValue={props.setPrice} className={s.input} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Валюта</p>
        <Select value={props.currency} setValue={props.setCurrency} className={s.input} options={["₸"]} />
      </label>
      <label className={s.label}>
        <p className={s.text}>Вместимость (опционально)</p>
        <TextInput value={props.capacity} setValue={props.setCapacity} className={s.input} />
      </label>
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
