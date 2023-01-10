import React from "react";
import PostBox from "../PostBox/PostBox";

const Stories = () => {
  return (
    <>
      <div className="stories-container container mx-auto bg-zinc-700 rounded-md mt-5 p-5 text-white">
        <h1 className="text-2xl font-bold py-2">Stories</h1>
        <div className="stories">
          <div
            className="bg-img w-[180px] h-[300px] bg-zinc-800 rounded-md hover:scale-[1.02] transition bg-center bg-cover"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)) , url(https://avatars.githubusercontent.com/u/94055231?v=4)",
              "background-position": "center",
              "background-size": "cover",
            }}
          >
            <div className="flex flex-col justify-between h-full rounded-md p-4 cursor-pointer">
              <img
                src="https://avatars.githubusercontent.com/u/94055231?v=4"
                className="h-12 w-12 rounded-full"
                alt=""
              />
              <p>maruf Rahman</p>
            </div>
          </div>
        </div>
      </div>
      <PostBox />
    </>
  );
};

export default Stories;
