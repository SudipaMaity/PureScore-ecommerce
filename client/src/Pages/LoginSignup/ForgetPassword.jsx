import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleForgetPassword } from "../../Store/User/userSlice";

const ForgetPassword = ({ showLogin = () => {} }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForgetPasswordRequest = (e) => {
    e.preventDefault();
    dispatch(handleForgetPassword(formData));
  };

  return (
    <form className="w-full flex flex-col gap-3 font-atype" onSubmit={handleForgetPasswordRequest}>
      <h1 className="text-3xl font-atype font-semibold mb-8 text-center">
        Forget Password
      </h1>
      <label htmlFor="email" className="font-atype font-medium">
        Email
      </label>
      <input
        required
        type="text"
        name="email"
        placeholder="Enter your Email"
        className="w-full rounded-md"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="newPassword" className="font-atype font-medium">
        New Password
      </label>
      <input
        required
        type="password"
        name="newPassword"
        placeholder="Enter your new password"
        className="w-full rounded-md"
        value={formData.newPassword}
        onChange={handleChange}
      />
      <label htmlFor="answer" className="font-atype font-medium">
        What is your favorite sport?
      </label>
      <input
        required
        type="text"
        name="answer"
        placeholder="Enter your answer"
        className="w-full rounded-md"
        value={formData.answer}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="font-atype font-medium bg-[#202E99] px-5 py-2 text-white rounded-md m-auto mt-6"
      >
        Submit
      </button>
      <p className="text-center font-atype mt-2">
        Don't have an account?
        <span
          className="text-primary underline cursor-pointer ml-1"
          onClick={() => showLogin(false)}
        >
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default ForgetPassword;
