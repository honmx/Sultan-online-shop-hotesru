import React, { FC, useEffect, useState } from "react";
import IconButton from "../../../UI/IconButton/IconButton";
import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import blackSearch from "../../../../assets/blackSearch.svg";
import blackFrame from "../../../../assets/backFrame.svg";
import logo from "../../../../assets/logo.svg";
import cart from "../../../../assets/cart.svg";
import mail from "../../../../assets/mail.svg";
import phone from "../../../../assets/phone.svg";
import phone2 from "../../../../assets/phone2.svg";
import location from "../../../../assets/location.svg";
import s from "./MobileHeader.module.scss";
import Title from "../../../UI/Title/Title";

interface Props {

}

const MobileHeader: FC<Props> = ({ }) => {

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  });

  return (
    <>
      <div className={s.mainHeader}>
        <Button
          className={s.menu}
          p="10px"
          ar={1}
          w="50px"
          onClick={() => setActive(prev => !prev)}
        >
          {
            active ? <>
              <div className={s.crossLine} />
              <div className={s.crossLine} />
            </> : <>
              <div className={s.line} />
              <div className={s.line} />
              <div className={s.line} />
            </>
          }
        </Button>
        <div className={s.logoWrapper}>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <Link to="/cart" className={s.cart}>
          <IconButton img={cart} badge={cartProducts.length} />
        </Link>
      </div>
      <div className={s.buttonsContainer}>
        <Link to="/catalog" className={`${s.link} link`}>
          <img src={blackFrame} />
          <p className={s.catalogText}>Каталог</p>
        </Link>
        <div className={s.inputContainer}>
          <input type="text" className={s.input} disabled />
          <img src={blackSearch} alt="" />
          <p className={s.inputText}>Поиск</p>
        </div>
        {
          active &&
          <div className={s.menuOpen}>
            <CompanyInfo className={s.CompanyInfo} src={location} title="г. Кокчетав, ул. Ж. Ташенова 129Б" subtitle="(Рынок восточный)" />
            <CompanyInfo className={s.CompanyInfo} src={mail} title="opt.sultan@mail.ru" subtitle="На связи в любое время" />
            <CompanyInfo className={s.CompanyInfo} src={phone} title="Отдел продаж" subtitle="+7 (777) 490-00-91" />
            <p className={s.workHours}>время работы: 9:00-20:00</p>
            <div className={s.orderCallContainer}>
              <Button img={phone2} className={s.orderCallButton} />
              <p className={s.orderCallText}>Заказать звонок</p>
            </div>
            <div className={s.navigation}>
              <Title usualText="Меню сайта:" className={s.navigationTitle} />
              <Link to="/about" className="link" aria-disabled>О компании</Link>
              <Link to="/payment-and-delivery" className="link">Доставка и оплата</Link>
              <Link to="/refund" className="link">Возврат</Link>
              <Link to="/contacts" className="link">Контакты</Link>
            </div>
            <Link to="/admin" className="link">
              <Button>Админ</Button>
            </Link>
            <div className={s.background}></div>
          </div>
        }
      </div>
    </>
  )
};

export default MobileHeader;
