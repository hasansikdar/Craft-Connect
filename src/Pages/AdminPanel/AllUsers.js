import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {

    const { data: allusers = [] } = useQuery({
      queryKey: ["allusers"],
      queryFn: async () => {
        const res = await fetch(
          "https://craft-connect-server-blond.vercel.app/allusers"
        );
        const data = await res.json();
        return data;
      },
    });

    return (
      <>
        <div className="text-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Yours Product</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4 overflow-x-auto">
              <tbody>
                <tr className="border-b text-gray-900">
                  <th className="text-left p-3 px-5">User Image</th>
                  <th className="text-left p-3 px-5">User Name & Email</th>
                  <th className="text-left p-3 px-5">Account Password</th>
                  <th className="text-left p-3 px-5">View</th>
                </tr>
                {allusers.map((allUser, index) => {
                  const {
                    displayName,
                    email,
                    photoURL,
                    password
                  } = allUser;
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
                              src={photoURL}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="p-3 px-5 cursor-pointer">
                          <div>
                            <p className="text-base">{displayName}</p>
                            <p className="text-sm">{email}</p>
                          </div>
                        </td>
                        <td className="p-3 px-5">
                          <p className="">{password}</p>
                        </td>
                        <td className="p-3 px-5">
                          <Link
                            to={`/user/${email}`}
                            type="button"
                            // onClick={() => {
                            //   setOpen(true);
                            //   setProductId(allProduct._id);
                            // }}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            View Profile
                          </Link>
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
      </>
    );
};

export default AllUsers;