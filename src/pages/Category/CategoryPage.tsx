import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductsList from "../../components/ProductsList/ProductsList";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/UI/Pagination/Pagination";
import Sort from "../../components/UI/Sort/Sort";
import Title from "../../components/UI/Title/Title";
import { categories, CategoryType } from "../../helpers/data/categories";
import { filters } from "../../helpers/data/filters";
import { sortOptions } from "../../helpers/data/sortOptions";
import { useAppSelector } from "../../store/hooks";
// import { useGetProductsQuery } from "../../store/slices/apiSlice";
import { FilterType } from "../../types/FilterType";
import { IProduct } from "../../types/IProducts";
// import { products } from "../../helpers/data/products";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import s from "./CategoryPage.module.scss";

interface Props {

}

interface ILocationState {
  products: IProduct[];
  title: string;
  type: FilterType;
}

const CategoryPage: FC<Props> = ({ }) => {

  const location = useLocation();
  const categoryType = location.pathname.slice(1).split("/")[1];
  const currentCategory = categories.find(category => category.type === categoryType) as CategoryType;

  const ref = useRef<HTMLDivElement>(null);

  // const { data: allProducts } = useGetProductsQuery();
  const products = useAppSelector(state => state.products.products);
  const currentCategoryProducts = products.filter(product => product.type.main === categoryType);

  const sort = useAppSelector(state => state.category.sort);
  const selectedFilters = useAppSelector(state => state.category.filters);
  const priceRange = useAppSelector(state => state.category.selectors.price);
  const selectedProducers = useAppSelector(state => state.category.selectors.producer);
  const selectedBrands = useAppSelector(state => state.category.selectors.brand);

  const [page, setPage] = useState<number>(0);

  const [filteredProducts] = useFilteredProducts(currentCategoryProducts, {
    sort,
    selectedFilters,
    priceRange,
    selectedProducers,
    selectedBrands,
  });

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  return (
    <div className={s.container} ref={ref}>
      <Title usualText={currentCategory.title} className={s.title} />
      <Sort className={s.sort} value={sort} options={sortOptions} />
      <FilterBar
        className={s.filterbar}
        filters={filters[currentCategory.type as FilterType]}
        selectedFilters={selectedFilters}
      />
      <SideBar className={s.sidebar} products={filteredProducts} categoryType={currentCategory.type as FilterType} />
      <div className={s.productsListContainer}>
        <ProductsList className={s.products} products={filteredProducts} limit={12} page={page} />
        <Pagination countOfPages={Math.floor(filteredProducts.length / 12) + 1} currentPage={page} className={s.pagination} setPage={setPage} />
      </div>
    </div>
  )
};

export default CategoryPage;
