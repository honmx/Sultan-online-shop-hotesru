import React, { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BreadCrumbs from "../UI/BreadCrumbs/BreadCrumbs";
import Header from "./Header/Header";
import s from "./Layout.module.scss";
import Footer from "./Footer/Footer";

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
      <main className={s.main}>
        <div className={s.container}>
          {href != "/" && <BreadCrumbs href={href} />}
          <Outlet />
        </div>
      </main>
      <div className={s.footer}>
        <div className={s.container}>
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default Layout;
