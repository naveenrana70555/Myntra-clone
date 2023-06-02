import React, { useState, createContext } from "react";
import { App } from "./App";
import { Login } from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import { CheckoutProduct } from "./components/CheckoutProduct/CheckoutProduct";
export const CartContext = createContext();
export function Router() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<App />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkoutProduct" element={<CheckoutProduct />} />
          </Routes>
        </BrowserRouter>
        {/* <Login/> */}
      </CartContext.Provider>
    </div>
  );
}
