import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
const CreatePost = ({ postModal }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [postDisabled, setPostDisabled] = useState();
  const { user } = useContext(Authcontext);
  const [preview, setPreview] = useState([]);
  const [closeUploadPhotoBox, setCloseUploadPhotoBox] = useState(false);
  const handlePostTextChange = (event) => {
    setPostDisabled(event.target.value);
  };
  const handleCrossReset = () => {
    setSelectedFile(undefined);
    setPostDisabled("");
    setCloseUploadPhotoBox(false);
  };
  console.log(user);
  const formSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    const postText = field.postText.value;
    let currentData = new Date();
    const dd = String(currentData.getDate()).padStart(2, "0");
    const mm = String(currentData.getMonth() + 1).padStart(2, "0");
    const yyyy = currentData.getFullYear();
    currentData = mm + "/" + dd + "/" + yyyy;

    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    formData.append("image", selectedFile[0]);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data?.data?.url;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userPhoto = user?.photoURL;
        const usersData = {
          userName,
          userEmail,
          userPhoto,
          currentData,
          postText,
          img,
        };
        fetch("http://localhost:5000/usersPost", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(usersData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged){
              field.reset();
              setPostDisabled("");
              setSelectedFile(undefined);
              toast.success("Successfully add post");
            }
          });
      });
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const selectedFIles = [];
    const targetFilesObject = [...selectedFile];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });

    setPreview(selectedFIles);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(selectedFIles);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
  };
  return (
    <>
      <input type="checkbox" id={postModal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={postModal}
            onClick={handleCrossReset}
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
                className="bg-transparent text-xl w-full h-[190px]  resize-none pr-4 text-white placeholder-text-100 transition-all duration-200 outline-none"
                name="postText"
                placeholder="Whats's on your mind"
                value={postDisabled}
                onChange={handlePostTextChange}
              ></textarea>
              {selectedFile ? (
                <div className="flex flex-wrap gap-4 mb-4">
                  {preview?.map((url) => {
                    return (
                      <div className="indicator">
                        <span
                          className="indicator-item select-none badge badge-secondary cursor-pointer"
                          onClick={() => {
                            console.log(`${url}`);
                            const index = preview.includes(`${url}`);
                            if (index > -1) {
                              preview.splice(index, 1);
                            }
                          }}
                        >
                          ✕
                        </span>
                        <img
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
                          multiple
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="mb-2 py-2 px-3 rounded-md flex border items-center justify-between">
                      <button
                        onClick={() => {
                          setCloseUploadPhotoBox(true);
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
                  )}
                </>
              )}

              <div className="flex items-center space-x-2 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  disabled={!postDisabled && !selectedFile}
                  className="disabled:cursor-not-allowed disabled:bg-gray-100 hover:disabled:bg-gray-300 text-gray-500 text-center w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
