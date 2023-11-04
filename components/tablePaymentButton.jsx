import { useCart, useCartDispatch } from "@/context/CartContext";
import { useHistoryDispatch } from "@/context/HistoryContext";
import Swal from "sweetalert2";

const ButtonPayment = ({ totalPrice }) => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const historyDispatch = useHistoryDispatch();
  const handleCheckout = () => {
    Swal.fire({
      title: "$" + totalPrice,
      text: "Are you sure to payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Payment!", "Your Purchase Successfully.", "success");
        // Membuat objek transaksi dari data keranjang
        const transaction = {
          cartItems: cart,
          total: parseFloat(totalPrice),
          date: new Date().toISOString(),
        };
        // Mengirim objek transaksi ke reducer histori transaksi
        historyDispatch({ type: "payment", payload: transaction });
        dispatch({
          type: "clear",
        });
      }
    });
  };

  const isDisablebutton = () => {
    return cart.length === 0;
  };
  return (
    <button
      disabled={isDisablebutton()}
      onClick={() => handleCheckout()}
      className="btn btn-accent text-gray-800 dark:text-white disabled:bg-green-700 disabled:text-gray-400 dark:disabled:text-gray-400"
    >
      Checkout
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
  );
};
export default ButtonPayment;
