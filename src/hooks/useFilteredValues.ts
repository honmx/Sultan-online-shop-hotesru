import { useEffect, useState } from "react";

interface IDependencies {
  inputValue: string;
}

export const useFilteredValues = (values: string[], { inputValue }: IDependencies) => {
  const [setOfFilteredValues, setSetofFilteredValues] = useState(Array.from(new Set(values)).sort((a, b) => a.localeCompare(b)))
  const [filtered, setFiltered] = useState<string[]>(setOfFilteredValues);

  useEffect(() => {
    setFiltered(setOfFilteredValues.filter(value => value.toLowerCase().startsWith(inputValue.toLowerCase())));
  }, [inputValue]);

  useEffect(() => {
    setFiltered(Array.from(new Set(values)).sort((a, b) => a.localeCompare(b)));
  }, [values]);

  return [filtered];
}