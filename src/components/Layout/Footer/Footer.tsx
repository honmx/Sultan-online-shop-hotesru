import React, { FC } from "react";
import s from "./Footer.module.scss";
import { useSmallerDevice } from "../../../hooks/useSmallerDevice";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import MobileFooter from "./MobileFooter/MobileFooter";

interface Props {
  
}

const Footer: FC<Props> = ({  }) => {
  
  const [smallerDevice] = useSmallerDevice(1439);
  
  return (
    <footer className={s.footer}>
      {
        !smallerDevice && <DesktopFooter />
      }
      {
        smallerDevice && <MobileFooter />
      }
    </footer>
  )
};

export default Footer;
