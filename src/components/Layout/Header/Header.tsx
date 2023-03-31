import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../scss/common.scss";
import s from "./Header.module.scss";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import location from "../../../assets/location.svg";
import mail from "../../../assets/mail.svg";
import logo from "../../../assets/logo.svg";
import frame from "../../../assets/frame.svg";
import cart from "../../../assets/cart.svg";
import search from "../../../assets/search.svg";
import line from "../../../assets/line.svg";
import phone from "../../../assets/phone.svg";
import phone2 from "../../../assets/phone2.svg";
import download from "../../../assets/download.svg";
import operator from "../../../assets/operator.png";
import IconButton from "../../UI/IconButton/IconButton";
import TextInput from "../../UI/Input/TextInput";
import Button from "../../UI/Button/Button";
import { Link } from "react-scroll";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      if (window.innerWidth >= 1440) setActive(false);
    }

    window.addEventListener('resize', updateActive);
    updateActive();

    return () => window.removeEventListener('resize', updateActive);
  }, []);

  const toggleActive = () => {
    setActive(prev => !prev);
  }

  const scroll = () => {
    const catalog = document.getElementById("catalog");
    catalog?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={s.headerContainer}>
      <div className={`${s.subheader} ${active && s.active} ${active && s.subheaderInMenu}`}>
        <div className={`${s.container} container`}>
          <div className={s.companyInfoContainer}>
            <CompanyInfo src={location} title="г. Кокчетав, ул. Ж. Ташенова 129Б" subtitle="(Рынок Восточный)" />
            <CompanyInfo src={mail} title="opt.sultan@mail.ru " subtitle="На связи в любое время" />
            {
              active &&
              <>
                <CompanyInfo src={phone} title="Отдел продаж" subtitle="+7 (777) 490-00-91" />
                <p className={s.subtitle}>время работы: 9:00-20:00</p>
              </>
            }
            {
              active &&
              <div className={s.orderPhoneCall}>
                <Button img={phone2} className={s.phoneIconButton} p="0px"></Button>
                <p className={s.phoneCallText}>Заказать звонок</p>
              </div>
            }
          </div>
          <div className={s.faq}>
            {
              active &&
              <p className={s.faqTitle}>Меню сайта:</p>
            }
            <NavLink to="/about" className={`${s.link} link`} onClick={toggleActive}>О компании</NavLink>
            <NavLink to="/payment-delivery" className={`${s.link} link`}>Оплата и доставка</NavLink>
            <NavLink to="/refund" className={`${s.link} link`}>Возврат</NavLink>
            <NavLink to="/contacts" className={`${s.link} link`}>Контакты</NavLink>
          </div>
        </div>
      </div>
      <div className={s.mainHeader}>
        <div className={`${s.container} container`}>
          <Button className={s.menu} onClick={toggleActive} p="0px">
            {
              active ? (
                <>
                  <div className={`${s.line} ${s.crossLine1}`} />
                  <div className={`${s.line} ${s.crossLine2}`} />
                </>
              ) : (
                <>
                  <div className={s.line} />
                  <div className={s.line} />
                  <div className={s.line} />
                </>
              )
            }
          </Button>
          <NavLink to="/">
            <img src={logo} alt="logo" className={s.logo} />
          </NavLink>
          <NavLink to="/catalog" className={`${s.catalogButton} link`}>
            <Button img={frame}>Каталог</Button>
          </NavLink>
          <div className={s.inputContainer}>
            <TextInput placeholder="Поиск..." className={s.searchInput} />
            <Button img={search} className={s.searchButton} p="0"></Button>
          </div>
          <div className={s.supportContainer}>
            <div className={s.textWrapper}>
              <p className={s.title}>+7 (777) 490-00-91</p>
              <p className={s.subtitle}>время работы: 9:00-20:00</p>
              <button className={`${s.subtitle} ${s.underscore} ${s.makeCall}`}>Заказать звонок</button>
            </div>
            <img src={operator} alt="operator" />
          </div>
          <Button img={download} className={`${s.priceListButton} ${active && s.activePriceListButton}`}>Прайс-лист</Button>
          <img src={line} alt="line" className={s.dividerLine} />
          <div className={s.cartContainer}>
            <IconButton img={cart} badge={3} className={s.cartIconButton} />
            <div className={`${s.textWrapper} ${s.cartText}`}>
              <p className={s.subtitle}>Корзина</p>
              <p className={s.title}>12 478 ₸</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
