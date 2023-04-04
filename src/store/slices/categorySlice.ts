import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortOptionsType } from "../../types/SortOptionsType";

interface ICategorySlice {
  sort: keyof sortOptionsType,
  filters: string[],
  selectors: {
    price: {
      min: number,
      max: number
    },
    producer: string[],
    brand: string[]
  },
}

const categorySlice = createSlice({
  name: "category",
  initialState: {
    sort: "name up",
    filters: [],
    selectors: {
      price: {
        min: 0,
        max: 10000
      },
      producer: [],
      brand: []
    },
  } as ICategorySlice,
  reducers: {
    setSort(state, action: PayloadAction<keyof sortOptionsType>) {
      state.sort = action.payload;
    },
    setPrice(state, action: PayloadAction<{min: number, max: number}>) {
      state.selectors.price = action.payload;
    },
    setProducers(state, action: PayloadAction<string[]>) {
      state.selectors.producer = action.payload;
    },
    setBrands(state, action: PayloadAction<string[]>) {
      state.selectors.brand = action.payload;
    },
    toggleFilter(state, action: PayloadAction<string>) {
      if (state.filters.includes(action.payload)) {
        state.filters = state.filters.filter(filter => filter !== action.payload);
      } else {
        state.filters.push(action.payload);
      }
    },
    clearAllFilters(state) {
      state.sort = "name up";
      state.filters = [];
      state.selectors = {
        price: {
          min: 0,
          max: 10000
        },
        producer: [],
        brand: []
      }
    },
  }
});

export const { setSort, setPrice, setProducers, setBrands, toggleFilter, clearAllFilters } = categorySlice.actions;
export default categorySlice.reducer;