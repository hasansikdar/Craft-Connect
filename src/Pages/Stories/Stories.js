import React from "react";
import PostBox from "../PostBox/PostBox";
import stories from "./stories.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./stories.css";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const navigate = useNavigate();
  const CreateStories = () => {
    navigate("/stories/create");
  };
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
          slidesToSlide={2}
        >
          <div
            onClick={CreateStories}
            className="select-none cursor-pointer flex items-end w-[130px] h-[200px] rounded-md transition"
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('https://avatars.githubusercontent.com/u/94055231?v=4')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex items-end bg-zinc-600 relative h-[48px] rounded-md flex flex-col w-full items-center mx-auto ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                className="absolute bottom-[35px]  w-[30px] h-[30px] ring-zinc-600 ring-4 rounded-full"
                alt=""
              />
              <h1 className="mt-[15px]">Create Story</h1>
            </div>
          </div>
          {stories.map((story, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="select-none bg-img w-[130px] h-[200px] dark:bg-zinc-800 bg-white rounded-md transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)) , url(${story.userStory})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col justify-between h-full rounded-md p-4">
                    <img
                      src={story.avatar}
                      className="h-12 w-12 rounded-full object-cover"
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
