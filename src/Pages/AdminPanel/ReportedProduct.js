import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReportProductDeleteModal from './ReportProductDeleteModal';

const ReportedProduct = () => {

  const [open, setOpen] = useState(false); 
  const [reportedId, setReportedId] = useState('');

    const { data: reportedProducts = [], refetch } = useQuery({
      queryKey: ["reportedProducts"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/reported-product");
        const data = await res.json();
        return data;
      },
    });

    return (
      <>
        <div className="text-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Reported Products</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4 overflow-x-auto">
              <tbody>
                <tr className="border-b text-gray-900">
                  <th className="text-left p-3 px-5">Product Image</th>
                  <th className="text-left p-3 px-5">Product Name</th>
                  <th className="text-left p-3 px-5">Seller Name & Email</th>
                  <th className="text-left p-3 px-5">Reporter Name & Email</th>
                  <th className="text-left p-3 px-5">View</th>
                  <th className="text-left p-3 px-5">Action</th>
                </tr>
                {reportedProducts.map((reportedProduct, index) => {
                  const {
                    sellerName,
                    sellerEmail,
                    buyerName,
                    buyerEmail,
                    productName,
                    productImg,
                    productId,
                    _id
                  } = reportedProduct;
                  return (
                    <>
                      <tr
                        key={index}
                        className="border-b hover:bg-orange-100 text-gray-900"
                      >
                        <td className="p-3 px-5">
                          <div>
                            <img
                              className="w-12 h-12 rounded-md"
                              src={productImg}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="p-3 px-5">
                          <p title={productName} className="">
                            {productName?.slice(0, 20)}...
                          </p>
                        </td>
                        <td className="p-3 px-5 cursor-pointer">
                          <div>
                            <p className="text-base">{sellerName}</p>
                            <p className="text-sm">{sellerEmail}</p>
                          </div>
                        </td>
                        <td className="p-3 px-5 cursor-pointer">
                          <div>
                            <p className="text-base">{buyerName}</p>
                            <p className="text-sm">{buyerEmail}</p>
                          </div>
                        </td>
                        <td className="p-3 px-5">
                          <Link
                            to={`/feature/marketplace/product/${productId}`}
                            type="button"
                            // onClick={() => {
                            //   setOpen(true);
                            //   setProductId(allProduct._id);
                            // }}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            View Product
                          </Link>
                        </td>
                        <td className="p-3 px-5">
                          <button
                            type="button"
                            onClick={() => {
                              setOpen(true);
                              // setProductId(allProduct._id);
                              setReportedId(_id);
                            }}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <DeleteProductModal
          open={open}
          refetch={refetch}
          productId={productId}
          setProductId={setProductId}
          setOpen={setOpen}
        /> */}
        <ReportProductDeleteModal
        open={open}
        setOpen={setOpen}
        reportedId={reportedId}
        setReportedId={setReportedId}
        refetch={refetch}
        />
      </>
    );
};

export default ReportedProduct;