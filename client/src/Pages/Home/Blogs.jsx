import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import BlogCard from "../../Components/Main-Component/BlogCard/Index";
import { BlogsData } from "../../Utils/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../Store/Admin/adminSlice";

const Blogs = () => {
  const Blogs = useSelector((state) => state.Admin.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Blogs.length) {
    dispatch(fetchAllBlogs());
    }
  }, []);

  return (
    <section className="w-screen relative z-10  py-20 flex justify-center">
      <div className="max-w-screen-xl">
        <div>
          <h1 className="w-full text-center font-atype text-4xl font-semibold">
            Blogs
          </h1>
        </div>
        <div className="h-full mt-20">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
          >
            {Blogs?.map((blog, i) => {
              return (
                <SwiperSlide key={i} className="flex justify-center">
                  <BlogCard Blog={blog} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
