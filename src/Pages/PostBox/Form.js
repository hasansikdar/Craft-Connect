import React from "react";

const Form = ({
  closeUploadPhotoBox,
  setOpen,
  postDisabled,
  selectedFile,
  onSelectFile,
  formSubmit,
  setCloseUploadPhotoBox,
  handlePostTextChange,
  preview,
  uploadImg
}) => {
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className=" overflow-y-scroll max-h-[250px] bg-gray-100 dark:bg-zinc-700 p-2 rounded mb-2">
          <textarea
            className="bg-transparent text-xl w-full  resize-none pr-4 dark:text-white text-black placeholder-text-100 transition-all duration-200 outline-none"
            name="postText"
            rows={5}
            placeholder="Whats's on your mind"
            value={postDisabled}
            onChange={e => handlePostTextChange(e.target.value)}
          ></textarea>
          {selectedFile ? (
            <div className="flex flex-wrap gap-4 mb-4">
              {preview?.map((url) => {
                return (
                  <div className="indicator">
                    <span
                      className="indicator-item select-none badge badge-secondary cursor-pointer"
                      onClick={() => {
                        const index = preview.includes(`${url}`);
                        if (index > -1) {
                          preview.splice(index, 1);
                        }
                      }}
                    >
                      ✕
                    </span>
                    <img
                      accept="image/*"
                      src={url}
                      className="w-52 rounded-md object-cover"
                      alt="post"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {closeUploadPhotoBox ? (
                <div className="flex items-center justify-center w-full mb-3 relative">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <label
                        onClick={() => {
                          setCloseUploadPhotoBox(false);
                        }}
                        className="absolute right-4 top-4 cursor-pointer"
                      >
                        ✕
                      </label>
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-600"
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
                        <span className="font-semibold">Click to upload</span>{" "}
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
                      multiple
                    />
                  </label>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
        <div className="mb-2 py-2 px-3 rounded-md flex border items-center justify-between">
          <button
            className="text-black dark:text-white text-lg font-semibold"
          >
            Add To Your Post{" "}
          </button>
          <div className="flex items-center ml-2 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png"
              className="w-12 h-12"
              alt=""
              onClick={() => {
                setCloseUploadPhotoBox(true);
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
        <div className="flex items-center space-x-2 rounded-b dark:border-gray-600">
          <button
            type="submit"
            disabled={!postDisabled && uploadImg && !selectedFile}
            onClick={() => {
              setOpen(false);
            }}
            className="disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-500 text-center w-full bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
