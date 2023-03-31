import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { useAppDispatch } from "../../store/hooks";
import { toggleFilter } from "../../store/slices/categorySlice";
import s from "./FilterBar.module.scss";

interface Props {
  filters: string[];
  className?: string;
  selectedFilters: string[];
}

const FilterBar: FC<Props> = ({ filters, className, selectedFilters }) => {

  const dispatch = useAppDispatch();

  const handleClick = (filter: string) => {
    dispatch(toggleFilter(filter));
  }

  return (
    <div className={`${s.filters} ${className}`}>
      {
        filters.map(filter => (
          <button key={filter} className={selectedFilters.includes(filter) ? s.activeButton : s.button} onClick={() => handleClick(filter)}>{filter}</button>
        ))
      }
    </div>
  )
};

export default FilterBar;
