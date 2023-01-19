import React from "react";

const CreateStories = () => {
  return (
    <>
      <div className="flex h-full justify-center items-center gap-5 flex-wrap select-none ">
        <div className="bg-gradient-to-b  from-yellow-600  via-purple-500 to-blue-500 flex items-center justify-center w-[180px] h-[250px] rounded-md    cursor-pointer">
          <h1>Create A Photo Story</h1>
        </div>
        <div className="flex items-center justify-center w-[180px] h-[250px] rounded-md bg-gradient-to-tr from-cyan-500 via-green-500  to-blue-500 cursor-pointer">
          <h1>Create A Text Story</h1>
        </div>
      </div>
    </>
  );
};

export default CreateStories;
