import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/productsSlice";
import userSlice from "./User/userSlice";
import adminSlice from "./Admin/adminSlice";
export const store = configureStore({
  reducer: {
    Products: productsSlice,
    User : userSlice,
    Admin : adminSlice
  },
});
