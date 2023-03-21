import React, { useContext } from "react";
import "./ImageCard.css";
import { WishListContext } from "../../App";
export function ImageCard({ img, product, price, brand, id, handleOpen }) {
  const { wish, setWish } = useContext(WishListContext);
  return (
    <div className="image-card">
      <div className="image-holder" onClick={handleOpen}>
        <img
          id={id}
          src={img}
          alt="Loading..."
          style={{ height: "250px", width: "100%" }}
        />
      </div>
      <div
        className="image-des"
        style={{ paddingLeft: "9px", marginBottom: "5px" }}
      >
        <h3>{brand.toUpperCase()}</h3>
        <p style={{ margin: "-15px 0px" }}>{product}</p>
        <p>Rs {price} /-</p>
      </div>
      <div className="image-button">
        <button onClick={() => setWish([...wish, id])}>Add to Wishlist</button>
      </div>
    </div>
  );
}
