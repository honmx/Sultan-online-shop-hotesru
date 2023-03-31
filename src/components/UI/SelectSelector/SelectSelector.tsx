import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useMemo, useState } from "react";
import { countAppearings } from "../../../helpers/countAppearings";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { toggleBrand, toggleProducer } from "../../../store/slices/categorySlice";
import TextInput from "../Input/TextInput";
import s from "./SelectSelector.module.scss";

interface Props {
  name: string;
  values: string[];
  className?: string;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

const SelectSelector: FC<Props> = ({ name, values, selected, setSelected, className }) => {

  const filters = useAppSelector(state => state.category.filters);

  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [filtered, setFiltered] = useState<string[]>(Array.from(new Set(values)).sort((a, b) => a.localeCompare(b)));

  useEffect(() => {
    setFiltered(prev => prev.filter(value => value.toLowerCase().startsWith(inputValue.toLowerCase())));
  }, [inputValue]);

  const appearingOfValue = useMemo(() => {
    return countAppearings(values);
  }, [filtered, values]);

  const isChecked = (value: string) => {
    return selected.includes(value);
  }

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      setSelected(prev => prev.filter(item => item !== value));
    } else {
      setSelected(prev => [...prev, value]);
    }
  }

  return (
    <div className={`${s.selectContainer} ${className}`}>
      <p className={s.title}>{name}</p>
      <TextInput placeholder="Поиск..." value={inputValue} setValue={setInputValue} />
      <form action="" className={s.form}>
        {
          filtered
            .filter(value => appearingOfValue[value] !== undefined || filters.length === 0)
            .map((value, i) => (
              (active || i < 4) &&
              <label key={value} className={s.label}>
                <input type="checkbox" className={s.checkbox} checked={isChecked(value)} onChange={() => handleChange(value)} />
                <p className={s.text}>
                  <span className={s.name}>{value}</span>
                  <span className={s.count}>{appearingOfValue[value] ? `(${appearingOfValue[value]})` : ""}</span>
                </p>
              </label>
            ))
        }
      </form>
      {
        filtered.filter(value => appearingOfValue[value] !== undefined || filters.length === 0).length > 4 &&
        <p className={s.toggle} onClick={() => setActive(prev => !prev)}>{active ? "Скрыть все" : "Показать все"}</p>
      }
    </div>
  )
};

export default SelectSelector;
