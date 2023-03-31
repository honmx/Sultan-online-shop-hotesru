import React, { FC } from "react";
import s from "./Title.module.scss";

interface Props {
  className?: string;
  accentText?: string;
  usualText: string;
}

const Title: FC<Props> = ({ className, accentText, usualText }) => {
  return (
    <div className={`${s.title} ${className}`}>
      <span className={s.accent}>{accentText} </span>
      <span className={s.usual}>{usualText}</span>
    </div>
  )
};

export default Title;
