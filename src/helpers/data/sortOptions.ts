export const sortOptions = {
  "name up": "Название (по возрастанию)",
  "name down": "Название (по убыванию)",
  "price up": "Цена (по возрастанию)",
  "price down": "Цена (по убыванию)",
} as const;

export type sortOptionsType = typeof sortOptions;