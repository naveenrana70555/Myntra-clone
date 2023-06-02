import React, { useContext, useState } from "react";
import "./CheckoutProduct.css";
import { CartContext } from "../../Router";
import { useNavigate } from "react-router-dom";

export function CheckoutProduct() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const totalprice = cart.map((item) => item.price);
  const finalprice = totalprice.reduce((acc, sum) => acc + sum, 0);
  const [price, setPrice] = useState(finalprice);

  const decrease = function (minus) {
    const subtract = cart.filter((item) => item.id === minus);
    if (subtract[0].item > 1) {
      subtract[0].item = parseInt(subtract[0].item - 1);
      setPrice(price - parseInt(subtract[0].price));
      navigate("/checkoutProduct");
    } else {
      removeItem(minus);
      setPrice(price - parseInt(subtract[0].price));
      navigate("/checkoutProduct");
    }
  };
  const increase = function (plus) {
    const add = cart.filter((item) => item.id === plus);
    if (add[0].item < 5) {
      add[0].item = parseInt(add[0].item + 1);
      setPrice(price + parseInt(add[0].price));
      navigate("/checkoutProduct");
    } else {
      alert("you can only buy maximum 5 at a time");
    }
  };
  const removeItem = function (remove) {
    let reduce = cart.filter((item) => item.id !== remove);
    setCart(reduce);
    let reduce2 = cart.filter((item) => item.id === remove);
    setPrice(price - parseInt(reduce2[0].price) * reduce2[0].item);
  };
  return (
    <>
      {cart.length > 0 ? (
        <div className="Cart-card">
          {cart.map((data) => (
            <div className="product-unique">
              <div className="image-container">
                <img id={1} src={data.imgscr} alt="Loading..." />
              </div>
              <div className="order-detail">
                <h3 style={{ paddingRight: "111px" }}>
                  {data.pname.toUpperCase()}
                </h3>
                <p>Rs {data.price} /-</p>
              </div>
              <div className="cart-button">
                <div className="button-first">
                  <div className="btn-minus">
                    <button onClick={() => decrease(data.id)}>-</button>
                  </div>
                  <span>item: {data.item}</span>
                  <div className="btn-plus">
                    <button onClick={() => increase(data.id)}>+</button>
                  </div>
                </div>

                <div className="button-second">
                  <div className="btn-remove">
                    <button onClick={() => removeItem(data.id)}>
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h1>SUBTOTAL:{price}</h1>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty-cartimg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg"
              alt="loading"
            />
            <div>
              <h1>Oops! your cart is empty😶😶</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
