import React from "react";
import ProductImg from "../../assets/Products/Product1.jpeg";
const ProductEdit = () => {
  return (
    <section className="w-screen py-10 font-atype">
      <div className="max-w-screen-xl m-auto">
        <div>
          <h1 className="text-center text-3xl font-semibold">
            Product Edit Page
          </h1>
        </div>

        <div className="grid grid-cols-2 mt-10 gap-10">
          <div className="bg-[#FAFAFA] p-10 rounded-xl flex flex-col gap-3">
            <div className="grid grid-cols-2 ">
              <div>
                <img src={ProductImg} alt="prdocut" className="w-[60%]" />
              </div>
              <div className="py-4">
                <h1 className="text-xl font-semibold">Product Name</h1>
                <h2 className="font-semibold">Product Category</h2>
                <h3 className="font-semibold">
                  Price : <span className="font-medium">299</span>
                </h3>
                <h3 className="font-semibold">
                  Quantity : <span className="font-medium">10</span>
                </h3>
              </div>
            </div>
            <div>
              <h4 className="font-xl font-semibold">Short Discription :</h4>
              <p className="font-campton indent-8 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus sit amet dictum. Nunc vel risus
              </p>
            </div>
            <div>
              <h4 className="font-xl font-semibold">Product Discription :</h4>
              <p className="font-campton indent-8 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus sit amet dictum. Nunc vel
                risusLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Justo laoreet sit amet cursus sit amet dictum. Nunc vel
                risusLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Justo laoreet sit amet cursus sit amet dictum. Nunc vel
                risus
              </p>
            </div>
          </div>
          <form>
            <div className="bg-[#FAFAFA] p-10 rounded-xl flex flex-col gap-3">
              <div className="grid grid-cols-2 ">
                <div className="border border-[#8c8989] w-[80%] h-40 flex justify-center items-center rounded-lg">
                  img input
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="rounded-lg w-full"
                    required
                  />
                  <select
                    id="category"
                    name="category"
                    required
                    className="rounded-lg w-full"
                  >
                    <option value="Soil Testing">Soil Testing </option>
                    <option value="Water Testing">Water Testing</option>
                    <option value="Water Testing">Chemical Testing</option>
                    <option value="Water Testing">
                      Environment Monitoring{" "}
                    </option>
                    <option value="Water Testing">Engineering Solutions</option>
                    <option value="Water Testing">Water Testing</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Enter Price"
                    className="rounded-lg w-full"
                    required
                  />
                  <input
                    required
                    type="number"
                    placeholder="Enter Product quantity"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Enter short description in 30 words"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Enter short description in 100 words"
                  className="w-full  rounded-lg"
                />
              </div>
              <button
                className="bg-primary px-6 py-2 m-auto text-white rounded-lg disabled:bg-[#707DE1]"
                disabled
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
