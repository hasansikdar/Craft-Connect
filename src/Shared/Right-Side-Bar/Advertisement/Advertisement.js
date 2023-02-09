import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import stories from "../../../Pages/Adevertisement/stories.json";

const Advertisement = () => {
  const { data: advertising = [], refetch } = useQuery({
    queryKey: ["advertising"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/advertising-post/"
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="">
      <div className=" w-11/12 p-2 rounded-lg border-zinc-600 shadow-xl mb-5 text-gray-500 bg-white dark:bg-[#261b40] m-auto ">
        <Carousel
          showArrows={false}
          showIndicators={false}
          stopOnHover={true}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          {advertising.map((advertise, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="select-none bg-img h-[300px] dark:bg-[#261b40] bg-white rounded-md transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(180deg, rgba(38,27,64,0.33657212885154064) 0%, rgba(11,8,19,1) 100%) , url(${advertise.advertiseBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex justify-end flex-col items-start h-full rounded-md p-4">
                    <p className="text-white text-bold text-xl">{advertise.userName}</p>
                    <p className="text-white text-left text-sm">{advertise.advertiseContent.slice(0, 50)} <Link className=" hover:underline" to={`/feature/adcenter/${advertise._id}`}>See More</Link>  </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
