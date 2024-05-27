import React from 'react'
import easyReturnImg from "../../assets/icons/return-box.svg";
const OurPromise = () => {
  return (
    <section className="w-screen relative z-10 py-20 flex justify-center ">
    <div className="max-w-screen-xl">
      <div>
        <h1 className="w-full text-center font-atype text-4xl font-semibold">
          Our Promises to the customer
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        <div className="border border-black p-6 max-w-sm rounded-md flex flex-col justify-center items-center gap-2">
          <img src={easyReturnImg} alt="return" />
          <h1 className="font-atype font-semibold text-2xl text-center ">
            Easy return and Replacement
          </h1>
          <p className="text-center px-8 font-campton">
            We provide return or replacement for our products depending
            on the product category
          </p>
        </div>
        <div className="border border-black p-6 max-w-sm rounded-md flex flex-col justify-between items-center gap-2">
          <img src={easyReturnImg} alt="return" />
          <h1 className="font-atype font-semibold text-2xl text-center ">
            Free Shipping
          </h1>
          <p className="text-center px-8 ">
            We provide return or replacement for our products depending
            on the product category
          </p>
        </div>
        <div className="border border-black p-6 max-w-sm rounded-md flex flex-col justify-center items-center gap-2">
          <img src={easyReturnImg} alt="return" />
          <h1 className="font-atype font-semibold text-2xl text-center px-10">
            Friendly Support Team
          </h1>
          <p className="text-center px-8 ">
            We provide return or replacement for our products depending
            on the product category
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurPromise