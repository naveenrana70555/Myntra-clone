// import { Modal } from "antd";
import React, { useContext } from "react";
// import { CheckoutProduct } from "../CheckoutProduct/CheckoutProduct";
import { ApiData } from "../datadetails";
import "./Details.css";
import { CartContext } from "../../App";

export function Details({ id }) {
  const { cart, setCart } = useContext(CartContext);
  const fildata = ApiData.filter((value) => {
    return id == value.id;
  });
  return (
    <>
      {fildata.map((data) => (
        <div className="detail-main">
          <div className="detail-left">
            <div className="image-inner">
              <img src={data.imgscr} alt="Loading..." />
            </div>
            <div className="image-inner">
              <img src={data.img2} alt="Loading..." />
            </div>
            <div className="image-inner">
              <img src={data.img3} alt="Loading..." />
            </div>
            <div className="image-inner">
              <img src={data.img4} alt="Loading..." />
            </div>
          </div>
          <div className="detail-right">
            <h2 className="brand">{data.pname.toUpperCase()}</h2>
            <p className="brand-type">{data.category}</p>
            <hr
              style={{
                width: "50%",
                transform: "translateX(-50%)",
                marginTop: "25px",
              }}
            />
            <p>
              Amazing clothing you would love the asthectic look and feel of the
              fabric and will enjoy the time you have it on !
            </p>
            <h2>Rs {data.price} /-</h2>
            <p className="size">{data.size[0]}</p>
            <p className="size">{data.size[1]}</p>
            <p className="size">{data.size[2]}</p>
            <br />
            <br />
            <button className="addcart" onClick={() => setCart([...cart, id])}>
              Add to Cart
            </button>
            <button className="addwishlist">Wishlist</button>
          </div>
        </div>
      ))}
    </>
  );
}
