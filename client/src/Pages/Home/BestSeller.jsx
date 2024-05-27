import React from "react";
import ProductCard from "../../Components/Main-Component/ProductCard";
import { BestSellerData } from "../../Utils/data";
import { useSelector } from "react-redux";
const BestSeller = () => {
  const products = useSelector((state) => state.Products.Products);
  const handleAddtoCart = (id) => {
    console.log("add to cart ", id);
  };

  const handleProductCard = (id) => {
    console.log("product card", id);
  };

  return (
    <section className="w-screen  relative z-10 py-20 flex justify-center ">
      <div className="max-w-screen-xl">
        <div>
          <h1 className="w-full text-center font-atype text-4xl font-semibold">
            Best Sellers
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-20">
          {products.map((product, i) => {
            return (
              <ProductCard
                key={i}
                product={product}
                onAddCart={handleAddtoCart}
                onProductClick={handleProductCard}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
