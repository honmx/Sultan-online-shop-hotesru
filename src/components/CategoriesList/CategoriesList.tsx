import React, { FC } from "react";
import { categories } from "../../helpers/data/categories";
import Category from "../Category/Category";
import s from "./CategoriesList.module.scss";

interface Props {
  
}

const CategoriesList: FC<Props> = ({  }) => {
  return (
    <div className={s.container}>
      {
        categories.map(category => <Category key={category.id} category={category} />)
      }
    </div>
  )
};

export default CategoriesList;
