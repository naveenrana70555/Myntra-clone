import React, { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import "./ProductData.css";
import { Modal } from "antd";
import { Details } from "../Details/Details";
import { ApiData } from "../datadetails";

export function ProductData({ category, data, brand, searchitem, sort }) {
  const [open, setOpen] = useState(false);
  let sorted;
  if (sort === "") {
    sorted = ApiData;
  } else if (sort === "low") {
    sorted = ApiData.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    });
  } else if (sort === "high") {
    sorted = ApiData.sort((a, b) => {
      return parseInt(b.price) - parseInt(a.price);
    });
  } else if (sort === "lessfivehundred") {
    sorted = ApiData.filter((item) => item.price < 500);
  } else {
    sorted = ApiData.filter((item) => item.price > 500);
  }

  ///////////////////////////////////////////////
  let filteredData = sorted.filter((value) =>
    data === "" ? ApiData && (searchitem === "" ? true : searchitem === value.pname): value.filter === data || searchitem === value.pname
  );
  /////////////////////////////////////////////////
  if (category.length > 0) {
    filteredData = filteredData.filter((value) =>
      category.includes(value.category)
    );
  }
  if (brand.length > 0) {
    filteredData = filteredData.filter((value) => brand.includes(value.pname));
  }
  const [idk, setIdk] = useState("");
  const handleOpen = (e) => {
    setOpen(true);
    setIdk(e.target.id);
  };

  return (
    <div className="product-beautifier">
      {filteredData.map((product) => (
        <>
          <div className="image-container">
            <ImageCard
              id={product.id}
              img={product.imgscr}
              brand={product.pname}
              price={product.price}
              product={product.product}
              handleOpen={handleOpen}
            />
          </div>
          <Modal
            className="modal"
            footer={null}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <Details id={idk} />
          </Modal>
        </>
      ))}
    </div>
  );
}
