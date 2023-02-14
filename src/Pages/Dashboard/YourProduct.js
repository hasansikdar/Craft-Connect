import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context/UserContext';
import DeleteProductModal from './DeleteProductModal';

const YourProduct = () => {
    const [open, setOpen] = useState(false)

    const [productId, setProductId] = useState();

    const { user } = useContext(Authcontext);
    const url = `http://localhost:5000/allproducts?email=${user?.email}`;
    const { data: allProduct = [], refetch } = useQuery({
        queryKey: ["allProduct", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        },
    });


    return (
        <>
            <div className="text-gray-200">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Yours Product
                    </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full  bg-white shadow-md mb-4 overflow-x-auto">
                        <tbody className='rounded-md'>
                            <tr className="border-b text-gray-900">
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Index</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Image</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Info</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Price</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                            </tr>
                            {allProduct.map((allProduct, index) => {
                                const { productName, productPrice, productImg, productDescription } = allProduct;
                                return <>
                                    <tr key={index} className="border-b hover:bg-orange-100 text-gray-900">
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className='pl-3 whitespace-no-wrap'>{index + 1}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div>
                                                <img className='w-12 h-12 rounded-md' src={productImg} alt="" />
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                            <div className='w-screen md:w-full'>
                                                <p className='text-gray-900'>{productName.slice(0, 25)}...</p>
                                                <p className='text-sm text-gray-700'>{productDescription.slice(0, 50)}...</p>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className='pl-3'>${productPrice}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button type="button" onClick={() => { setOpen(true); setProductId(allProduct._id) }} className="bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-red-900 leading-tight">Delete</button>
                                        </td>
                                    </tr>
                                </>
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteProductModal open={open} refetch={refetch} productId={productId} setProductId={setProductId} setOpen={setOpen} />
        </>
    );
};

export default YourProduct;
