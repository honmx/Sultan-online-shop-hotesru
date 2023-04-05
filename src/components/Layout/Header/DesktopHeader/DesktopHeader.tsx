import React, { FC } from "react";
import { Link } from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import location from "../../../../assets/location.svg";
import mail from "../../../../assets/mail.svg";
import logo from "../../../../assets/logo.svg";
import frame from "../../../../assets/frame.svg";
import cart from "../../../../assets/cart.svg";
import search from "../../../../assets/search.svg";
import operator from "../../../../assets/operator.png";
import IconButton from "../../../UI/IconButton/IconButton";
import TextInput from "../../../UI/Input/TextInput";
import Button from "../../../UI/Button/Button";
import { useAppSelector } from "../../../../store/hooks";
import { countSummaryPrice } from "../../../../helpers/countSummaryPrice";
import "../../../../scss/common.scss";
import s from "./DesktopHeader.module.scss";

interface Props {

}

const DesktopHeader: FC<Props> = ({ }) => {

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  return (
    <>
      <div className={`${s.subheader}`}>
        <div className={`${s.container} container`}>
          <div className={s.companyInfoContainer}>
            <CompanyInfo src={location} title="г. Кокчетав, ул. Ж. Ташенова 129Б" subtitle="(Рынок Восточный)" />
            <CompanyInfo src={mail} title="opt.sultan@mail.ru " subtitle="На связи в любое время" />
          </div>
          <div className={s.faq}>
            <Link data-testid="aboutlink" to="/about" className={`${s.link} link`}>О компании</Link>
            <Link data-testid="paymentlink" to="/payment-and-delivery" className={`${s.link} link`}>Оплата и доставка</Link>
            <Link data-testid="refundlink" to="/refund" className={`${s.link} link`}>Возврат</Link>
            <Link data-testid="contactslink" to="/contacts" className={`${s.link} link`}>Контакты</Link>
          </div>
        </div>
      </div>
      <div className={s.mainHeader}>
        <div className={`${s.container} container`}>
          <Link to="/">
            <img src={logo} alt="logo" className={s.logo} />
          </Link>
          <Link to="/catalog" className={`${s.catalogButton} link`}>
            <Button img={frame}>Каталог</Button>
          </Link>
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
          <Link to="/admin" className={`${s.priceListButton} link`}>
            <Button>Админ</Button>
          </Link>
          <div className={s.cartContainer}>
            <Link to="/cart" className={`${s.cartIconButton} link`}>
              <IconButton img={cart} badge={cartProducts.length} />
            </Link>
            <div className={`${s.textWrapper} ${s.cartText}`}>
              <p className={s.subtitle}>Корзина</p>
              <p className={s.title}>{cartProducts.length > 0 ? countSummaryPrice(cartProducts) : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default DesktopHeader;
