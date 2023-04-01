import React, { FC, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
import { useAppSelector } from "../../../store/hooks";
import { countSummaryPrice } from "../../../helpers/countSummaryPrice";
import { useSmallerDevice } from "../../../hooks/useSmallerDevice";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const [smallerDevice] = useSmallerDevice(1439);

  return (
    <header className={s.headerContainer}>
      {
        smallerDevice ? <MobileHeader /> : <DesktopHeader />
      }
    </header>
  )
};

export default Header;
