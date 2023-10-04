"use client";
import { useCart, useCartDispatch } from "@/context/CartContext";
import Image from "next/image";
import Swal from "sweetalert2";

const TableCartList = () => {
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
      title: "Remove All Item??",
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: "Remove",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
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
    <table className="table">
      {/* head */}
      <thead
        className="text-gray-800 dark:text-white text-base bg-gray-300 dark:bg-gray-900 "
        style={{ position: "sticky", top: 0, zIndex: 1 }}
      >
        <tr className="text-gray-800 dark:text-white text-base">
          <th>No.</th>
          <th>Item Product</th>
          <th>Price</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">Total Price</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {carts.map((item, i) => {
          const producttotal = (item.price * item.quantity).toFixed(2);
          return (
            <tr
              key={item.id}
              className="text-gray-800 dark:text-white text-base"
            >
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 bg-white p-1 relative">
                      <Image
                        src={item.image}
                        fill
                        style={{ objectFit: "contain" }}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <div className="flex justify-center gap-2 text-center">
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
                </div>
              </td>
              <td className="text-center">$ {producttotal}</td>
              <th className="text-center">
                <button
                  onClick={() => remove(item)}
                  className="btn btn-warning bg-yellow-600  border-none btn-xs text-white"
                >
                  Remove
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TableCartList;
