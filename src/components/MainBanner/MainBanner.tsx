import React, { FC } from "react";
import s from "./MainBanner.module.scss";
import banner from "../../assets/banner.jpg";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";

interface Props {

}

const MainBanner: FC<Props> = ({ }) => {
  return (
    <div className={s.banner}>
      <img src={banner} alt="banner" />
      <div className={s.content}>
        <div className={s.glass} />
        <div className={s.bannerText}>
          <p className={s.title}>Бытовая химия, косметика и хозтовары</p>
          <p className={s.subtitle}>оптом по кокчетаву и области</p>
          <NavLink data-testid="link" to="catalog" className="link">
            <Button className={s.button} tt="uppercase">В каталог</Button>
          </NavLink>
        </div>
        <div className={s.tagContainer}>
          <div className={s.tag}>
            <Button className={s.plus} p="10px 14px">+</Button>
            <p className={s.tagText}>Только самые выгодные предложения</p>
          </div>
          <div className={s.tag}>
            <Button className={s.plus} p="10px 14px">+</Button>
            <p className={s.tagText}>Бесплатная доставка <br /> по Кокчетаву от 10 тыс ₸</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainBanner;
