import React, { useContext } from "react";
import myntralogo from "../myntra.png";
import "./Navbar.css";
import { Badge, Input } from "antd";
import { WishListContext } from "../../App";
import { CartContext } from "../../App";
import {
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export function Navbar({ searchItem }) {
  const { wish } = useContext(WishListContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar-main">
      <div className="nav">
        <div className="nav-images">
          <img src={myntralogo} alt="" style={{ height: "50px" }} />
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="#">MENS</a>
            </li>
            <li>
              <a href="#">WOMENS</a>
            </li>
            <li>
              <a href="#">BOYS</a>
            </li>
            <li>
              <a href="#">GIRLS</a>
            </li>
            <li>
              <a href="#">OFFER</a>
            </li>
            <li>
              <a href="#">
                STUDIO<sup>NEW</sup>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-search">
          <Input
            className="nav-input"
            type="search"
            placeholder="Search products"
            prefix={<SearchOutlined color="gray" />}
            onChange={searchItem}
          />
        </div>
        <div className="nav-icons">
          <div className="icon-setter">
            <div>
              <UserOutlined id="profile" />
            </div>
            <div className="icon-label">
              <label htmlFor="profile">Profile</label>
            </div>
          </div>
          <div className="icon-setter">
            <div>
              <Badge count={wish.length} showZero>
                <HeartOutlined id="wishlist" />
              </Badge>
            </div>
            <div className="icon-label">
              <label htmlFor="wishlist">Wishlist</label>
            </div>
          </div>
          <div className="icon-setter">
            <div>
              <Badge count={cart.length} showZero>
                <ShoppingOutlined id="cart" />
              </Badge>
            </div>
            <div className="icon-label">
              <label htmlFor="cart">Cart</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
