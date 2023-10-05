"use client";
import { useHistory } from "@/context/HistoryContext";
import Image from "next/image";
import { useState } from "react";

const HistoryList = () => {
  const { transactionHistory } = useHistory();
  const [selectedItem, setSelectedItem] = useState(null); // State variable for selected item

  // Function to open the modal and set the selected item
  const openModal = (trx) => {
    setSelectedItem(trx);
    document.getElementById("my_modal").showModal();
  };

  // Function to close the modal
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
                  // Tanggal dalam format ISO 8601
                  const isoDateString = trx.date;

                  // Buat objek Date dari string ISO 8601
                  const isoDate = new Date(isoDateString);

                  // Format tanggal dalam format yang umum
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

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal" className="modal">
          {selectedItem && ( // Conditionally render modal content if selectedItem is not null
            <div className="modal-box">
              <div className="py-4 ">
                <div className="overflow-x-auto max-h-96">
                  <table className="table">
                    {/* head */}
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

              <div className="flex justify-end">
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
          <form method="dialog" className="modal-backdrop" onClick={closeModal}>
            {/* Add some content for the backdrop */}
          </form>
        </dialog>
      </div>
    </>
  );
};

export default HistoryList;
