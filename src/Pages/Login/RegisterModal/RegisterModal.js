import React from "react";

const RegisterModal = () => {
  return (
    <>
      <input type="checkbox" id="register-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white text-black">
          <label
            htmlFor="register-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gray-200 text-black border-0 font-extrabold hover:bg-gray-200"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Register</h3>
          <span>It's quick and easy</span>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered bg-gray-100"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered bg-gray-100"
            />
            <span className="flex justify-center">
              <input
                className="bg-[#00a400] hover:bg-[#057205] border-0 px-8 text-xl h-[36px] font-bold text-white rounded my-2 min-w-[194px] text-center w-2/5"
                type="submit"
                value="Register"
              />
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
