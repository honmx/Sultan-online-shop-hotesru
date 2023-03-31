import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/IProducts";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products"
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;