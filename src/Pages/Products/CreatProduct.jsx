import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import AddCategory from "./AddCategory";
import { addProducts } from "../../Store/Products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatProduct = () => {
  const categories = useSelector((state) => state.Products.categories);
  console.log("categories", categories);
  const [openModal, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const productData = {
      name: formData.get("productName"),
      category: formData.get("category"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      short_desc: formData.get("short_desc"),
      desc: formData.get("description"),
      imgage: formData.get("productImg"),
    };

    dispatch(addProducts(productData));
  };

  return (
    <section className="w-screen  py-10">
      <div className="max-w-screen-xl m-auto ">
        <div>
          <h1 className="text-4xl font-semibold text-center">Add Product</h1>
        </div>
        <div className="mt-6">
          <form
            className="max-w-screen-md flex flex-col m-auto gap-2 bg-slate-300 p-8 rounded-xl"
            onSubmit={handleSubmit}
          >
            <label>Product Name</label>
            <input
              required
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              className="rounded-md"
            />
            <div className="flex items-center gap-5">
              <label>Product Category</label>
              <button
                className="bg-primary py-1 px-2 rounded-lg text-sm text-white"
                type="button"
                onClick={() => setOpen(true)}
              >
                Add New Category ➞
              </button>
            </div>
            <select
              id="category"
              name="category"
              required
              className="rounded-md"
            >
              {categories?.map((category, i) => {
                return (
                  <option value={category._id} key={i}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label>Price</label>
                <input
                  required
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="rounded-md"
                  min={100}
                />
              </div>
              <div className="flex flex-col">
                <label>Quantity</label>
                <input
                  required
                  type="number"
                  name="quantity"
                  placeholder="Enter Product Quantity"
                  className="rounded-md"
                  min={1}
                />
              </div>
            </div>
            <label>Short Description</label>
            <textarea
              required
              type="text"
              name="short_desc"
              placeholder="Enter Product Short Description"
              className="rounded-md"
            />
            <label>Description</label>
            <textarea
              required
              type="text"
              name="description"
              placeholder="Enter Product Description"
              className="rounded-md"
            />
            <label>Product Image</label>
            <input
              required
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              name="productImg"
              placeholder="Add Product Image"
              className="rounded-md"
            />
            <button className="font-atype font-medium bg-[#202E99] px-5 py-3 text-white rounded-md m-auto mt-7">
              Save Product
            </button>
          </form>
        </div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddCategory handleClose={handleClose} />
        </Modal>
      </div>
    </section>
  );
};

export default CreatProduct;
