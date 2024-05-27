import React from "react";
import blogImg from "../../../assets/Utils/soil-testing-in-construction 1.png";

const BlogCard = ({ Blog = {} }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL; // Import VITE_BASE_URL

  return (
    <div className="w-full h-full border border-black rounded-lg flex flex-col overflow-hidden">
      <div className="w-full">
        <img src={`${baseUrl}/${Blog.image}`} alt="blog_img" className="w-full max-h-80 object-cover" /> {/* Use baseUrl */}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between gap-1 overflow-hidden">
        <h3 className="font-atype font-semibold text-xl">{Blog?.name}</h3>
        <p className="font-atype font-light text-sm line-clamp-2">{Blog?.blog}</p>
        <div className="mt-4">
          <button className="font-atype font-medium bg-[#202E99] px-5 py-2 text-white rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
