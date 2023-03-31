import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CategoryType } from "../../helpers/data/categories";
import { useGetProductsQuery } from "../../store/slices/apiSlice";
import s from "./Category.module.scss";

interface Props {
  category: CategoryType;
}

const Category: FC<Props> = ({ category }) => {

  // const { data: products } = useGetProductsQuery();

  return (
    <div className={s.category}>
      <NavLink to={category.to} className="link">
        <div className={s.imgWrapper}>
          <img src={category.img} alt="" />
        </div>
        <p className={s.title}>{category.title}</p>
      </NavLink>
    </div>
  )
};

export default Category;
