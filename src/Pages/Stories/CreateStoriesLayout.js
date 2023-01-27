import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CreateStories from "./CreateStories";
import StoriesLeftSideBar from "./StoriesLeftSideBar";

const CreateStoriesLayout = () => {
  const [showTextStories, setShowTextStories] = useState(false);
  const [textStoryContent, setTextStoryContent] = useState("Add Text");
  const [showImageStories, setShowImageStories] = useState(true);
  const [previewImageStories, setPreviewImageStories] = useState("");
  return (
    <div>
      <Navbar />
      <div className="lg:flex h-min-screen">
        <div className="xl:mr-auto lg:w-[300px] mt-[60px]">
          <StoriesLeftSideBar
            setShowImageStories={setShowImageStories}
            showTextStories={showTextStories}
            setTextStoryContent={setTextStoryContent}
            setShowTextStories={setShowTextStories}
          />
        </div>
        <div className="lg:w-[600px] xl:mr-auto mt-[60px]">
          <CreateStories
            setShowTextStories={setShowTextStories}
            showTextStories={showTextStories}
            textStoryContent={textStoryContent}
            showImageStories={showImageStories}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateStoriesLayout;
