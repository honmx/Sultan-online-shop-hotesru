import React, { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/About/AboutPage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import CatalogItemPage from "./pages/CatalogItem/CatalogItemPage";
import CategoryPage from "./pages/Category/CategoryPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";

const App: FC = ({ }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catalog">
          <Route index element={<CatalogPage />} />
          <Route path=":category">
            <Route index element={<CategoryPage />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
};

export default App;

