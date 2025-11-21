import React from "react";
import { useCartStore } from "../store/useCartStore";

const PayItem = () => {
  const { cartItems, totalPrice } = useCartStore();

  return (
    <div className="pay-item-list-wrap">
      <ul className="pay-item-list">
        {cartItems.map((item, id) => (
          <>
            <li key={id} className="pay-item">
              <div className="pay-item-inner">
                <div className="item-left">
                  
                </div>

                <div className="item-right">

                </div>
              </div>

            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default PayItem;
