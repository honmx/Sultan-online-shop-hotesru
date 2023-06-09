import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSmallerDevice } from "../../../hooks/useSmallerDevice";
import arrowLeft from "../../../assets/arrow-left.svg";
import Button from "../Button/Button";
import { useAppSelector } from "../../../store/hooks";
import s from "./BreadCrumbs.module.scss";
// import { products } from "../../../helpers/data/products";
// import { useGetProductsQuery } from "../../../store/slices/apiSlice";

interface Props {
  href: string
}

const BreadCrumbs: FC<Props> = ({ href }) => {

  const paths = href.slice(1).split("/");

  const [smallerDevice] = useSmallerDevice(767);

  // const { data: products } = useGetProductsQuery();

  const products = useAppSelector(state => state.products.products);

  return (
    <div className={s.breadCrumbsContainer}>
      {
        !smallerDevice &&
        <>
          <Link to="/" className="link">Главная</Link>
          {
            paths.map((path, i, arr) => (
              <Link
                key={path}
                to={`/${paths.slice(0, i + 1).join("/")}`}
                className={`${s.link} ${(i === arr.length - 1) && s.inActive} link`}
              >
                {path}
              </Link>
            ))
          }
        </>
      }
      {
        smallerDevice &&
        <Link
          to={"/" + paths.slice(0, paths.length - 1).join("/")}
          className="link"
          state={paths.length === 3 && !isNaN(Number(paths[2])) && {
            products: products?.filter(product => product.type.main === paths[1]),
          }}
        >
          <div className={s.backButtonContainer}>
            <Button img={arrowLeft} className={s.button} ar={1} w="35px" p="0px" />
            <p className={s.backText}>Назад</p>
          </div>
        </Link>
      }
    </div>
  )
};

export default BreadCrumbs;
