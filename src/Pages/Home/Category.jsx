import React from "react";
import brandImg from "../../assets/Logo/brand1.svg";
import starBullet from "../../assets/icons/Star.svg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import animationData from "../../assets/AnimationJsonFile/Animation1.json";
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
import { products } from "../../Utils/data";
import Lottie from "react-lottie";
import "./index.css";
import { useSelector } from "react-redux";
const Category = () => {
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
  const products = useSelector((state) => state.Products.Products);
  console.log(products);
  const filterProductsByCategory = (category) => {
    return products?.filter((product) => product?.category.name === category);
  };
  return (
    <section className="py-20 relative  flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="w-full text-center font-atype text-5xl font-semibold">
          Our Product Categories
        </h1>
        <div className="max-w-screen-lg mt-28 mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center">
            <div className="col-span-1 w-full flex flex-col justify-start items-center">
              <div className="mt-7">
                <div className="w-full flex items-center gap-5">
                  <img src={starBullet} alt="bullet-point" />
                  <h2 className="text-3xl font-atype font-semibold text-primary">
                    Soil Testing
                  </h2>
                </div>
                <div className="mt-7">
                  <p className="w-full text-lg font-campton text-center md:text-left">
                    Explore our Soil Testing Kits for precise analysis of your
                    soil's composition. From pH levels to nutrient content, our
                    easy-to-use kits provide accurate results swiftly. Whether
                    you're a gardening enthusiast or a professional, unlock the
                    secrets of your soil for healthier plants today!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex justify-center relative">
              <div className="w-full max-w-[380px] relative flex justify-center items-center">
                <Swiper
                  modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                  navigation={{
                    nextEl: ".swiper-button-next-custom1",
                    prevEl: ".swiper-button-prev-custom1",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  slideToClickedSlide={true}
                  effect="coverflow"
                >
                  {filterProductsByCategory("soil Testing").map((product, i) => (
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
              <div className="swiper-button-next-custom1 custom-swiper-button absolute right-0 cursor-pointer">
                <ArrowForwardIosRoundedIcon />
              </div>
              <div className="swiper-button-prev-custom1 custom-swiper-button absolute left-0 cursor-pointer">
                <ArrowBackIosNewRoundedIcon />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            <div className="col-span-1 flex justify-center relative">
              <div className="w-full max-w-[380px] relative flex justify-center items-center">
                <Swiper
                  modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                  navigation={{
                    nextEl: ".swiper-button-next-custom2",
                    prevEl: ".swiper-button-prev-custom2",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  slideToClickedSlide={true}
                  effect="coverflow"
                >
                  {filterProductsByCategory("water tester").map((product, i) => (
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
              <div className="swiper-button-next-custom2 custom-swiper-button absolute right-0 cursor-pointer">
                <ArrowForwardIosRoundedIcon />
              </div>
              <div className="swiper-button-prev-custom2 custom-swiper-button absolute left-0 cursor-pointer">
                <ArrowBackIosNewRoundedIcon />
              </div>
            </div>

            <div className="col-span-1 w-full flex flex-col justify-start items-end pr-7">
              <div className="w-full mt-7">
                <div className="w-full flex   items-center gap-5">
                  <img src={starBullet} alt="bullet-point" />
                  <h2 className="text-3xl font-atype font-semibold text-primary">
                    Water Testing
                  </h2>
                </div>
                <div className="mt-7">
                  <p className="w-full text-lg font-campton text-center md:text-left">
                    Ensure water purity with our Water Testing Kits. From
                    drinking water to industrial sources, our easy-to-use kits
                    detect contaminants swiftly. Trust in our accurate results
                    for cleaner, healthier water, every time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-10  bottom-1/4">
        <img src={brandImg} alt="brandimg" />
      </div>

      <div className="absolute right-[-500px] top-[10%] opacity-[30%] z-0">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </section>
  );
};

export default Category;
