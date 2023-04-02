import React, { FC } from "react";
import "../../../scss/common.scss";
import { useSmallerDevice } from "../../../hooks/useSmallerDevice";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import s from "./Header.module.scss";

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
