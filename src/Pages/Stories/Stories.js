import React from "react";
import PostBox from "../PostBox/PostBox";
import stories from "./stories.json";
const Stories = () => {
  return (
    <>
      <div className="stories-container container mx-auto bg-zinc-700 rounded-md mt-5 p-5 text-white">
        <h1 className="text-2xl font-bold py-2 mx-auto">Stories</h1>
        <div className="stories flex gap-3 justify-center overflow-x-auto">
          {stories.map((sto) => {
            return (
              <>
                <div
                  className="bg-img w-[180px] h-[300px] bg-zinc-800 rounded-md hover:scale-[1.02] transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)) , url(${sto.userStory})`,
                    "background-position": "center",
                    "background-size": "cover",
                  }}
                >
                  <div className="flex flex-col justify-between h-full rounded-md p-4 cursor-pointer">
                    <img
                      src={sto.avatar}
                      className="h-12 w-12 rounded-full"
                      alt=""
                    />
                    <p>{sto.userName}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <PostBox />
    </>
  );
};

export default Stories;
