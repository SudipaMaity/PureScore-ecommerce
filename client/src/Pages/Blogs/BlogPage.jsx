import React, { useEffect } from "react";
import { BlogsData } from "../../Utils/data";
import BlogCard from "../../Components/Main-Component/BlogCard/Index";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../Store/Admin/adminSlice";

const BlogPage = () => {
  const Blogs = useSelector((state) => state.Admin.blogs);
  console.log(Blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Blogs.length) {
    dispatch(fetchAllBlogs());
    }
  }, []);
  return (
    <section className="w-screen   py-20 ">
      <div className="max-w-screen-xl m-auto">
        <div>
          <h1 className="w-full text-center font-atype text-4xl font-semibold">
            Blogs
          </h1>
        </div>
        <div className="h-full mt-20 grid grid-cols-3 gap-6">
          {Blogs.map((blog, i) => (
            <BlogCard Blog={blog} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
