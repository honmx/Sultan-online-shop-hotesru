import { RootState } from "../store";

export const sortSelector = (state: RootState) => state.category.sort;
export const filtersSelector = (state: RootState) => state.category.filters;
export const minPriceSelector = (state: RootState) => state.category.selectors.price.min;
export const maxPriceSelector = (state: RootState) => state.category.selectors.price.max;
export const producersSelector = (state: RootState) => state.category.selectors.producer;
export const brandsSelector = (state: RootState) => state.category.selectors.brand;