import React from "react";
import "./global.scss";
import Layout from "./components/layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Orders from "./Pages/Orders/Orders";
import Analytics from "./Pages/Analytics/Analytics";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact name="dashboard" path="/" element={<Dashboard />} />
            <Route exact name="products" path="/products" element={<Products />} />
            <Route exact name="users" path="/users" element={<Users />} />
            <Route exact name="orders" path="/orders" element={<Orders />} />
            <Route exact name="analytics" path="/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
