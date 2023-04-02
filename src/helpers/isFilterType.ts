import { FilterType } from "../types/FilterType";
import { filters } from "./data/filters";

export const isFilterType = (str: string): str is FilterType => {
  return Object.keys(filters).indexOf(str as FilterType) !== -1;
}