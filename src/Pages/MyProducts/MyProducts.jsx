import React from "react";
import productImG from "../../assets/Products/Product1.jpeg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const MyProducts = () => {
  return (
    <section className="w-screen h-screen font-atype py-10">
      <div className=" w-full max-w-screen-2xl flex flex-col justify-center  items-center m-auto">
        <div>
          <h1 className="text-3xl font-semibold ">My Products</h1>
        </div>
        <div className="max-w-screen-xl m-auto mt-10">
          <div className="w-full grid grid-cols-3 bg-slate-50 py-4 rounded-xl">
            <div className=" flex justify-center items-center ">
              <img src={productImG} alt="product" className="w-[40%] rounded-xl" />
            </div>
            <div className="flex flex-col  gap-1">
              <h1 className="text-xl font-semibold">Product Name</h1>
              <h3 className="text-lg font-medium">Product Category</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit eveniet repudiandae optio labore officiis nobis dolor,
                blanditiis sit eum, at natus exercitationem. Optio inventore
                soluta id numquam error tempore veritatis.
              </p>
              <span className="font-semibold text-primary">View More</span>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <div className="flex justify-center items-end gap-3">
                  <div className="flex flex-col">
                    {" "}
                    <span>Product Quantity Left</span>
                    <span className="text-center border border-primary px-6 py-2  rounded-lg mt-2">
                      1
                    </span>
                  </div>
                  <div>
                    <button className="px-6 py-2 bg-primary rounded-lg text-white flex justify-center items-center gap-3">
                      <ModeEditIcon /> <span>Edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
