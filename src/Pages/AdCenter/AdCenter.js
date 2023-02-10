import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const AdCenter = () => {
  const { data: addvertise = [], refetch } = useQuery({
    queryKey: ["addvertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/advertising-post/"
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24 overflow-y-auto h-screen ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-2xl mx-auto text-center dark:text-white">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">Latest Ads</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-[20px] gap-y-12" z>
            {addvertise.map((advertise) => {
              return <>
                <div className="dark:bg-[#563f8e] bg-[#FF3F4A]  px-3 py-3 rounded-md relative">
                  <Link to={advertise._id} className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-[350px] rounded-md" src={advertise.advertiseBg} alt="" />
                  </Link>
                  <div className="flex py-4 items-center gap-3 ">
                    <img src={advertise.userPhoto} className='w-[50px] h-[50px] rounded-full ' alt="" />
                    <div className="flex flex-col">
                      <span className="font-semibold tracking-widest uppercase rounded-full text-gray-300"> {advertise.userName} </span>
                      <span className="text-xs font-base text-gray-300"> {advertise.userEmail} </span>
                    </div>
                  </div>
                  <Link to={advertise._id} title={advertise.advertiseContent} className="text-gray-100 mt-2 block h-[30px] pb-5 mb-8"> {advertise.advertiseContent.slice(0, 100)}...</Link>
                  <Link to={advertise._id} className="px-4 relative w-full block bottom-0 left-0 py-3 text-xs text-center font-semibold tracking-widest uppercase rounded-lg text-rose-500 bg-rose-100 my-3">Read More </Link>
                </div>
              </>
            })}

          </div>
        </div>
      </section>

    </>
  );
};

export default AdCenter;
