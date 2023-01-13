import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../../Context/UserContext";

const RegisterModal = () => {
  const {user, createaccount} = useContext(Authcontext);
  const [selectedDate, setSelectedDate] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleCreateAccount = data => {
    
    createaccount(data?.email, data?.password)
    .then(res => {
      console.log(res.user);
    })
    .catch(error => {
      console.log(error)
    })
  }


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
          <form onSubmit={handleSubmit(handleCreateAccount)} className="grid grid-cols-1 gap-3 mt-10">
            <div className="flex gap-2">
              <div>
                <input
                  {...register('firstName', { required: 'First name is rquired' })}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="input w-full input-bordered bg-gray-100"
                /><br></br>
                {errors.firstName && <span className="text-sm text-red-500 mt-2">{errors?.firstName?.message}</span>}
              </div>
              <div>
                <input
                  {...register('lastName', { required: 'Last name is rquired' })}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input w-full input-bordered bg-gray-100"
                /><br></br>
                {errors.lastName && <span className="text-sm text-red-500 mt-2">{errors?.lastName?.message}</span>}
              </div>
            </div>
            <input
              name="email"
              {...register('email', { required: 'email is required' })}
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered bg-gray-100"
            />
            {errors.email && <span className="text-sm text-red-500">{errors?.email?.message}</span>}
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password Must be 8 Charecter' },
                maxLength: { value: 12, message: 'Password Maximum 12 Charecter' },
                pattern: { value: /[.*+?^${}()|[\]\\]/g, message: 'Password Must Be Strong, $' }
              })}
              name="password"
              type="password"
              placeholder="New Password"
              className="input w-full input-bordered bg-gray-100"
            />
            {errors.password && <span className="text-sm text-red-500">{errors?.password?.message}</span>}
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
            <select {...register('gender')} className="select bg-white">
              <option selected value='male' className="">Male</option>
              <option value='female'>
                Female
              </option>
              <option value='others'>
                Others
              </option>
            </select>
            <button
              className="bg-[#00a400] hover:bg-[#057205] mx-auto border-0 px-8 text-xl h-[36px] font-bold text-white rounded my-2 min-w-[194px] text-center w-2/5">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
