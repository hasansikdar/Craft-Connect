import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
          <h3 className="text-2xl font-bold">Register</h3>
          <span>It's quick and easy</span>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <div className="flex gap-2">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input w-full input-bordered bg-gray-100"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input w-full input-bordered bg-gray-100"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered bg-gray-100"
            />
            <input
              name="password"
              type="password"
              placeholder="New Password"
              className="input w-full input-bordered bg-gray-100"
            />
            <DatePicker
              className="input w-full input-bordered bg-gray-100"
              placeholderText="dd / mm / yy"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            ></DatePicker>

            <div className="flex gap-10">
              <span className="flex gap-2 border w-2/5 justify-center rounded shadow">
                <p>Male</p>
                <input type="radio" name="male" id="male" />
              </span>
              <span className="flex gap-2 border w-2/5 justify-center rounded shadow">
                <p>Female</p>
                <input type="radio" name="female" id="female" />
              </span>
              <span className="flex gap-2 border w-2/5 justify-center rounded shadow">
                <p>Other</p>
                <input type="radio" name="other" id="other" />
              </span>
            </div>
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
