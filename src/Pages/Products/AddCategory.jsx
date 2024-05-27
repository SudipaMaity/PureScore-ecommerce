import React, { useState } from "react";
import Close from "../../assets/icons/Close.svg";
import { useDispatch } from "react-redux";
import { addCategory } from "../../Store/Products/productsSlice";

const AddCategory = ({ handleClose = () => {} }) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      // Do not proceed if category name is empty
      return;
    }
    dispatch(addCategory(categoryName));
    handleClose(); // Close the modal
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-sm  bg-white p-10 rounded-xl flex flex-col justify-center relative ">
        <img
          src={Close}
          alt="close"
          className="w-6 absolute top-3 right-3 cursor-pointer"
          onClick={handleClose}
        />

        <div>
          <h2 className="text-center text-xl font-medium">Add Category</h2>
        </div>
        <form onSubmit={handleSave} className="flex flex-col mt-7 gap-3 ">
          <label htmlFor="category">Category</label>
          <input
            required
            className="rounded-lg"
            type="text"
            placeholder="Enter Category"
            name="category"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary py-1 px-6 m-auto rounded-md text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
