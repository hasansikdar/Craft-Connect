import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReportedPostDeletedModal from './ReportedPostDeletedModal';

const ReportedPost = () => {

  const [open, setOpen] = useState(false);
  const [reportedPostId, setReportedPostId] = useState('');

    const { data: reportedPosts = [], refetch } = useQuery({
      queryKey: ["reportedProducts"],
      queryFn: async () => {
        const res = await fetch("https://craft-connect-server-blond.vercel.app/reported-post");
        const data = await res.json();
        return data;
      },
    });

    // console.log(reportedPosts);

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
                  <th className="text-left p-3 px-5">Post Image</th>
                  <th className="text-left p-3 px-5">Post Text</th>
                  <th className="text-left p-3 px-5">Post author Name & Email</th>
                  <th className="text-left p-3 px-5">Reporter Name & Email</th>
                  <th className="text-left p-3 px-5">Product</th>
                  <th className="text-left p-3 px-5">Action</th>
                </tr>
                {reportedPosts.map((reportedProduct, index) => {
                  const {
                    postAuthor,
                    postAuthorEmail,
                    postAuthorImg,
                    postImg,
                    postText,
                    reporterName,
                    reporterEmail,
                    reporterImage,
                    _id,
                    postId
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
                              src={postImg}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="p-3 px-5">
                          <p title={postText} className="">
                            {postText?.slice(0, 20)}...
                          </p>
                        </td>
                        <td className="p-3 px-5 cursor-pointer">
                          <div>
                            <p className="text-base">{postAuthor}</p>
                            <p className="text-sm">{postAuthorEmail}</p>
                          </div>
                        </td>
                        <td className="p-3 px-5 cursor-pointer">
                          <div>
                            <p className="text-base">{reporterName}</p>
                            <p className="text-sm">{reporterEmail}</p>
                          </div>
                        </td>
                        <td className="p-3 px-5">
                          <Link
                            to={`/postDetails/${postId}`}
                            type="button"
                            // onClick={() => {
                            //   setOpen(true);
                            //   setProductId(allProduct._id);
                            // }}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            View Post
                          </Link>
                        </td>
                        <td className="p-3 px-5">
                          <button
                            type="button"
                            onClick={() => {
                              setOpen(true);
                              setReportedPostId(_id);
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
        <ReportedPostDeletedModal
        open={open}
        setOpen={setOpen}
        reportedPostId={reportedPostId}
        setReportedPostId={setReportedPostId}
        refetch={refetch}
        />
      </>
    );
};

export default ReportedPost;