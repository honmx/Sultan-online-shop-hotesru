import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import s from "./RangeSelector.module.scss";

interface Props {
  name: string;
  min: number;
  max: number;
  setMin: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<number>>;
  className?: string;
}

const RangeSelector: FC<Props> = ({ name, min, max, setMin, setMax, className }) => {

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => setMin(Number(e.target.value))
  
  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => setMax(Number(e.target.value))

  return (
    <div className={`${s.rangeContainer} ${className}`}>
      <p className={s.name}>{name}</p>
      <div className={s.inputContainer}>
        <input type="text" value={min} onChange={handleMinPriceChange} />
        <span>-</span>
        <input type="text" value={max} onChange={handleMaxPriceChange} />
      </div>
    </div>
  )
};

export default RangeSelector;
