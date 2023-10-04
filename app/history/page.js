import HistoryList from "@/components/history";
import Navbar from "@/components/navbar";

export default function History() {
  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <div
        className="h-screen overflow-y-hidden"
        style={{ paddingTop: "66px" }}
      >
        <HistoryList />
      </div>
    </>
  );
}
