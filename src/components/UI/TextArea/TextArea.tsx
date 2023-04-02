import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./TextArea.module.scss";

interface Props {
  placeholder?: string;
  className?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextArea: FC<Props> = ({ placeholder, className, value, setValue }) => {
  return (
    <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className={`${s.textarea} ${className}`} />
  )
};

export default TextArea;
