import React, { FC } from "react";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import MainBanner from "../../components/MainBanner/MainBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";
import "../../scss/common.scss";
import { useGetProductsQuery } from "../../store/slices/apiSlice";
import s from "./HomePage.module.scss";

interface Props {

}

const HomePage: FC<Props> = ({ }) => {

  const { data: products, isLoading, isError, isSuccess } = useGetProductsQuery();

  return (
    <div className="container">
      <MainBanner />
      <div className={s.block}>
        <Title accentText="акционные" usualText="товары" className={s.title} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error occured</p>}
        {isSuccess && <ProductsList products={products} limit={8} />}
      </div>
      <div className={s.block} id="catalog">
        <Title accentText="категории" usualText="товаров" className={s.title} />
        <Subtitle className={s.subtitle}>10 000+ ходовых позиций по спецмальным ценам</Subtitle>
        <CategoriesList />
      </div>
    </div>
  )
};

export default HomePage;
