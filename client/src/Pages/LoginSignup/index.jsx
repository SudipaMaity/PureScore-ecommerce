import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/AnimationJsonFile/Animation1.json";
import Signup from "./Signup";
import Login from "./Login";
const LoginSignup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [login, setLogin] = useState(false);

  return (
    <div className="w-screen relative py-20">
      <section className="w-full max-w-screen-xl h-full relative flex justify-end  m-auto ">
        <div className="my-auto">
          <div className="border border-black p-10 rounded-[26px] w-[550px] flex flex-col items-center bg-[#FAFAFA]">
          
            <div className="w-full">
              {login ? (
                <Login showLogin={setLogin} />
              ) : (
                <Signup showLogin={setLogin} />
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute z-0 top-0 left-[-500px] opacity-[30%]">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </div>
  );
};

export default LoginSignup;
