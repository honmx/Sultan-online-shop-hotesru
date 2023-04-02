import React, { FC, MouseEvent } from "react";
import s from "./IconButton.module.scss";

interface Props {
  img?: string;
  p?: string;
  className?: string;
  tt?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
  badge?: number;
  ar?: number;
  w?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<Props> = ({ img, p, tt, ar, w, className, badge, onClick }) => {

  return (
    <button
      className={`${className} ${s.button}`}
      style={{
        width: w && w,
        padding: p && p,
        textTransform: tt && tt,
        aspectRatio: ar && ar,
      }}
      onClick={onClick && onClick}
    >
      {img && <img src={img} />}
      {
        !!badge &&
        <div className={s.badge}>{badge}</div>
      }
    </button>
  )
};

export default IconButton;
