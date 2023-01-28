import React from "react";

const TextStoriesContent = ({ setShowTextStories, setTextStoryContent }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <form className="flex flex-col justify-between">
          <textarea
            name="text_story"
            id=""
            placeholder="Add Text"
            onChange={(e) => setTextStoryContent(e.target.value)}
            className="bg-transparent border h-[250px] rounded-md mt-5 p-5 text-lg w-full  resize-none pr-4 dark:text-white text-black placeholder-text-100 transition-all duration-200 outline-none"
            required
          ></textarea>
          <div className="cancel">
            <button className="disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-500 text-center w-full bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#2C2048] dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mt-5">
              Share Your Stories
            </button>
            <button
              className="mb-5 mt-3 disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-500 text-center w-full bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#2C2048] dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => setShowTextStories(false)}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TextStoriesContent;
