import React, { useEffect, useState } from "react";
import ForgetPassword from "./ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../Store/User/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ({ showLogin = () => {} }) => {
  const [forgetPassword, setForgotPassword] = useState(false);
  const loginStatus = useSelector((state) => state.User.status);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginRequest = (e) => {
    e.preventDefault();
    dispatch(handleLogin(formData));
  };
  useEffect(() => {
    if (loginStatus === 'succeeded') {
      navigate('/');
    }
  }, [loginStatus, navigate]);

  return (
    <>
      {forgetPassword ? (
        <ForgetPassword showLogin={showLogin} />
      ) : (
        <form
          className="w-full flex flex-col gap-3 font-atype"
          onSubmit={handleLoginRequest}
        >
          <h1 className="text-3xl font-atype font-semibold mb-8 text-center">
            Login
          </h1>
          <label htmlFor="email" className="font-atype font-medium">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your User Name"
            className="w-full rounded-md"
            value={formData.userName}
            onChange={handleChange}
          />
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
          <p
            className="text-end underline font-atype font-normal"
            onClick={() => setForgotPassword(true)}
          >
            Forget Password
          </p>

          <button
            type="submit"
            className="font-atype font-medium bg-[#202E99] px-5 py-2 text-white rounded-md m-auto mt-6"
          >
            Login
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
      )}
    </>
  );
};

export default Login;
