import React, { FC } from "react";
import logo from "../../../../assets/logo-white.svg";
import whatsapp from "../../../../assets/whatsapp.png";
import telegram from "../../../../assets/telegram.png";
import visa from "../../../../assets/visa.png";
import mastercard from "../../../../assets/mastercard.png";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import TextInput from "../../../UI/Input/TextInput";
import { categories } from "../../../../helpers/data/categories";
import s from "./MobileFooter.module.scss";

interface Props {

}

const MobileFooter: FC<Props> = ({ }) => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <div className={s.logoWrapper}>
          <img src={logo} />
        </div>
        <Link to="/admin" className="link">
          <Button className={s.adminButton}>Админ</Button>
        </Link>
      </div>
      <p className={s.description}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
      <p className={s.subscribe}>Подпишись на скидки и акции</p>
      <TextInput className={s.input} placeholder="Введите ваш email" />
      <div className={s.linksContainer}>
        <div className={s.navigation}>
          <p className={s.title}>Меню сайта:</p>
          <div className={s.flexContainer}>
            <Link to="/about" className="link">О компании</Link>
            <Link to="/payment-and-delivery" className="link">Доставка и оплата</Link>
            <Link to="/refund" className="link">Возврат</Link>
            <Link to="/contacts" className="link">Контакты</Link>
          </div>
        </div>
        <div className={s.categories}>
          <p className={s.title}>Категории:</p>
          <div className={s.flexContainer}>
            {
              categories.map(category => <Link key={category.id} className="link" to={category.to}>{category.title}</Link>)
            }
          </div>
        </div>
        <div className={s.contacts}>
          <p className={s.title}>Контакты:</p>
          <div className={s.contactsWrapper}>
            <div className={s.contactsContainer}>
              <p className={s.number}>+7 (777) 490-00-91</p>
              <p className={s.workHours}>время работы: 9:00-20:00</p>
              <p className={s.orderCall}>Заказать звонок</p>
              <p className={s.mail}>opt.sultan@mail.ru</p>
              <p className={s.text}>На связи в любое время</p>
              <div className={s.cards}>
                <img src={visa} />
                <img src={mastercard} />
              </div>
            </div>
            <div className={s.messengersContainer}>
              <p className={s.subtitle}>Связь в мессенджерах</p>
              <div className={s.messengers}>
                <img src={whatsapp} />
                <img src={telegram} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MobileFooter;
