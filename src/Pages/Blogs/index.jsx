import React from "react";

const Creatblog = () => {
  return (
    <section className="w-screen h-screen py-10">
      <div className="max-w-screen-xl m-auto ">
        <div>
          <h1 className="text-4xl font-semibold text-center">Create Blog</h1>
        </div>
        <div className="mt-6">
          <form className="max-w-screen-md flex flex-col m-auto gap-2 bg-slate-300 p-8 rounded-xl">
            <label>Blog Name</label>
            <input
              required
              type="text"
              name="blogName"
              placeholder="Enter Product Name"
              className="rounded-md"
            />
            <label>Blog Url</label>
            <input
              required
              type="text"
              name="blogName"
              placeholder="Enter Product Url"
              className="rounded-md"
            />
            <label>Blog Image</label>
            <input
              required
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              name="blogImg"
              placeholder="Add Blog Image"
              className="rounded-md"
            />
            <button className="font-atype font-medium bg-[#202E99] px-5 py-3 text-white rounded-md m-auto mt-7">
              Save Blog
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Creatblog;
