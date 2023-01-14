import React from "react";
import PostBox from "../PostBox/PostBox";
import stories from "./stories.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Stories = () => {
  return (
    <>
      <div className="mx-auto container shadow-lg bg-white dark:bg-zinc-700 rounded-md p-5 overflow-hidden dark:text-white text-black">
        <h1 className="text-2xl font-bold py-4 pb-3 text-center">Stories</h1>
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
            },
          }}
          keyBoardControl={true}
        >
          {stories.map((story, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="bg-img w-[130px] h-[200px] dark:bg-zinc-800 bg-white rounded-md transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)) , url(${story.userStory})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col justify-between h-full rounded-md p-4">
                    <img
                      src={story.avatar}
                      className="h-12 w-12 rounded-full"
                      alt=""
                    />
                    <p className="text-white">{story.userName}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </Carousel>
      </div>
      <PostBox />
    </>
  );
};

export default Stories;
