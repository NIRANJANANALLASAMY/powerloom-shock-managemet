import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CustomerHome from "./components/CustomerHome";
import AdminHome from "./components/AdminHome";
import AdminPage from "./components/admin/AdminPage";
import ManageStock from "./components/admin/ManageStock";
import EditItems from "./components/admin/EditItems";
import StockList from "./components/admin/StockList";
import CategoryPage from "./components/admin/CategoryPage";
import CategoryDetail from "./CategoryDetail";
import AdminDashboard from "./components/admin/AdminDashboard";
import ByBrand from "./components/admin/ByBrand"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer-home" element={<CustomerHome />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/manage-stock" element={<ManageStock />} />
      <Route path="/admin/edit-items" element={<EditItems />} />
      <Route path="/admin/stock-list" element={<StockList />} />
      <Route path="/admin/categorypage" element={<CategoryPage />} />
      <Route path="/category/:id" element={<CategoryDetail />} />
      <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/admin/ByBrand" element={<ByBrand />} />
    </Routes>
  );
}

export default App;
