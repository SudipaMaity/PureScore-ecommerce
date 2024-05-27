import React from "react";
import DeleteIcon from "./../../assets/icons/delete.svg";
import Close from "../../assets/icons/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCartModal, updateCartProductQuantity, removeCartProduct } from "../../Store/Products/productsSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCartModal());
  };

  const cartProducts = useSelector((state) => state.Products.cartProducts);

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartProductQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeCartProduct(productId));
  };

  const totalAmount = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="w-full h-full m-auto flex justify-center items-center">
      <div className=" w-full max-w-screen-sm bg-white p-10 rounded-xl flex flex-col justify-center relative">
        <img
          src={Close}
          alt="close"
          className="w-8 absolute top-6 right-6 cursor-pointer"
          onClick={handleClose}
        />

        <div>
          <h2 className="text-center text-2xl font-medium">My Cart</h2>
        </div>
        <div className="mt-10 h-full min-h-28  max-h-[450px] overflow-scroll pb-10">
          {
            cartProducts.length === 0 && <h1 className="text-center text-xl">Add Products to the Cart</h1>
          }
          {cartProducts.map((product, i) => (
            <div
              className="grid grid-cols-3 gap-3 border-b-2 border-primary pb-3"
              key={i}
            >
              <div className="p-3">
                <img
                  src={`http://localhost:8080/${product.image}`}
                  alt={product.name}
                  className="h-32 w-auto rounded-sm"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-1">
                <h1 className="text-primary text-xl font-semibold">
                  {product.name}
                </h1>

                <span className="text-sm font-semibold text-primary cursor-pointer">
                  Read More
                </span>
                <input
                  type="number"
                  min={1}
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(product._id, parseInt(e.target.value))
                  }
                  className="border border-primary rounded-lg w-20 h-8"
                />
              </div>

              <div className="flex flex-col justify-between items-end py-3 pr-3">
                <img
                  src={DeleteIcon}
                  alt="delete"
                  className="w-7 cursor-pointer"
                  onClick={() => handleRemoveProduct(product._id)}
                />
                <p>
                  <span>₹{product.price}</span> x <span>{product.quantity}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-primary absolute bottom-0 left-0 rounded-b-xl py-3 flex justify-between px-10">
          <span className="text-white text-lg font-semibold">
            Total: ₹{totalAmount}
          </span>
          <button className="bg-white px-5 py-2 rounded-lg font-semibold text-primary disabled:bg-white" disabled={cartProducts.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
