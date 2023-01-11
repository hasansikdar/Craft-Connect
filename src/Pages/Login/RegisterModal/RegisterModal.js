import React from "react";

const RegisterModal = () => {
  return (
    <>
      <input type="checkbox" id="register-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="register-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
