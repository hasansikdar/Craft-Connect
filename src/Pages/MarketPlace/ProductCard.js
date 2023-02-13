import React, { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Context/UserContext';

const ProductCard = ({ product, setCartProduct }) => {

  const {user} = useContext(Authcontext);

  const {
    userName,
    productName,
    productPrice,
    productDescription,
    productImg,
    email,
    userPhotoURL,
  } = product;
  // console.log(product);

  const cartProduct = {
    sellerName: userName,
    sellerEmail: email,
    sellerImage: userPhotoURL,
    buyerName: user?.displayName,
    buyerEmail: user?.email,
    productName,
    productImg,
    productPrice,
    productDescription
  }
const addToCartProduct = () =>{
  fetch("http://localhost:5000/addtocart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(cartProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        toast.success("Product added to cart");
      }
    })
    .catch((error) => {
      toast.error(error.message);
    });
}



  return (
    <div className="bg-white mx-auto  w-[300px] rounded-md mb-5 ">
      <img
        className=" mx-auto pt-2 px-2 rounded-md h-[40%]"
        src={productImg}
        alt=""
      />
      <div className="pl-4 pr-4 pb-4 ">
        <h4 className="font-bold text-[#FF3F4A] text-2xl pt-2">
          {productName}
        </h4>
        <p className="text-xs py-1 text-gray-700">Product By {userName}</p>
        <p className=" text-gray-700">
          {productDescription.slice(0, 35)}...see more
        </p>
        <div className="pt-2 flex justify-between items-center">
          <p className="text-2xl font-bold text-[#FF3F4A]">
            ${productPrice} <span className="text-xs">Only</span>
          </p>
          <button
            onClick={addToCartProduct}
            className="bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;