import React, { createContext, useState } from "react";
import all_product from "../Component/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] + 1,
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
      };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    {
      let totalItem = 0;
      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          totalItem += cartItem[item];
        }
      }
      return totalItem;
    }
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
