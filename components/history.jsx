"use client";
import { useHistory } from "@/context/HistoryContext";
import Image from "next/image";
import { useState } from "react";

const HistoryList = () => {
  const { transactionHistory } = useHistory();
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (trx) => {
    setSelectedItem(trx);
    document.getElementById("my_modal").showModal();
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.getElementById("my_modal").close();
  };

  return (
    <>
      <div className="p-8  h-screen">
        <div className="border border-gray-800 dark:border-gray-400 border-4 rounded-xl p-5">
          <div className="overflow-x-auto max-h-96">
            <table className="table">
              {/* head */}
              <thead
                className="text-gray-800 dark:text-white text-base bg-gray-300 dark:bg-gray-900 "
                style={{ position: "sticky", top: 0, zIndex: 1 }}
              >
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Total Price</th>
                  <th>Item Details</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((trx, index) => {
                  const isoDateString = trx.date;

                  const isoDate = new Date(isoDateString);

                  const tanggal = isoDate.toLocaleDateString();
                  const jam = isoDate.toLocaleTimeString();

                  return (
                    <tr
                      key={trx.id}
                      className="text-gray-800 dark:text-white text-base"
                    >
                      <th>{index + 1}</th>
                      <td>
                        <div className="font-bold">{tanggal} </div>
                        <div className="text-sm">{jam}</div>
                      </td>
                      <td className="text-green-700 dark:text-yellow-400 font-bold">
                        $ {trx.total}
                      </td>
                      <td>
                        <button
                          className="btn border-none bg-sky-700 hover:bg-sky-500 text-white"
                          onClick={() => openModal(trx)} // Open modal with selected item
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <dialog id="my_modal" className="modal">
          {selectedItem && (
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="py-4 ">
                <div className="overflow-x-auto max-h-96 ">
                  <table className="table">
                    <thead
                      className="text-white text-base "
                      style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        backgroundColor: "hsl(var(--b1)",
                      }}
                    >
                      <tr>
                        <th>No.</th>
                        <th>Item</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th> Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedItem.cartItems.map((item, i) => {
                        return (
                          <tr key={item.id}>
                            <th>{i + 1}</th>
                            <th>
                              <div className="mask mask-squircle w-12 h-12 bg-white p-1 relative">
                                <Image
                                  src={item.image}
                                  fill
                                  style={{ objectFit: "contain" }}
                                  alt={item.title}
                                />
                              </div>
                            </th>
                            <td>{item.title}</td>
                            <td> X {item.quantity}</td>
                            <td className="w-24"> $ {item.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-bold">Total Price: $ {selectedItem.total}</p>
                <button
                  className="btn btn-error text-white"
                  onClick={closeModal}
                  style={{ position: "sticky", bot: 0, zIndex: 1 }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <form
            method="dialog"
            className="modal-backdrop"
            onClick={closeModal}
          ></form>
        </dialog>
      </div>
    </>
  );
};

export default HistoryList;
