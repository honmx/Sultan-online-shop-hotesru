import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/IProducts";
import { createProduct } from "../../helpers/createProduct";
import { ICreateProduct } from "../../types/ICreateProduct";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Products' as const, id })),
            { type: 'Products', id: 'LIST' },
          ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (fields: Omit<ICreateProduct, "id">) => {
        const id = Math.round(Math.random() * 100000000);
        const product = createProduct({ id, ...fields });
        return {
          url: "/products",
          method: "POST",
          body: product
        }
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }]
    }),
    editProduct: builder.mutation({
      query: (fields: ICreateProduct) => {
        const product = createProduct(fields);
        return {
          url: `/products/${fields.id}`,
          method: "PATCH",
          body: product
        }
      },
      invalidatesTags: ["Products"]
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useEditProductMutation } = apiSlice;