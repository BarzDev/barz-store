"use client";
import Image from "next/image";
import style from "./listProduct.module.css";
import { useState } from "react";
import { useCartDispatch } from "@/context/CartContext";
import Swal from "sweetalert2";

const ListProduct = ({ product }) => {
  const dispatch = useCartDispatch();
  const addCart = (item) => {
    dispatch({
      type: "add",
      payload: item,
    });

    Swal.fire({
      title: "Product add to cart",
      icon: "success",
    });
  };

  const [selectedItem, setSelectedItem] = useState(null); // State variable for selected item

  // Function to open the modal and set the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    document.getElementById("my_modal").showModal();
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    document.getElementById("my_modal").close();
  };

  return (
    <>
      <div className="py-4 px-4">
        <div className="flex flex-wrap gap-3 justify-center item-center">
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className="card w-60 bg-base-100 shadow-xl overflow-hidden "
              >
                <div className={style["imgContainer"]}>
                  <div className={style["imgProduct"]}>
                    <Image
                      src={item.image}
                      fill
                      style={{ objectFit: "contain" }}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-yellow-400 sm:text-xl text-base">
                    $ {item.price}
                  </h2>
                  <p className="sm:text-center text-keft sm:text-base text-sm">
                    {item.title}
                  </p>

                  <div className="card-actions justify-between mt-3">
                    <button
                      className="bg-green-700 hover:bg-green-500 text-white btn sm:btn-md btn-sm w-full sm:w-fit"
                      onClick={() => openModal(item)} // Open modal with selected item
                    >
                      Details
                    </button>
                    <button
                      className="btn sm:btn-md btn-sm bg-yellow-400 hover:bg-yellow-600 text-white w-full sm:w-fit"
                      onClick={() => addCart(item)}
                    >
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
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal" className="modal">
        {selectedItem && ( // Conditionally render modal content if selectedItem is not null
          <div className="modal-box">
            <div className={style["imgContainer"]}>
              <div className={style["imgProduct"]}>
                <Image
                  src={selectedItem.image}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={selectedItem.title}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="py-4">
              <p className="text-white font-bold sm:text-base text-sm">
                {selectedItem.title}
              </p>
              <h3 className="font-bold text-lg text-yellow-400 text-right">
                Price : $ {selectedItem.price}
              </h3>
              <p className="pt-3 font-bold">Description :</p>
              <p className="text-justify sm:text-base text-sm">
                {selectedItem.description}
              </p>
            </div>

            <div className="flex justify-end">
              <button className="btn btn-error text-white" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
        <form method="dialog" className="modal-backdrop" onClick={closeModal}>
          {/* Add some content for the backdrop */}
        </form>
      </dialog>
    </>
  );
};

export default ListProduct;
