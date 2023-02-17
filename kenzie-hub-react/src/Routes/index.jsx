import { Routes, Route } from "react-router-dom";
import DashBoardPage from "../pages/DashBoard";
import Component from "../Routes/styles";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import React from "react";
import { AnimatePresence } from "framer-motion";

const RoutesPage = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/DashBoard" element={<DashBoardPage />} />
        <Route
          path="*"
          element={
            <Component>
              <h1>404 página não encontrada</h1>
            </Component>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesPage;
