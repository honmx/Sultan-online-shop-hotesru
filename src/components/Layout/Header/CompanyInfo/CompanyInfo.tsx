import React, { FC } from "react";
import s from "./CompanyInfo.module.scss";
import "../../../../scss/common.scss";

interface Props {
  src: string;
  title: string;
  subtitle: string;
}

const CompanyInfo: FC<Props> = ({ src, title, subtitle }) => {
  return (
    <div className={s.companyInfo}>
      <img src={src} alt="icon" />
      <div className={s.textWrapper}>
        <p className={s.title}>{ title }</p>
        <p className={s.subtitle}>{ subtitle }</p>
      </div>
    </div>
  )
};

export default CompanyInfo;
