import React from "react";
import productImg from "../../assets/Products/Product1.jpeg";
import DownloadBImg from "../../assets/icons/download.svg";
const SingleProduct = () => {
  return (
    <section className="w-screen h-screen pt-20">
      <div className="max-w-screen-xl m-auto ">
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-center">Product Name</h1>
        </div>
        <div className="w-full m-auto  mt-12">
          <div className="grid grid-cols-2 gap-10">
            <div className="w-full h-full  flex  flex-col justify-center items-center ">
              <img src={productImg} alt="image" className="w-[60%] h-auto" />
              <div className="flex gap-10 px-10 mt-5">
                <button className="font-atype font-medium border border-primary px-5 py-2 rounded-md">
                  Add to Cart
                </button>
                <button className="font-atype font-medium bg-[#202E99] px-5 py-2 text-white rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="bg-[#F7F7F7] rounded-lg  p-8">
              <h2 className="font-semibold font-atype">
                Product Categorty :{" "}
                <span className="text-[#A98C6C] font-bold">Water Testing</span>
              </h2>
              <h3 className="font-semibold font-atype mt-3">Description :</h3>
              <p className="indent-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="mt-5 ">
                <span className="text-2xl font-semibold">₹ 299</span>{" "}
                <span className="line-through">₹ 499</span>
                <button className="ml-5 text-primary font-semibold">
                  Buy Now
                </button>
              </div>
              <div className="flex justify-end  items-center gap-5  mt-10">
                <p className="text-end text-primary font-semibold">
                  Download user manual
                </p>
                <img src={DownloadBImg} alt="download"  className="w-7 h-auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
