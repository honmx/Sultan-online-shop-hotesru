import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import s from "./TextInput.module.scss";

interface Props {
  placeholder?: string;
  className?: string;
  //remove optional
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}



const TextInput: FC<Props> = ({ placeholder, className, value, setValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className} ${s.input}`}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue && setValue(e.target.value)}
    />
  )
};

export default TextInput;
