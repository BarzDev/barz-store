import TableCartList from "./tableCartList";
import NewTableCartList from "./tableCartList-new";

const TableCart = () => {
  return (
    <>
      <div className="px-8 h-screen ">
        <div
          className="border border-gray-800 dark:border-gray-400 border-4 rounded-xl p-5 overflow-hidden"
          style={{ height: "60%" }}
        >
          <div className="overflow-auto max-h-80">
            {/* <TableCartList /> */}
            <NewTableCartList />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCart;
