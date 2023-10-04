"use client";
import React from "react";
import DarkModeToggle from "./darkModeToggle";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const cart = useCart();
  const totalQuantity = cart
    ? cart.reduce((total, product) => total + product.quantity, 0)
    : 0;

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  };
  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <>
      <div className="navbar bg-base-100 px-5">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl text-white dark:text-gray-300 "
            href="/"
          >
            Barz Store
          </Link>
        </div>

        <div>
          <DarkModeToggle />
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-secondary badge-sm indicator-item">
                  {totalQuantity}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-white">
                  {totalQuantity} Items
                </span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <Link className="btn btn-primary btn-block" href="/carts">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10  rounded-full relative">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li>
                <Link href="/">Product List</Link>
              </li>
              <li>
                <Link href="/carts">
                  My Cart
                  <span className="badge badge-secondary badge-sm indicator-item">
                    {totalQuantity}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/history">Transaction History</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
