import React, { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import "./sass/CartOpChangePopup.scss";

const CartOpChangePopup = ({ onClose, item }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["pink", "sky", "white", "black"];

  const [selectSize, setSelectSize] = useState(item.size);
  const [selectColor, setSelectColor] = useState(item.color);
  const [count, setCount] = useState(item.count);
  const [price, setPrice] = useState(item.price);

  const { updateCartOptions } = useCartStore();

  const handleItemSize = (size) => {
    setSelectSize(size);
    console.log("개수", count);
    console.log(size);
  };

  const handleUpdate = () => {
    updateCartOptions(item.code, selectSize, selectColor, count);
    onClose();
  };

  return (
    <div className="cart-op-change-wrap">
      <div className="cart-op-popup" onClick={(e) => e.preventDefault()}>
        <div className="op-popup-title">
          <h2>옵션변경</h2>
        </div>

        <div className="op-popup-middle">
          <div className="op-popup-change">
            <div className="op-size-change">
              <p>사이즈 선택 </p>
              <ul>
                {sizes.map((size, id) => (
                  <li key={id}>
                    <button
                      className={selectSize === size ? "active" : ""}
                      onClick={() => handleItemSize(size)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="op-color-change">
              {colors.map((color, id) => (
                <button
                  key={id}
                  className={`${color} ${
                    selectColor === color ? "active" : ""
                  }`}
                  onClick={() => setSelectColor(color)}
                ></button>
              ))}
            </div>

            <p className="op-count-change">
              <button
                className="minus"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
              ></button>
              <span>{count}</span>
              <button
                className="plus"
                onClick={() => setCount((c) => c + 1)}
              ></button>
            </p>
          </div>
          <div className="op-change-price">
            가격 : {(price * 0.8 * count).toLocaleString()}원{" "}
          </div>
        </div>

        <div
          className="op-popup-button"
          style={{ display: "flex", gap: "20px" }}
        >
          <button
            className="btn middle secondary"
            type="button"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="btn middle primary "
            type="button"
            onClick={handleUpdate}
          >
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOpChangePopup;
