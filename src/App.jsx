import React, { useState, createContext } from "react";
import "./App.css";
import { Carosel } from "./components/Carosel/Carosel";
import { Navbar } from "./components/navbar/Navbar";
import { ProductData } from "./components/Productdata/ProductData";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SortBar } from "./components/sortby/SortBar";
import Footer from "./components/Footer/Footer";
export const WishListContext = createContext();

export function App() {
  const [data, setData] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [searchitem, setSearchItem] = useState("");
  const handleClick = (e) => setData(e.target.value);
  const [sort, setSort] = useState("");
  // const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const sortChange = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (categories) => {
    setCategory(categories);
  };
  const handleFilter = (brands) => {
    setBrand(brands);
  };
  const searchItem = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <WishListContext.Provider value={{ wish, setWish }}>
        {/* <CartContext.Provider value={{ cart, setCart }}> */}
        <Navbar searchItem={searchItem} />
        <Carosel />
        <SortBar sortChange={sortChange} />
        <div className="home">
          <Sidebar
            handleClick={handleClick}
            handleChange={handleChange}
            handleFilter={handleFilter}
          />
          <ProductData
            data={data}
            category={category}
            brand={brand}
            searchitem={searchitem}
            sort={sort}
          />
        </div>
        <Footer />
        {/* </CartContext.Provider> */}
      </WishListContext.Provider>
    </div>
  );
}
