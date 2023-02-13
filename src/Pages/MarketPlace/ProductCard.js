import React, { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Context/UserContext';

const ProductCard = ({ product }) => {


  const {user} = useContext(Authcontext);

  // const 
  
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

  // http://localhost:5000/checkCartProduct

  const isProductAddedToCart = (product) => {
    fetch(
      `http://localhost:5000/checkCartProduct?productName=${product?.productName}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        if (data.length) {

          toast.success("Product already added in cart");
        }
        else{
          addProductToCart()
        }

      });
  };

    const addProductToCart = () =>{

      const cartProduct = {
        sellerName: userName,
        sellerEmail: email,
        sellerImage: userPhotoURL,
        buyerName: user?.displayName,
        buyerEmail: user?.email,
        productName,
        productImg,
        productPrice,
        productDescription,
      };


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
    <div className="bg-white mx-auto h-[400px] w-[300px] rounded-md mb-5 hover:-translate-y-[30px] transition duration-300">
        <img
          className="mx-auto pt-2 px-2 rounded-md h-[200px] w-full object-cover"
          src={productImg}
          alt=""
        />
      <div className="pl-4 pr-4 pb-4 ">
        <h4
          title={productName}
          className="font-bold text-[#FF3F4A] text-lg pt-2"
        >
          {productName.slice(0, 40)}...
        </h4>
        <p className="text-xs py-1 text-gray-700">Product By {userName}</p>
        <p className=" text-gray-700">
          {productDescription.slice(0, 35)}...see more
        </p>
        <div className="relative bottom-0 pt-2 flex justify-between items-center">
          <p className="text-2xl font-bold text-[#FF3F4A]">
            ${productPrice} <span className="text-xs">Only</span>
          </p>
          <button
            onClick={() => { isProductAddedToCart(product)} }
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