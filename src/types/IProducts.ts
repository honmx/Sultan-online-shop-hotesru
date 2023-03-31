import { FilterType } from "./FilterType";

export interface IProduct {
  id: number;
  name: {
    main: string;
    secondary: string;
  },
  url: string;
  capacity?: {
    value: string;
    type: string;
  };
  barcode: number;
  producer: string;
  brand: string;
  description: string;
  price: {
    value: number;
    currency: string;
  };
  type: {
    main: FilterType;
    subtypes?: string[];
  }
}