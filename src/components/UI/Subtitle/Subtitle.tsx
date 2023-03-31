import React, { FC, ReactNode } from "react";
import s from "./Subtitle.module.scss";

interface Props {
  children: ReactNode;
  className: string;
}

const Subtitle: FC<Props> = ({ children, className }) => {
  return (
    <p className={`${s.title} ${className}`}>{children}</p>
  )
};

export default Subtitle;
