import React, { useEffect, useRef, useState } from "react";
import PostBox from "../PostBox/PostBox";
import stories from "./stories.json";
import { motion } from "framer-motion";
const Stories = () => {
  const [width, setWidth] = useState();
  const storyWidth = useRef();
  useEffect(() => {
    setWidth(storyWidth.current.scrollWidth - storyWidth.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div className="mx-auto container  bg-zinc-700 rounded-md mt-5 p-5 overflow-hidden text-white w-[50%]">
        <h1 className="text-2xl font-bold py-4 pb-3 text-center ">Stories</h1>
        <motion.div
          drag="x"
          ref={storyWidth}
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{cursor: 'grabbing'}}
          className="stories flex gap-3 cursor-grab"
        >
          {stories.map((sto) => {
            return (
              <>
                <motion.div
                  className="bg-img min-w-[180px] h-[300px] bg-zinc-800 rounded-md transition bg-center bg-cover"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)) , url(${sto.userStory})`,
                    "background-position": "center",
                    "background-size": "cover",
                  }}
                >
                  <motion.div className="flex flex-col justify-between h-full rounded-md p-4">
                    <img
                      src={sto.avatar}
                      className="h-12 w-12 rounded-full"
                      alt=""
                    />
                    <p>{sto.userName}</p>
                  </motion.div>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </motion.div>
      <PostBox />
    </>
  );
};

export default Stories;
