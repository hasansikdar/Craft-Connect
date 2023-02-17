import React, { useContext, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { Authcontext } from "../../Context/UserContext";
import useClickOutside from "../../Components/helpers/clickOutside";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [reportProduct, setReportProduct] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setReportProduct(false));

  const { user } = useContext(Authcontext);

  // const

  const {
    userName,
    productName,
    productPrice,
    productDescription,
    productImg,
    email,
    userPhotoURL,
    _id,
  } = product;
  // console.log(product);

  // http://localhost:5000/checkCartProduct

  const isProductAddedToCart = (product) => {
    fetch(`http://localhost:5000/checkCartProduct?id=${product?._id}`)
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
      productId: _id,
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
  };

  const handleReport = () => {
    const reportedProduct = {
      sellerName: userName,
      sellerEmail: email,
      sellerImage: userPhotoURL,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productName,
      productImg,
      productPrice,
      productDescription,
      productId: _id,
    };

    fetch("http://localhost:5000/reportproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Product Reported");
          setReportProduct(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="bg-white mx-auto h-[400px] w-[300px] rounded-md mb-5 md:hover:-translate-y-[30px] md:transition md:duration-300">
        <img
          className="mx-auto pt-2 px-2 rounded-md h-[200px] w-full object-cover"
          src={productImg}
          alt=""
        />
        <div className="pl-4 pr-4 pb-4 ">
          <div className="flex items-center justify-between">
            <Link
              to={`/feature/marketplace/product/${_id}`}
              title={productName}
              className="font-bold text-[#FF3F4A] text-lg pt-2"
            >
              {productName.slice(0, 40)}...
            </Link>
            <button onClick={() => setReportProduct(!reportProduct)}>
              <BsThreeDotsVertical className="text-2xl text-black" />
            </button>
            {reportProduct && (
              <div className="bg-[#FF3F4A] hover:bg-[#cc323b] rounded-sm shadow-lg z-[999] absolute ml-48 mt-10">
                <div className="cursor-pointer py-1 px-2 text-white duration-300 rounded-md text-center">
                  <p onClick={handleReport} type="button" className="text-xs">
                    Report
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="text-xs py-1 text-gray-700">Product By {userName}</p>
          <Link
            to={`/feature/marketplace/product/${_id}`}
            className=" text-gray-700"
          >
            {productDescription.slice(0, 35)}...see more
          </Link>
          <div className="relative bottom-0 pt-2 flex justify-between items-center">
            <p className="text-2xl font-bold text-[#FF3F4A]">
              ${productPrice} <span className="text-xs">Only</span>
            </p>
            <button
              onClick={() => {
                isProductAddedToCart(product);
              }}
              className="bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
