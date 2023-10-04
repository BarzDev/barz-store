"use client";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const cartReducer = (carts, action) => {
  switch (action.type) {
    case "add": {
      const index = carts.findIndex((obj) => obj.id === action.payload.id);
      if (index === -1) {
        return [...carts, { ...action.payload, quantity: 1 }];
      } else {
        return carts.map((carts3) => {
          if (carts3.id === action.payload.id) {
            return { ...carts3, quantity: carts3.quantity + 1 };
          } else {
            return carts3;
          }
        });
      }
    }
    case "decrese": {
      const index = carts.findIndex((obj) => obj.id === action.payload.id);
      if (index !== -1) {
        if (carts[index].quantity === 1) {
          return carts.filter((obj) => obj.id !== action.payload.id);
        } else {
          return carts.map((carts4) => {
            if (carts4.id === action.payload.id) {
              return { ...carts4, quantity: carts4.quantity - 1 };
            } else {
              return carts4;
            }
          });
        }
      }
    }

    case "remove": {
      return carts.filter((obj) => obj.id !== action.payload.id);
    }

    case "clear": {
      return [];
    }
    default: {
      throw Error("Error");
    }
  }
};

const initialState = [];

const CartProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={carts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};
export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};
