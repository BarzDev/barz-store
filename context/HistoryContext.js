"use client";
import React, { createContext, useContext, useReducer } from "react";

const HistoryContext = createContext(null);
const HistoryDispatchContext = createContext(null);

const historyReducer = (state, action) => {
  switch (action.type) {
    case "payment": {
      const updatedHistory = [...state.transactionHistory, action.payload];
      return { ...state, transactionHistory: updatedHistory };
    }
    default:
      throw Error("Error");
  }
};

const currentDate = new Date(); // Mendapatkan tanggal saat ini
currentDate.setDate(currentDate.getDate() - 2); // Mengurangkan 2 hari dari tanggal saat ini
const date = currentDate.toISOString(); // Mengubah tanggal menjadi format ISO

const initialState = {
  transactionHistory: [
    {
      cartItems: [
        {
          price: 55.99,
          quantity: 1,
          title: "Mens Cotton Jacket",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
          price: 22.3,
          quantity: 1,
          title: "Mens Casual Premium Slim Fit T-Shirts",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
      ],

      total: 78.29,
      date: currentDate.toISOString().split("T")[0] + "T16:39:42.500Z", // Gabungkan tanggal dari currentDate dengan waktu yang diinginkan
    },
    {
      cartItems: [
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 109.95,
          quantity: 1,

          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        },

        {
          image:
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          price: 10.99,
          quantity: 2,

          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        },
      ],

      date: currentDate.toISOString().split("T")[0] + "T15:22:22.881Z",
      total: 131.93,
    },
  ],
};

export function HistoryProvider({ children }) {
  const [history, dispatch] = useReducer(historyReducer, initialState);

  return (
    <HistoryContext.Provider value={history}>
      <HistoryDispatchContext.Provider value={dispatch}>
        {children}
      </HistoryDispatchContext.Provider>
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
export const useHistoryDispatch = () => {
  return useContext(HistoryDispatchContext);
};
