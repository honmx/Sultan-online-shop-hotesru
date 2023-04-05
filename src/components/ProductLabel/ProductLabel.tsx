import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./ProductLabel.module.scss";
import TextInput from "../UI/Input/TextInput";

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
}

const ProductLabel: FC<Props> = ({ label, value, setValue, className }) => {
  return (
    <label className={`${s.label} ${className}`}>
      <p className={s.text}>{label}</p>
      <TextInput value={value} setValue={setValue} className={s.input} />
    </label>
  )
};

export default ProductLabel;
