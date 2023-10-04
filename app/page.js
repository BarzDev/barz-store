"use client";

import Navbar from "@/components/navbar";
import ListProduct from "@/components/listProduct";
import storeApi from "@/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const response = await storeApi.get("/products");
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <div style={{ paddingTop: "66px" }}>
        <ListProduct product={product} />
      </div>
    </>
  );
}
