import React from "react";
import { useNavigate } from "react-router-dom";
import TextStoriesPreview from "./TextStoriesPreview";

const CreateStories = ({
  setShowTextStories,
  showTextStories,
  textStoryContent,
  showImageStories,
}) => {
  const toggleTextStoriesContent = () => {
    setShowTextStories(true);
  };
  const navigate = useNavigate('')
  const imagePreview = () => {
    navigate('/stories/create/text/')
  }
  return (
    <>
      {showTextStories ? (
        <TextStoriesPreview textStoryContent={textStoryContent} />
      ) : (
        <>
          {showImageStories ? (
            <div className="flex h-[100vh] justify-center items-center gap-5 flex-wrap select-none ">
              <div
                onClick={toggleTextStoriesContent}
                className="flex items-center justify-center w-[180px] h-[250px] rounded-md bg-gradient-to-tr from-cyan-500 via-green-500  to-blue-500 cursor-pointer"
              >
                <h1 className="font-bold text-lg text-center">
                  Create A Text Story
                </h1>
              </div>
              <div className="bg-gradient-to-b  from-yellow-600  via-purple-500 to-blue-500 flex items-center justify-center w-[180px] h-[250px] rounded-md    cursor-pointer">
                <label htmlFor="file" className="font-bold text-lg text-center">
                  Create A Photo Story
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="file"
                  className="hidden"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default CreateStories;
