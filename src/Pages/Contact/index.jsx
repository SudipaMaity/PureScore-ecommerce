import React from "react";
import ContactAnimation from "../../assets/AnimationJsonFile/Contact.json";
import Lottie from "react-lottie";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="w-screen  py-20 ">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-2 gap-20 m-auto">
          <div >
            <Lottie options={defaultOptions} />
          </div>
          <div className="w-full flex justify-center items-center">
            <form className="w-full bg-[#f8f8f8] px-20 py-10 rounded-lg">
              <h1 className="text-center text-2xl mb-10">Contact Us</h1>
              <div className="w-full flex flex-col gap-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  className="rounded-lg w-full "
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email "
                  className="rounded-lg w-full"
                />
                <label>Subject / Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your Subject/Title "
                  className="rounded-lg w-full"
                />
                <label>Message</label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Type your message "
                  className="rounded-lg w-full min-h-10"
                />
                <button className="bg-primary px-10 py-2 rounded-full text-white m-auto mt-5">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
