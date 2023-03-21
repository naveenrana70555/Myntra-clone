import React from "react";
import { ApiData } from "../datadetails";
import "./CheckoutProduct.css";

export function CheckoutProduct() {
  // console.log(id);
  // const cartData = ApiData.filter((value) => id.includes(value.id));
  return (
    <>
      <div className="Cart-card">
        {ApiData.map((data) => (
          <div>
            <div>
              <img
                id={1}
                src={data.imgscr}
                alt="Loading..."
                style={{ height: "250px", width: "100%" }}
              />
            </div>
            <div
              className="cart-des"
              style={{ paddingLeft: "9px", marginBottom: "5px" }}
            >
              <h3>{data.pname.toUpperCase()}</h3>
              <p style={{ margin: "-15px 0px" }}>{data.product}</p>
              <p>Rs {data.price} /-</p>
            </div>
            <div className="cart-button">
              <button>Remove From Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
