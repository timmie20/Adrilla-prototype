import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<AppLayout />} />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
