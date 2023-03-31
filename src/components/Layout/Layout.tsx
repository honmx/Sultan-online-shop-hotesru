import React, { FC, useEffect, useMemo } from "react";
import { Outlet, useHref, useLocation } from "react-router-dom";
import BreadCrumbs from "../UI/BreadCrumbs/BreadCrumbs";
import Header from "./Header/Header";
import s from "./Layout.module.scss";

interface Props {

}

const Layout: FC<Props> = ({ }) => {

  const location = useLocation();
  const href = location.pathname;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Header />
      </div>
      <div className={s.container}>
        {href != "/" && <BreadCrumbs href={href} />}
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
