import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import Editpage from "./Editpage";
import Homepage from "./Homepage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edit/:id" element={<Editpage />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
};

export default MainRoutes;
