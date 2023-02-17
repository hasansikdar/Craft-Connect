import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";

const DetailsOfProduct = () => {
  const { user } = useContext(Authcontext);
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

  const isProductAddedToCart = (product) => {
    fetch(
      `https://craft-connect-server-blond.vercel.app/checkCartProduct?productName=${product?.productName}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.length);
        if (data.length) {
          toast.error("Product already added in cart");
        } else {
          addProductToCart();
        }
      });
  };

  const addProductToCart = () => {
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

    fetch("https://craft-connect-server-blond.vercel.app/addtocart", {
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
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-y-auto p-10">
        <div>
          <img
            className="rounded-md w-full h-[300px] md:w-[80%] md:h-[500px] mx-auto object-cover"
            src={productImg}
            alt="product img"
          />
        </div>
        <div className="pb-[70px]">
          <p className="text-2xl pt-4 md:pt-0 md:text-4xl  text-[#FF3F4A]">
            {productName}
          </p>
          <p className="py-3">{productDescription}</p>
          <div className="md:flex justify-between pt-10 pb-4">
            <p className="text-4xl font-bold text-[#FF3F4A]">
              ${productPrice} <span className="text-xs">Only</span>
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <p className=" md:text-xl">Product by {userName}</p>
              <img
                className="w-10 md:w-14 rounded-full"
                src={userPhotoURL}
                alt=""
              />
            </div>
          </div>
          <button
            onClick={() => {
              isProductAddedToCart(product);
            }}
            className="bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfProduct;
