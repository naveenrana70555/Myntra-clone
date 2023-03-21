import React from "react";
import { App } from "./App";
import { Login } from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
export function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<App />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}
