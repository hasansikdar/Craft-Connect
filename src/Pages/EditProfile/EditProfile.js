import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Authcontext } from "../../Context/UserContext";
import Loading from "../../Shared/Loading/Loading";

const EditProfile = () => {
  const { user, updateuserdata, refetch } = useContext(Authcontext);
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState(user?.displayName);
  const [updateProfileImage, setUpdateProfileImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    setLoading(true);
    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    formData.append("image", updateProfileImage);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageLink = data?.data?.display_url;
        const userInfo = {
          displayName: updateName,
          photoURL: imageLink,
        };
        updateuserdata(userInfo)
          .then((res) => {
            toast.success("Profile Updated");
            setEdit(false);
            setLoading(false);
            refetch();
            navigate("/editprofile");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      });

    fetch();
  };

  return (
    <div className="py-5 ">
      <h1 className="text-3xl text-center mt-5 text-[#FF3F4A] font-semibold">
        Edit Profile
      </h1>

      <div className="profileInfo p-3 mt-10 rounded text-center border border-white shadow h-[400px] overflow-scroll bg-gray-100 dark:bg-[#23124b] mx-2 text-black dark:text-white">
        <div className="text-right">
          <button
            onClick={() => setEdit(true)}
            className="btn btn-sm bg-[#FF3F4A] hover:bg-[#cb1f28] dark:text-white text-black hover:text-white"
          >
            Edit
          </button>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div>
            <div className="profile">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
              />
            </div>
            {edit ? (
              <div>
                <input
                  onChange={(e) => setUpdateName(e.target.value)}
                  className="input input-sm mb-3"
                  defaultValue={user?.displayName}
                  type="text"
                />
                <br></br>
                <input
                  accept="image/*"
                  onChange={(e) => setUpdateProfileImage(e.target.files[0])}
                  type="file"
                  className="file-input file-input-sm file-input-bordered my-4 max-w-xs"
                />
                <br></br>
                <button
                  onClick={handleUpdateProfile}
                  className="btn btn-sm m-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEdit(false)}
                  className="btn btn-sm m-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <h1 className="text-2xl text-[#FF3F4A] font-bold">
                {user?.displayName}
              </h1>
            )}
            <div className="othersProfileInfo mb-10 mt-4 bg-white dark:bg-[#341a70] lg:mx-[40%] rounded py-2">
              <h3>
                Email: <span className="text-blue-500">{user?.email}</span>
              </h3>
              <h3>Brithday Date: 14/10/2002</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
