import { useMemo } from "react";
import { IProduct } from "../types/IProducts";
import { sortOptionsType } from "../types/SortOptionsType";
import { sortBy } from "../helpers/sortBy";

interface IDependecies {
  sort: keyof sortOptionsType;
  selectedFilters: string[];
  priceRange: { min: number; max: number };
  selectedProducers: string[];
  selectedBrands: string[];
}

export const useFilteredProducts = (products: IProduct[], { sort, selectedFilters, priceRange, selectedProducers, selectedBrands }: IDependecies) => {
  const filteredProducts: IProduct[] = useMemo(() => {
    if (!products) return [];

    return sortBy(sort, products)
      .filter(product => {
        return selectedFilters.length === 0
          ? true
          : product.type.subtypes?.some(elem => selectedFilters.includes(elem));
      })
      .filter(product => {
        return product.price.value >= priceRange.min && product.price.value <= priceRange.max;
      })
      .filter(product => {
        return selectedProducers.length === 0
          ? true
          : selectedProducers.includes(product.producer);
      })
      .filter(product => {
        return selectedBrands.length === 0
          ? true
          : selectedBrands.includes(product.brand);
      });
  
    }, [products, sort, selectedFilters, selectedProducers, selectedBrands, priceRange.min, priceRange.max]);
    
  return [filteredProducts];
}