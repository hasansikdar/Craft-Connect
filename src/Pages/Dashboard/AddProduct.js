import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Context/UserContext';

const AddProduct = () => {
    const { user, myPro } = useContext(Authcontext)
    const url = `http://localhost:5000/allproducts`;
    const { data: allProduct = [], refetch } = useQuery({
        queryKey: ["allProduct"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        },
    });
    const formSubmit = (e) => {
        e.preventDefault();
        const field = e.target;
        const productName = field.productName.value;
        const userName = user?.displayName;
        const userPhotoURL = myPro[0]?.photoURL;
        const productPrice = field.productPrice.value;
        const email = field.email.value;
        const productImg = field.productImg.files[0];
        const productDescription = field.descriptionProduct.value;
        const imageKey = "024d2a09e27feff54122f51afddbdfaf";
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
        const formData = new FormData();
        formData.append("image", productImg);
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                const img = data?.data?.display_url;
                const productObj = { userName, userPhotoURL, productName, productPrice, email, productImg: img, productDescription };

                fetch("http://localhost:5000/allProduct", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(productObj),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            toast.success("Product Add Success");
                            field.reset();
                            refetch();
                        }
                    });
            });

    }
    return (
        <section>
            <div className="my-10 mx-auto">
                <h1 className='text-center text-3xl md:text-3xl'>Add Your Product</h1>
                <p className='text-center my-2 text-gray-400 '>Please make sure your all the content are valid try to  add valid product <br /> not harmful or disgusting product </p>
            </div>

            <form onSubmit={formSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="product_name" className="block mb-2 text-sm font-medium  text-white">Product Name</label>
                        <input type="text" id="product_name" name='productName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Product Name" required />
                    </div>
                    <div>
                        <label for="product_price" className="block mb-2 text-sm font-medium  text-white">Product Price</label>
                        <input type="number" id="product_price" name='productPrice' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Product Price" required />
                    </div>
                    <div>
                        <label for="product_img" className="block mb-2 text-sm font-medium  text-white">Choose Image For Your Product</label>
                        {/* <input type="file" id="prodcut_img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Flowbite" required />  */}
                        <label className="block">
                            <span className="sr-only">Choose File</span>
                            <input name='productImg' type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </label>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium  text-white">Email address</label>
                        <input type="email" name='email' id="email" value={user?.email} disabled className="bg-gray-50 border select-none disabled:opacity-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="description_product" className="block mb-2 text-sm font-medium  text-white">Enter Description Your Product</label>
                    <textarea type="text" name='descriptionProduct' id="description_product" className="bg-gray-50 border outline-none min-h-[160px] resize-none overflow-y-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Product Description" required />
                </div>
                <button type="submit" className="text-white outline-none bg-[#261b40]  focus:ring-4 focus:outline-none focus:ring-[#FF3F4A] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-[#FF3F4A]">Submit</button>
            </form>

        </section>
    );
};

export default AddProduct;