import React, { useContext, useState } from "react";
import RegisterModal from "./RegisterModal/RegisterModal";
import Image from "./handicraft1.jpg";
import CoverImage from "./cool.png";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGoogle } from "react-icons/bs";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { user, signin, googleProviderSignIn } = useContext(Authcontext);
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const handleLogin = (data) => {
    setLoading(true);
    signin(data?.email, data?.password)
      .then((res) => {
        toast.success("Login Success");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handelGoogleSignIn = () => {
    googleProviderSignIn(provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        // navigate("/");
        // toast.success('Log in Successful')
        saveUserToDB(user.displayName, user.email, user.photoURL)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  //add to db
  const saveUserToDB = (userName, userEmail, photoURL) => {

    const userInfo = {
      displayName: userName,
      email: userEmail,
      password: null,
      photoURL: photoURL,
    };
    console.log(userInfo);

    fetch('https://craft-connect-server-blond.vercel.app/users', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigate("/");
        // toast.success('Log in Successful')
      })
  }
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(84deg, rgba(255,63,74,0.3981967787114846) 0%, rgba(51,13,15,0.5746673669467788) 100%) ,url(${Image})`,
        backgroundSize: "cover",
      }}
      className='h-screen'
    >
      <div className="flex flex-col h-screen lg:flex-row gap-20 lg:justify-between justify-center mx-auto items-center w-full md:w-[980px] pt-20 pb-72 ">
        <div className="text-center">
          <h2 className="text-4xl text-white font-bold mb-8">CRAFT-CONNECT</h2>
          <p className="lg:w-[500px] text-2xl leading-[32px]">
            CRAFT-CONNECT helps you connect and share with the people in your
            life.
          </p>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${CoverImage})`,
              backgroundSize: "cover",
            }}
            className="space-y-6 ng-untouched ng-pristine ng-valid bg-white px-5 py-10 rounded-lg"
          >
            <form onClick={handleSubmit(handleLogin)} action="">
              <div className="space-y-1 text-sm">
                <input
                  {...register("email", { required: "Email Required" })}
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your mail"
                  className="md:w-[364px] px-4 my-2 py-3 rounded-md border bg-gray-100"
                />
                {errors?.email && (
                  <span className="text-sm text-red-500">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div className="space-y-1 my-2 text-sm">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full  px-4 py-3 rounded-md border bg-gray-100"
                />
              </div>
              <button className="block mt-5 w-full px-4 leading-[48px] text-center font-bold text-[20px] text-white rounded bg-[#FF3F4A]">
                {loading ? <p>Loading...</p> : "Sign in"}
              </button>
              <div>
                <div className="flex justify-center items-center w-full my-3">
                  <p className="px-3 text-white">OR</p>
                </div>
                <div>
                  <button onClick={handelGoogleSignIn} className="flex justify-center items-center w-full px-4 leading-[48px] text-center font-bold text-[20px] text-white rounded bg-[#FF3F4A]">
                    <BsGoogle className='text-xl mr-3'></BsGoogle><p>Sign in with Google</p></button>
                </div>
              </div>
              <div className="flex justify-center text-xs text-[#FFF]">
                <a href="/" className="pt-4">
                  Forgot Password?
                </a>
              </div>
            </form>
            <hr />
            <div className="flex justify-center items-center ">
              <label
                htmlFor="register-modal"
                className=" cursor-pointer btn px-4 bg-[#42b72a] hover:bg-[#1e8609] text-white text-[17px] rounded leading-[48px] font-bold border-0"
              >
                Create New Account
              </label>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal></RegisterModal>
    </section>
  );
};

export default Login;
