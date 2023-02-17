import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Authcontext } from "../../../Context/UserContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../../firebase/firebase.Config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterModal = () => {
  const { createaccount, updateUserProfile } = useContext(Authcontext);
  const [err, setErr] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [userProfile, setUserProfile] = useState();
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const followers = [];
  const following = [];
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleCreateAccount = async (data, event) => {
    event.preventDefault();

    setLoading(true);
    const fullName = data?.firstName + " " + data?.lastName;
    const email = data?.email;
    const password = data?.password;
    const userImgs = event.target.userImg?.files[0];
    // console.log(fullName);

    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    // if (selectedFile) {
    formData.append("image", userImgs);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // const img = data?.data?.display_url;
        // updateuserdata(fullName, img);
        // setUserProfile(img);
        console.log(data.data.display_url);
        createaccount(email, password).then((result) => {
          const user = result.user;
          console.log(user);
          updateUserProfile(fullName, data?.data?.display_url)
            // console.log(fullName, data.data.display_url);
            .then((result) => {
              console.log(result);
              navigate("/");

              const userInfo = {
                displayName: fullName,
                email,
                password,
                photoURL: data?.data?.display_url,
                followers,
                following,
              };
              console.log(userInfo);

              fetch("https://craft-connect-server-blond.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userInfo),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.acknowledged) {
                    toast.success("User Created Success");
                    setLoading(false);
                  }
                });
            });
        });
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="checkbox" id="register-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white text-black">
          <label
            htmlFor="register-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gray-200 text-black border-0 font-extrabold hover:bg-gray-200"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Register</h3>
          <span>It's quick and easy</span>
          <form
            onSubmit={handleSubmit(handleCreateAccount)}
            className="grid grid-cols-1 gap-3 mt-3"
          >
            <div className="flex justify-center flex-col items-center gap-3">
              <img
                src={
                  preview
                    ? preview
                    : "https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/5/2022/12/01181857/blankprovider-e1669918775597.jpg"
                }
                className="w-[115px] h-[115px] rounded-full object-cover"
                alt=""
              />
              <input
                name="userImg"
                type="file"
                className="hidden"
                id="uploadPhoto"
              />
              <label
                htmlFor="uploadPhoto"
                className="mb-3 bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded-full"
              >
                Upload Photo
              </label>
            </div>
            <div className="flex gap-2">
              <div>
                <input
                  {...register("firstName", {
                    required: "First name is rquired",
                  })}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="input w-full input-bordered bg-gray-100"
                />
                <br></br>
                {errors.firstName && (
                  <span className="text-sm text-red-500 mt-2">
                    {errors?.firstName?.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("lastName", {
                    required: "Last name is rquired",
                  })}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input w-full input-bordered bg-gray-100"
                />
                <br></br>
                {errors.lastName && (
                  <span className="text-sm text-red-500 mt-2">
                    {errors?.lastName?.message}
                  </span>
                )}
              </div>
            </div>
            <input
              name="email"
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered bg-gray-100"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors?.email?.message}
              </span>
            )}
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password Must be 8 Charecter",
                },
                maxLength: {
                  value: 12,
                  message: "Password Maximum 12 Charecter",
                },
                pattern: {
                  value: /[.*+?^${}()|[\]\\]/g,
                  message: "Password Must Be Strong, $",
                },
              })}
              name="password"
              type="password"
              placeholder="New Password"
              className="input w-full input-bordered bg-gray-100"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors?.password?.message}
              </span>
            )}
            <DatePicker
              className="input w-full input-bordered bg-gray-100"
              placeholderText="Date of Birth"
              selected={selectedDate}
              required
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            ></DatePicker>
            <select {...register("gender")} className="select bg-white">
              <option selected value="male" className="">
                Male
              </option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <button
              disabled={loading}
              className={`bg-[#00a400] ${
                loading && "cursor-not-allowed"
              } hover:bg-[#057205] mx-auto border-0 px-8 text-xl h-[36px] font-bold text-white rounded my-2 min-w-[194px] text-center w-2/5`}
            >
              {loading ? <p>Loading...</p> : "Register"}
            </button>
            {err && <span>Something went wrong</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
