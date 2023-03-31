import React, { Dispatch, FC, SetStateAction } from "react";
import { sortOptions, sortOptionsType } from "../../../helpers/data/sortOptions";
import { useAppDispatch } from "../../../store/hooks";
import { setSort } from "../../../store/slices/categorySlice";
import s from "./Sort.module.scss";

interface Props {
  className: string;
  value: keyof sortOptionsType;
  options: {
    [key in keyof sortOptionsType]: string;
  };
}

const Sort: FC<Props> = ({ className, value, options }) => {

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value as keyof sortOptionsType));
  }

  return (
    <div className={`${s.sort} ${className}`}>
      <p className={s.text}>Сортировка:</p>
      <select name="" value={value} onChange={handleChange} className={s.select}>
        {
          Object.keys(options).map(option => 
            <option key={option} className={s.option} value={option}>{options[option as keyof sortOptionsType]}</option>)
        }
      </select>
    </div>
  )
};

export default Sort;
