import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSlice from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    category: categorySlice,
    cart: cartSlice,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;