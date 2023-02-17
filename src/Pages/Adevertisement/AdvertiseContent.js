import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Authcontext } from "../../Context/UserContext";

const AdvertiseContent = ({
  setShowAdvertiseText,
  setShowAdvertiseContent,
  onSelectFile,
  setPreview
}) => {
  const { data: advertising = [], refetch } = useQuery({
    queryKey: ["advertising"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/advertising-post/"
      );
      const data = res.json();
      return data;
    },
  });
  const { user, myPro } = useContext(Authcontext);
  const storiesForm = (e) => {
    e.preventDefault();
    const userEmail = user?.email;
    const advertiseContent = e.target.text_story.value;
    const advertiseBg = e.target.advertiseBg.files[0];
    const userPhoto = myPro[0]?.photoURL;
    const userName = user?.displayName;
    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    formData.append("image", advertiseBg);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const field = e.target;
        const advertisephoto = data?.data?.display_url;
        const advertiseObj = { userEmail, advertiseContent, userPhoto, userName, advertiseBg: advertisephoto };
        console.log(advertiseObj)
        fetch('https://craft-connect-server-blond.vercel.app/advertising-post/', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(advertiseObj),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              field.reset();
              toast.success("Advertise your Post");
              setPreview('');
              refetch();
              setShowAdvertiseContent('');
              console.log(data)
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);

          });


      });
  }



  return (
    <>
      <div className="flex flex-col justify-between content-between h-[78vh]">
        <form className="flex flex-col justify-between" onSubmit={storiesForm}>
          <textarea
            name="text_story"
            id=""
            placeholder="Add Text"
            onChange={(e) => setShowAdvertiseContent(e.target.value)}
            className="bg-transparent border h-[250px] rounded-md mt-5 p-5 text-lg w-full  resize-none pr-4 dark:text-white text-black placeholder-text-100 transition-all duration-200 outline-none"
            required
          ></textarea>
          <div className="">
            <input type="file" name="advertiseBg" id="file" className="hidden" onChange={onSelectFile} />
            <label
              htmlFor="file"
              className="text-[#FF3F4A] block text-center w-full bg-[#cc323b] hover:bg-[#cc323b] focus:ring-4 focus:outline-none focus:ring-[#cc323b] rounded-lg border border-[#cc323b] text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#2C2048] dark:text-gray-300 dark:border-[#FF3F4A] dark:hover:text-white dark:hover:bg-gray-600 [#cc323b]:ring-gray-600 mt-5"
            >
              Add Photos
            </label>
            <button
              type="submit"
              className="disabled:cursor-not-allowed disabled:bg-gray-100 text-[#FF3F4A] text-center w-full bg-[#cc323b] hover:bg-[#cc323b] focus:ring-4 focus:outline-none focus:ring-[#cc323b] rounded-lg border border-[#cc323b] text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#2C2048] dark:text-gray-300 dark:border-[#FF3F4A] dark:hover:text-white dark:hover:bg-gray-600 [#cc323b]:ring-gray-600 mt-5"
            >
              Share Your Add
            </button>
          </div>
        </form>
        <button
          className="  text-[#FF3F4A] text-center w-full bg-[#cc323b] hover:bg-[#cc323b] focus:ring-4 focus:outline-none focus:ring-[#cc323b] rounded-lg border border-[#cc323b] text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#2C2048] dark:text-gray-300 dark:border-[#FF3F4A] dark:hover:text-white dark:hover:bg-gray-600 [#cc323b]:ring-gray-600"
          onClick={() => setShowAdvertiseText(false)}
        >
          Discard
        </button>
      </div>
    </>
  );
};

export default AdvertiseContent;
