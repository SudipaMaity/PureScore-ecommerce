import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSignup } from "../../Store/User/userSlice";

const Signup = ({ showLogin = () => {} }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignupRequest = (e) => {
    e.preventDefault();
    dispatch(handleSignup(formData));
  };

  return (
    <form
      className="w-full flex flex-col gap-3 font-atype"
      onSubmit={handleSignupRequest}
    >
      <h1 className="text-3xl font-atype font-semibold mb-8 text-center">
        Sign up
      </h1>
      <label htmlFor="name" className="font-atype font-medium">
        Full Name
      </label>
      <input
        required
        type="text"
        name="name"
        placeholder="Enter your full name"
        className="w-full rounded-md"
        value={formData.name}
        onChange={handleChange}
      />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="font-atype font-medium">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            className="w-full rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="font-atype font-medium">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor="phone" className="font-atype font-medium">
        Phone
      </label>
      <input
        required
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        className="w-full rounded-md"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="address" className="font-atype font-medium">
        Address
      </label>
      <textarea
        required
        name="address"
        placeholder="Enter your address"
        className="w-full rounded-md"
        value={formData.address}
        onChange={handleChange}
      />
      <label htmlFor="question" className="font-atype font-medium">
        What is your favorite sports?
      </label>
      <input
        required
        type="text"
        name="question"
        placeholder="football"
        className="w-full rounded-md"
        value={formData.question}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="font-atype font-medium bg-[#202E99] px-5 py-2 text-white rounded-md m-auto mt-6"
      >
        Sign Up
      </button>
      <p className="text-center mt-2">
        Already have an account?{" "}
        <span
          className="text-primary underline cursor-pointer "
          onClick={() => showLogin(true)}
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default Signup;
