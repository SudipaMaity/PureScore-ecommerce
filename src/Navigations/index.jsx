import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "../Pages/LoginSignup";
import Home from "../Pages/Home";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Navbar from "../Components/Sharing-Component/Navbar";
import Footer from "../Components/Sharing-Component/Footer";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/Products/SingleProduct";
import CreatProduct from "../Pages/Products/CreatProduct";
import Blog from "../Pages/Blogs";
import { Modal } from "@mui/material";
import Cart from "../Components/Sharing-Component/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartModal } from "../Store/Products/productsSlice";
import ProductEdit from "../Pages/MyProducts/ProductEdit";
import Contact from "../Pages/Contact";
import Reports from "../Pages/Reports/Reports";
import GenrateReports from "../Pages/Reports/GenrateReports";
import Creatblog from "../Pages/Blogs";
import BlogPage from "../Pages/Blogs/BlogPage";
const Navigations = () => {
  const cartModal = useSelector((state) => state.Products.cartModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setCartModal());
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/myproducts" element={<MyProducts />} />
        {/* <Route path="/myproducts" element={<MyProducts />} /> */}
        <Route exact={true} path="/products" element={<Products />} />
        {/* <Route path="/products:id" element={<SingleProduct />} /> */}
        <Route path="/single:id" element={<SingleProduct />} />
        <Route path="/ProductEdit" element={<ProductEdit />} />
        <Route path="/addproduct" element={<CreatProduct />} />
        <Route path="/addBlog" element={<Creatblog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/generateReport" element={<GenrateReports />} />
      </Routes>
      <Modal
        open={cartModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Cart handleClose={handleClose} />
      </Modal>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigations;
