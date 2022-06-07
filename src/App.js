import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
