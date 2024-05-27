import React, { useEffect } from "react";
import ProductCard from "../../Components/Main-Component/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


import Lottie from "react-lottie";
import animationData from "../../assets/AnimationJsonFile/Animation1.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories, fetchAllProducts } from "../../Store/Products/productsSlice";

const Hero = () => {
  const products = useSelector((state) => state.Products.Products);
  
  const dispatch = useDispatch();
  const handleAddtoCart = (id) => {
    console.log("add to cart ", id);
  };

  const handleProductCard = (id) => {
    console.log("product card", id);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (products.length < 1) {
      dispatch(fetchAllProducts());
      dispatch(fetchAllCategories())
    }
  }, []);

  return (
    <section className="relative w-full py-10 px-5 md:py-20 md:px-20">
      <div className="flex justify-center items-center">
        <div className="w-full h-full grid md:grid-cols-2 gap-10">
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="font-atype text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight md:w-[450px] text-center md:text-left">
              Explore Precision Testing Kits for Water & Soil
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              navigation
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              slideToClickedSlide={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 1,
                slideShadows: false,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {products.map((product, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    product={product}
                    onAddCart={handleAddtoCart}
                    onProductClick={handleProductCard}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Lottie animation */}
      <div className="absolute top-0 left-[-500px] opacity-30 pointer-events-none">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </section>
  );
};

export default Hero;
