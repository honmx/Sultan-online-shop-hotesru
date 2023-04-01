import React, { FC, useState } from "react";
import { IProduct } from "../../types/IProducts";
import Button from "../UI/Button/Button";
import RangeSelector from "../UI/RangeSelector/RangeSelector";
import SelectSelector from "../UI/SelectSelector/SelectSelector";
import Title from "../UI/Title/Title";
import trash from "../../assets/trash.svg";
import FilterBar from "../FilterBar/FilterBar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filters } from "../../helpers/data/filters";
import { FilterType } from "../../types/FilterType";
import { useSmallerDevice } from "../../hooks/useSmallerDevice";
import arrowDown from "../../assets/arrow-down.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import s from "./SideBar.module.scss";
import { clearAllFilters, setBrands, setPrice, setProducers } from "../../store/slices/categorySlice";

interface Props {
  className?: string;
  products: IProduct[];
  categoryType: FilterType;
}

const SideBar: FC<Props> = ({ className, products, categoryType }) => {

  const dispatch = useAppDispatch();
  
  const selectedFilters = useAppSelector(state => state.category.filters);

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10000);

  const [selectedProducers, setSelectedProducers] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [active, setActive] = useState<boolean>(false);

  const [smallerDevice] = useSmallerDevice(1023);

  const applyFilters = () => {
    dispatch(setPrice({min, max}));
    dispatch(setProducers(selectedProducers));
    dispatch(setBrands(selectedBrands));
  }

  const clearFilters = () => {
    setMin(0);
    setMax(10000);
    setSelectedProducers([]);
    setSelectedBrands([]);
  }

  return (
    <div className={`${s.sidebar} ${className}`}>
      <div className={s.titleContainer}>
        <Title usualText="Подбор по параметрам" className={s.title} />
        {
          smallerDevice &&
          <Button
            img={active ? arrowLeft : arrowDown}
            w={smallerDevice ? "30px" : "40px"}
            p={"0px"}
            ar={1}
            onClick={() => setActive(prev => !prev)}
          />
        }
      </div>
      {
        (!smallerDevice || active) &&
        <div className={s.selectors}>
          <RangeSelector className={s.selector} name="Цена ₸" min={min} max={max} setMin={setMin} setMax={setMax} />
          <SelectSelector
            className={s.selector}
            name="Производитель"
            values={products.map(product => product.producer)}
            selected={selectedProducers}
            setSelected={setSelectedProducers}
          />
          <SelectSelector
            className={s.selector}
            name="Бренд"
            values={products.map(product => product.brand)}
            selected={selectedBrands}
            setSelected={setSelectedBrands}
          />
          <div className={s.buttonsContainer}>
            <Button className={s.show} onClick={applyFilters}>Показать</Button>
            <Button img={trash} p={"18.5px"} onClick={clearFilters}></Button>
          </div>
        </div>
      }
      {
        !smallerDevice &&
        <FilterBar className={s.filterbar} filters={filters[categoryType]} selectedFilters={selectedFilters} />
      }
    </div>
  )
};

export default SideBar;
