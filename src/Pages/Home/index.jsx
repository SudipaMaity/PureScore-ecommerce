import React from "react";

import Lottie from "react-lottie";

import Hero from "./Hero";
import animationData from "../../assets/AnimationJsonFile/Animation1.json";
import Category from "./Category";
import Services from "./Services";
import OurPromise from "./OurPromise";
import BestSeller from "./BestSeller";
import Partners from "./Partners";
import Blogs from "./Blogs";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative w-screen flex justify-center items-center flex-col ">
      {/* Page Wrapper */}
      <div className="w-full ">
        {/* Hero Section */}
        <Hero />
        {/* Category section */}

        <Category />
        {/* our service section */}
        <Services />

        <div className="relative overflow-hidden">
          <div className="absolute z-0 top-0 left-[-500px] opacity-[30%]">
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </div>
          <div className="absolute z-0 bottom-[20%] right-[-500px] opacity-[30%]">
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </div>
          {/* our promises */}
          <OurPromise />
          {/* Best Sellers */}
          <BestSeller />
          {/* Partners */}
          {/* <Partners/> */}
          {/* Blogs */}
          <Blogs />
        </div>
        {/* Testimonials */}
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Home;
