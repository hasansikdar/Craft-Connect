import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-wrap-reverse lg:justify-between mx-auto items-center w-[980px] py-5 ">
        <div>
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
                className="w-[364px] px-4 py-3 rounded-md border "
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-[364px] px-4 py-3 rounded-md border "
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
              <button className="px-4 bg-[#42b72a] text-white text-[17px] rounded leading-[48px] font-bold">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
