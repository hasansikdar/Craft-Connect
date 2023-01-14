import React, { useContext, useState } from "react";
import RegisterModal from "./RegisterModal/RegisterModal";
import Image from "./handicraft1.jpg";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {user, signin} = useContext(Authcontext); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const { handleSubmit, formState: { errors }, register } = useForm();


  const handleLogin = data => {
    setLoading(true);
    signin(data?.email, data?.password)
    .then(res => {
      toast.success('Login Success')
      setLoading(false);
      navigate('/');
    })
    .catch(error => {
      toast.error(error.message);
      setLoading(false);

    })
  }


  return (
    <section
      style={{
        backgroundImage: `linear-gradient(-40deg, 
      rgba(150, 150, 250, 0.40), 
      black) ,url(${Image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 lg:justify-between justify-center mx-auto items-center w-full md:w-[980px] pt-20 pb-72 ">
        <div className="text-center">
          <h2 className="text-4xl text-[#1877f2] font-bold mb-8">
            CRAFT-CONNECT
          </h2>
          <p className="lg:w-[500px] text-2xl leading-[32px]">
            CRAFT-CONNECT helps you connect and share with the people in your
            life.
          </p>
        </div>
        <div>
          <div className="space-y-6 ng-untouched ng-pristine ng-valid bg-white px-5 py-10 rounded-lg">
            <form onClick={handleSubmit(handleLogin)} action="">
              <div className="space-y-1 text-sm">
                <input
                  {...register('email', { required: 'Email Required' })}
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your mail"
                  className="md:w-[364px] px-4 my-2 py-3 rounded-md border bg-gray-100"
                />
                {errors?.email && <span className="text-sm text-red-500">{errors?.email?.message}</span> }
              </div>
              <div className="space-y-1 my-2 text-sm">
                <input
                {...register('password', {required: true})}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full  px-4 py-3 rounded-md border bg-gray-100"
                />
              </div>
              <button className="block mt-5 w-full px-4 leading-[48px] text-center font-bold text-[20px] text-white rounded bg-[#1877f2]">
              {loading ? <p>Loading...</p> : "Sign in"}
              </button>
              <div className="flex justify-center text-xs text-[#1877f2]">
                <a href="/" className="pt-4">Forgot Password?</a>
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
