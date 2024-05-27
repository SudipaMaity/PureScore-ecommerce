import React from "react";
import sampleReport from '../../assets/Utils/sample.pdf'
const Reports = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full grid grid-cols-12 max-w-screen-2xl m-auto">
        <div className="col-span-9 border">
          <iframe className="w-full h-full" src={sampleReport} />
        </div>
        <div className="col-span-3  p-6 flex flex-col  gap-5 ">
          <h1 className="font-semibold">Latest Report</h1>
          <div className="bg-[#5F6E51] p-4  rounded-lg text-white">
            <h1>Soil test report</h1>
            <h3>
              Date of Submisson : <span>12-04-2024</span>
            </h3>
            <h3>
              Report Date: <span>25-05-2024</span>
            </h3>
          </div>
          <h1 className="font-semibold">Past Reports</h1>
          <div className="bg-[#FAFAFA] p-4  rounded-lg">
            <h1 className="">Soil test report</h1>
            <h3>
              Date of Submisson : <span>12-04-2024</span>
            </h3>
            <h3>
              Report Date: <span>25-05-2024</span>
            </h3>
          </div>
          <div className="bg-[#FAFAFA] p-4  rounded-lg">
            <h1 className="">Soil test report</h1>
            <h3>
              Date of Submisson : <span>12-04-2024</span>
            </h3>
            <h3>
              Report Date: <span>25-05-2024</span>
            </h3>
          </div>
          <div className="bg-[#FAFAFA] p-4  rounded-lg">
            <h1 className="">Soil test report</h1>
            <h3>
              Date of Submisson : <span>12-04-2024</span>
            </h3>
            <h3>
              Report Date: <span>25-05-2024</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
