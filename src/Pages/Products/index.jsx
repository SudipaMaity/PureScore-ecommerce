import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../Store/Products/productsSlice";
import ProductCard from "../../Components/Main-Component/ProductCard";
import BestSeller from "../Home/BestSeller";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.Products);
  const categories = useSelector((state) => state.Products.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (products.length < 1) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, products.length]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category.name === selectedCategory
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="w-screen h-full py-20">
        <div className="max-w-screen-xl h-full flex flex-col items-center justify-center mx-auto">
          <div>
            <h1 className="text-4xl font-semibold">Products</h1>
          </div>
          <div className="w-full mt-16">
            <div className="flex justify-between px-7">
              <div className="flex gap-7">
              <button
                  className={`border py-2 px-5 rounded-lg ${
                    selectedCategory === ""
                      ? "border-white bg-primary text-white"
                      : "border-primary"
                  }`}
                  onClick={() => handleCategoryChange("")}
                >
                  All
                </button>
                {categories.map((category, i) => {
                  return (
                    <button
                      className={`border py-2 px-5 rounded-lg ${
                        selectedCategory === `${category.name}`
                          ? "border-white bg-primary text-white"
                          : "border-primary"
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                      key={i}
                    >
                      {category.name}
                    </button>
                  );
                })}

               
          
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="rounded-lg w-[400px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-20">
              {filteredProducts.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <BestSeller />
    </>
  );
};

export default Products;
