import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import craft1 from "../../assets/craftproducts/81a4sXq6N4L._SL1500_.jpg";

const MarketPlace = () => {
  const [cartProduct, setCartProduct] = useState(null);

  // console.log(cartProduct);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });

  // console.log(products);

  return (
    <div className=" relative  p-3 rounded-md mx-auto w-[95%] md:w-[98%] grid grid-cols-1 md:grid-cols-4 gap-y-10 h-screen overflow-y-auto mt-8 mb-10  pb-32  ">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          setCartProduct={setCartProduct}
        ></ProductCard>
      ))}
    </div>
  );
};

export default MarketPlace;
