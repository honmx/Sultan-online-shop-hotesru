import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { FilterType } from "../../../types/FilterType";
import s from "./Select.module.scss";

interface Props {
  options: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  setFilter?: Dispatch<SetStateAction<FilterType>>;
  setValues?: Dispatch<SetStateAction<string[]>>;
  className?: string;
}

const Select: FC<Props> = ({ options, value, setValue, setFilter, setValues, className }) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;
    if (setValue) setValue(value);
    if (setFilter) setFilter(value as FilterType);
    if (setValues) setValues(prev => Array.from(new Set([...prev, e.target.value])));
  }

  return (
    <select value={value} className={`${s.select} ${className}`} onChange={handleChange}>
      <option key={""} value={""}></option>
      {
        options.map(option => <option key={option} value={option}>{option}</option>)
      }
    </select>
  )
};

export default Select;
