import Navbar from "@/components/navbar";
import TableCart from "@/components/tableCart";
import Payment from "@/components/tablePayment";

export default function Cart() {
  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <div
        className="h-screen overflow-y-hidden"
        style={{ paddingTop: "66px" }}
      >
        <Payment />
        <TableCart />
      </div>
    </>
  );
}
