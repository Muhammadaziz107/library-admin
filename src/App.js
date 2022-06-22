import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Courses from "./Pages/Courses/courses";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
