import React, { FC } from "react";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import s from "./CatalogPage.module.scss";

interface Props {
  
}

const CatalogPage: FC<Props> = ({  }) => {
  return (
    <div>
      <CategoriesList />
    </div>
  )
};

export default CatalogPage;
