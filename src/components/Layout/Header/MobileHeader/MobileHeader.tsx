import React, { FC, useState } from "react";
import logo from "../../../../assets/logo.svg";
import cart from "../../../../assets/cart.svg";
import blackSearch from "../../../../assets/blackSearch.svg";
import blackFrame from "../../../../assets/backFrame.svg";
import s from "./MobileHeader.module.scss";
import IconButton from "../../../UI/IconButton/IconButton";
import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";

interface Props {

}

const MobileHeader: FC<Props> = ({ }) => {

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const [active, setActive] = useState<boolean>(false);

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
          <img src={logo} />
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
      </div>
    </>
  )
};

export default MobileHeader;
