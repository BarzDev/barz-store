"use client";
import Navbar from "@/components/navbar";
import ListProduct from "@/components/listProduct";
import { useState, useEffect } from "react";
import Skeleton from "@/components/skeleton";
import storeApi from "@/api";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const response = await storeApi.get("/products");
    const data = await response.data;
    setProduct(data);
    setIsLoading(false);
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
        {isLoading ? <Skeleton /> : <ListProduct product={product} />}
      </div>
    </>
  );
}
