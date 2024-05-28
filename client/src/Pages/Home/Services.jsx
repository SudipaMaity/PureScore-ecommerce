import React from 'react'
import { process} from "../../Utils/data";
const Services = () => {
  return (
    <section className="bg-[#202E99] flex flex-col justify-center items-center py-20 text-white">
    <div className="max-w-screen-xl flex flex-col justify-center items-center">
      <div>
        <h1 className="w-full text-center font-atype text-5xl font-semibold">
          Our Process
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 gap-20 mt-40">
        <div className="sticky top-20 self-start mt-3 flex justify-center items-center">
          <div className="w-[80%]">
            <h1 className="font-atype text-4xl font-semibold">
              5 Easy Steps
            </h1>
            <p className="font-campton text-lg mt-5 text-[#dfdfdf] ">
              Experience seamless water testing in just five easy steps.
              Choose your kit, place your order, collect your sample,
              schedule pickup, and receive your Aqua Score. It's that
              simple!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {process.map((data, i) => (
            <div
              key={i}
              className="mb-5 pb-8 pt-2 w-[80%] border-b border-white"
            >
              <h2 className="text-3xl font-atype font-semibold">
                <span className="text-3xl font-atype font-semibold">
                  {i + 1}
                </span>{" "}
                {data.process_name}
              </h2>
              <p className=" ml-5 text-xl font-atype font-medium py-3 text-[#dfdfdf]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services