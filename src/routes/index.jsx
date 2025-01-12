import CartItemListPage from "@/pages/CartItemListPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductsPage from "@/pages/ProductsPage";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart-items" element={<CartItemListPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
