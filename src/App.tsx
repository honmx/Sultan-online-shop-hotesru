import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/Cart/CartPage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import CategoryPage from "./pages/Category/CategoryPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import AdminPage from "./pages/Admin/AdminPage";
import s from "./App.module.scss";

const App: FC = ({ }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalog">
          <Route index element={<CatalogPage />} />
          <Route path=":category">
            <Route index element={<CategoryPage />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<p data-testid="about">about</p>} />
        <Route path="/payment-and-delivery" element={<p data-testid="payment-and-delivery">payment and delivery</p>} />
        <Route path="/refund" element={<p data-testid="refund">refund</p>} />
        <Route path="/contacts" element={<p data-testid="contacts">contacts</p>} />
      </Route>
    </Routes>
  )
};

export default App;

