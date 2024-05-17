"use client";
import { useCart, useCartDispatch } from "@/context/CartContext";
import Image from "next/image";
import Swal from "sweetalert2";

export default function NewTableCartList() {
  const carts = useCart();
  const dispatch = useCartDispatch();

  const add = (cart) => {
    dispatch({
      type: "add",
      payload: cart,
    });
  };

  const decrese = (cart) => {
    dispatch({
      type: "decrese",
      payload: cart,
    });
  };

  const remove = (cart) => {
    Swal.fire({
      icon: "warning",
      title: "Remove Selected Item??",
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: "Remove",
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire(
          { icon: "error", title: "Item Removed" },
          dispatch({
            type: "remove",
            payload: cart,
          })
        );
      }
    });
  };

  return (
    <div>
      {carts.map((item, i) => {
        return (
          <div key={i} className="w-full text-gray-800 dark:text-white mb-3 ">
            <div className="flex items-center gap-3 md:mx-4 mx-0 ">
              <h1 className="">{i + 1}</h1>
              <div className="mask mask-squircle w-12 h-12 bg-white p-1 relative hidden md:block">
                <Image
                  src={item.image}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={item.title}
                />
              </div>

              <div className="w-3/4">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex md:gap-2 gap-1">
                <button
                  onClick={() => decrese(item)}
                  className="btn btn-xs bg-red-600 border-none text-white hover:bg-red-400 rounded-full"
                  style={{ fontSize: "18px" }}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => add(item)}
                  className="btn btn-xs bg-green-500 border-none text-white hover:bg-green-300 rounded-full"
                  style={{ fontSize: "18px" }}
                >
                  +
                </button>
                <button
                  onClick={() => remove(item)}
                  className="btn btn-warning bg-yellow-600  border-none btn-xs text-white md:ms-5 ms-1"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="border w-full"></div>
          </div>
        );
      })}
    </div>
  );
}
