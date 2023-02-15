import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsOfProduct = () => {
  const product = useLoaderData();
  const {
    userName,
    productName,
    productPrice,
    productDescription,
    productImg,
    email,
    userPhotoURL,
  } = product;

  return (
    <>
      <div className=" pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-y-auto p-10">
          <div>
            <img
              className="rounded-md w-full h-[300px] md:w-[80%] md:h-[500px] mx-auto object-cover"
              src={productImg}
              alt="product img"
            />
          </div>
          <div>
            <p className="text-4xl  text-[#FF3F4A]">{productName}</p>
            <p className="py-3">{productDescription}</p>
            <div className="flex justify-between "> 
              <p className="text-4xl font-bold text-[#FF3F4A]">
                ${productPrice} <span className="text-xs">Only</span>
              </p>
              <div className="flex items-center gap-x-2">
                <p className="text-xl">Product by {userName}</p>
                <img className="w-14 rounded-full" src={userPhotoURL} alt="" />
              </div>
            </div>
            <button>Add TO Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsOfProduct;
