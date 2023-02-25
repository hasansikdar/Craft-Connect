import React from "react";
import { Link } from "react-router-dom";

const Message = ({
  currentfrnd,
  inputHandle,
  newMessage,
  // sendImage,
  sendMessage,
  getMessage,
  myPro,
  scrollRef,
  emojiHnadler,
  handleKeyDown
}) => {
  const { photoURL, displayName } = currentfrnd;
 
  const emojis = [
    "😨",
    "🤔",
    "😕",
    "😬",
    "😊",
    "😳",
    "😲",
    "😟",
    "😒",
    "😞",
    "🤣",
    "🔫",
    "🤮",
    "😋",
    "😭",
    "😢",
    "👍",
    "😣",
    "🤣",
    "😈",
    "😠",
    "❤️",
    "💘",
    "💕",
    "💖",
    "😀",
    "😎",
    "😉",
  ];
  return (
    <div>
      <div className="flex flex-col h-screen w-full  bg-[#2A2A2A] px-4  py-6">
        <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow bg-[#3F3F3F] text-white">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={photoURL} alt="img" />
            </div>
          </div>

          <div className="flex flex-col ml-3">
            <div className="font-semibold text-sm">{displayName}</div>
            <div className="text-xs text-gray-300">Active</div>
          </div>

        </div>
        <div className="h-full overflow-hidden py-4">
          <div className="h-[520px] overflow-y-auto">
            <div className="grid grid-cols-12 gap-y-2">

              {getMessage && getMessage.length > 0
                ? getMessage.map((m) =>
                  m.senderId === myPro[0]?._id ? (
                    <div ref={scrollRef} className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        {/* <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#ff505a] flex-shrink-0">
                            me
                          </div> */}
                        <div className="relative mr-3 text-sm bg-[#3F3F3F] py-2 px-4 shadow rounded-xl">
                          <div className="text-white">{m?.message}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div ref={scrollRef} className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <img
                          src={photoURL}
                          alt="img"
                          className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                        ></img>
                        <div className="relative ml-3 text-sm text-white bg-[#3F3F3F] py-2 px-4 shadow rounded-xl">
                          <div>{m.message}</div>
                        </div>
                      </div>
                    </div>
                  )
                )
                : ""}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center w-full rounded-3xl h-12 px-2 bg-[#3F3F3F]">

            {/* input field */}
            <div className="w-full ml-5" >
              <input
                onChange={inputHandle}
                type="text"
                value={newMessage}
                onKeyDown={handleKeyDown}
                className="bg-[#3F3F3F] text-white w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Type your message...."
              />
            </div>
            <div className="flex flex-row items-center mr-5">
              {/*send img */}
              <label className="cursor-pointer" htmlFor="image-input">
                <svg
                  className="w-5 h-5 text-white mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>

                <input
                  type="file"
                  accept="image/*"
                  // onChange={sendImage}
                  className="hidden"
                  id="image-input"
                />
              </label>
              {/* add emoji */}
              <div className="dropdown dropdown-left dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  😀
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu grid grid-cols-6 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {emojis?.map((e) => (
                    <span
                      className="cursor-pointer"
                      onClick={() => emojiHnadler(e)}
                    >
                      {e}
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-4">
            <button
              onClick={sendMessage}
              disabled={!sendMessage}
              className="flex items-center justify-center h-10 w-10 rounded-full  bg-[#3F3F3F] hover:bg-[#3f3f3fa8] text-white "
            >
              <svg
                className="w-5 h-5 transform rotate-90 -mr-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;