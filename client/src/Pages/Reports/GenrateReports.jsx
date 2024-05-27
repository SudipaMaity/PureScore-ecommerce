import React, { useState } from "react";
import sampleReport from "../../assets/Utils/sample.pdf";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import Close from '../../assets/icons/Close.svg'
const GenrateReports = () => {
    const [modalOpen ,setModal]= useState(false)
  return (
    <section className="w-screen h-screen font-atype">
      <div className="w-full h-full grid grid-cols-12 max-w-screen-2xl m-auto">
        <div className="col-span-9 border">
          <iframe className="w-full h-full" src={sampleReport} />
        </div>
        <div className="col-span-3  p-6 flex flex-col  gap-5 ">
          <h1 className="font-semibold">Genrate Report</h1>
          <div className="  rounded-lg text-white">
            <button className="bg-[#A98C6C] py-3 px-10 rounded-lg flex justify-center items-center gap-3 font-semibold" onClick={()=>{setModal(true)}}>
              Genrate Report <AddIcon />
            </button>
          </div>
          <h1 className="font-semibold">Past Genrated Reports</h1>
          <div className="bg-[#FAFAFA] p-4  rounded-lg">
            <h1>
              Name: <span>Kunal Charde</span>
            </h1>
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
      <Modal open={modalOpen} onClose={() => setModal(false)}>
        <div className="w-full h-full flex justify-center items-center">
          <form>
            <div className="bg-white p-4 rounded-lg flex flex-col gap-3  relative">
            <img src={Close} alt="close" className="w-6 absolute top-3 right-3 cursor-pointer" onClick={() => setModal(false)} />
              <h1 className="text-center text-xl mb-2">Genrate Report</h1>
              <label>Select the User</label>
              <select id="user" name="user" required className="rounded-md">
                <option value="Soil Testing">Kunal Charde</option>
                <option value="Water Testing">Shiva Singh</option>
                <option value="Water Testing">Rudra Raj</option>
              </select>
              <label>Enter Report title</label>
              <input type="text" className="rounded-lg" />
              <label>Enter Report Note</label>
              <input type="text" className="rounded-lg" />
              <label>Add Report (pdf*)</label>
              <input type="file" className="rounded-lg " />
              <button className="bg-primary py-3 px-6 rounded-lg m-auto text-white">
                Genrate Report
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default GenrateReports;
