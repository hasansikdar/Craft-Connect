import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import stories from "../../../Pages/Adevertisement/stories.json";

const Advertisement = () => {
  return (
    <div>
      <div className=" w-11/12 p-2 rounded-lg border-zinc-600 shadow-xl  m-auto my-5 text-gray-500 dark:bg-[#261b40]">

        <Carousel
          showArrows={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          {stories.map((story, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="select-none bg-img h-[300px] dark:bg-[#261b40] bg-white rounded-md transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(180deg, rgba(38,27,64,0.33657212885154064) 0%, rgba(11,8,19,1) 100%) , url(${story.userStory})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex justify-end flex-col items-start h-full rounded-md p-4">
                    <p className="text-white text-bold text-xl">{story.userName}</p>
                    <p className="text-white text-left text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing  </p>
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
