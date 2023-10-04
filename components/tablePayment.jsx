"use client";
import { useCart } from "@/context/CartContext";
import ButtonPayment from "./tablePaymentButton";

const Payment = () => {
  const cart = useCart();

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  };
  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <div className=" px-8 py-5 ">
      <div className="border border-gray-800 dark:border-gray-400 border-4 rounded-xl px-8 py-5 ">
        <div className="flex flex-row justify-between">
          <div className="">
            <div className="font-bold text-gray-800 dark:text-white">
              <h1> TOTAL PRICE :</h1>
            </div>
            <div className="font-bold text-lg text-yellow-500">
              <h1> $ {totalPrice}</h1>
            </div>
          </div>

          <div>
            <ButtonPayment totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
