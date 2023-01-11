import React, { useEffect, useState } from "react";

const PostBox = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [changePhoto, SetChangePhoto] = useState(false);
  console.log(changePhoto);
  const formSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    const postText = field.postText.value;
    console.log(postText);
    // ================ in future upload photos to imgbb server code in the below just set your ""imagekey""
    // const imageKey = "";
    // const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    // const formData = new FormData();
    // formData.append("image", selectedFile);
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const img = data?.data?.url;
    //
    //   });
    //   }
    field.reset();
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="justify-center outline-1 flex items-center text-white gap-4 p-4 bg-zinc-700 container mx-auto mt-3 rounded-md">
      <div className="">
        {/* image source is hardcode now */}
        <img
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          className="h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="">
        <label
          htmlFor="postModal"
          className="text-lg  font-semibold cursor-pointer bg-zinc-800 px-3 py-3 rounded-full transition-all duration-200  outline-none hover:bg-zinc-900"
        >
          What's on your mind, [userName]?
        </label>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="postModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="postModal"
            className="absolute right-4 top-4 cursor-pointer"
          >
            ✕
          </label>
          <div>
            <div className="text-center text-2xl font-semibold">
              <h1>Create Post</h1>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-3">
              {/* image source is hardcode now */}
              <img
                src="https://avatars.githubusercontent.com/u/94055231?v=4"
                className="h-12 w-12 rounded-full"
                alt=""
              />
              <div className="">
                <p className="text-xl font-medium text-white">Maruf Rahman</p>
              </div>
            </div>
            <div className="divider"></div>
            <form onSubmit={formSubmit}>
              <textarea
                className="bg-transparent text-xl w-full h-[250px]  resize-none pr-4 text-white placeholder-text-100 transition-all duration-200 outline-none"
                name="postText"
                required
                placeholder="Whats's on your mind"
              ></textarea>
              {selectedFile ? (
                <img className="mb-3" src={preview} alt="post images" />
              ) : (
                <>
                  {changePhoto ? (
                    <div className="flex items-center justify-center w-full mb-3 relative">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <label
                             onClick={() => {
                              SetChangePhoto(false);
                            }}
                            className="absolute right-4 top-4 cursor-pointer"
                          >
                            ✕
                          </label>
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG or GIF
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          onChange={onSelectFile}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="mb-2 py-2 px-3 rounded-md flex border items-center justify-between">
                      <button
                        onClick={() => {
                          SetChangePhoto(true);
                        }}
                        className="text-lg font-semibold"
                      >
                        Add To Your Post{" "}
                      </button>
                      <div className="flex items-center ml-2 cursor-pointer">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png"
                          className="w-12 h-12"
                          alt=""
                          onClick={() => {
                            SetChangePhoto(true);
                          }}
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1251/1251333.png"
                          className="w-12 h-12 mx-2"
                          alt=""
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                          className="w-12 h-12"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center space-x-2 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="text-gray-500 text-center w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
