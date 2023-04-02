import { FilterType } from "./FilterType";

export interface ICreateProduct {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: string;
  url: string;
  capacity: string;
  currency: string;
  category: FilterType;
  selectedTypes: string[];
}