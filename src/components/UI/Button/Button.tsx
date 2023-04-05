import React, { FC, MouseEvent, ReactNode } from "react";
import s from "./Button.module.scss";

interface Props {
  children?: ReactNode;
  img?: string;
  p?: string;
  className?: string;
  tt?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
  ar?: number;
  w?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  testid?: string;
}

const Button: FC<Props> = ({ children, img, p, tt, className, ar, w, onClick, testid }) => {

  return (
    <button
      data-testid={testid && testid}
      onClick={onClick && onClick}
      className={`${className} ${s.button}`}
      style={{
        width: w && w,
        padding: p && p,
        textTransform: tt && tt,
        aspectRatio: ar && ar,
      }}
    >
      {children}
      {img && <img src={img} style={{ marginLeft: children ? "8px" : "0px", }} />}
    </button>
  )
};

export default Button;
