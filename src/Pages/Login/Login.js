import React from "react";
import RegisterModal from "./RegisterModal/RegisterModal";

const Login = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-20 lg:justify-between justify-center mx-auto items-center w-full md:w-[980px] pt-20 pb-72 ">
        <div className="text-center">
          <h2 className="text-4xl text-[#1877f2] font-bold mb-8">
            CRAFT-CONNECT
          </h2>
          <p className="w-[500px] text-2xl leading-[32px]">
            CRAFT-CONNECT helps you connect and share with the people in your
            life.
          </p>
        </div>
        <div>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid bg-white p-5 rounded-lg">
            <div className="space-y-1 text-sm">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
                required
                className="md:w-[364px] px-4 py-3 rounded-md border "
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full  px-4 py-3 rounded-md border "
              />
            </div>
            <button className="block w-full px-4 leading-[48px] text-center font-bold text-[20px] text-white rounded bg-[#1877f2]">
              Sign in
            </button>
            <div className="flex justify-center text-xs text-[#1877f2]">
              <a href="/">Forgot Password?</a>
            </div>

            <hr />
            <div className="flex justify-center items-center">
              <label
                htmlFor="register-modal"
                className="btn px-4 bg-[#42b72a] hover:bg-[#1e8609] text-white text-[17px] rounded leading-[48px] font-bold border-0"
              >
                Create New Account
              </label>
            </div>
          </form>
        </div>
      </div>
      <RegisterModal></RegisterModal>
    </section>
  );
};

export default Login;