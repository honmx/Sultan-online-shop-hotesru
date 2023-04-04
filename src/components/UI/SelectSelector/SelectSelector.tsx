import React, { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { countAppearings } from "../../../helpers/countAppearings";
import { useAppSelector } from "../../../store/hooks";
import TextInput from "../Input/TextInput";
import s from "./SelectSelector.module.scss";
import { useFilteredValues } from "../../../hooks/useFilteredValues";

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
  const [filtered] = useFilteredValues(values, { inputValue });

  const appearingOfValue = useMemo(() => {
    return countAppearings(values);
  }, [filtered, values]);

  const isChecked = (value: string) => selected.includes(value);

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
