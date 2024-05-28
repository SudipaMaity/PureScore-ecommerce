import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Interceptor";

export const fetchAllBlogs = createAsyncThunk(
  "Admin/fetchAllBlogs",
  async () => {
    try {
      const response = await api.get(`/blog/fetch-blogs`);
      console.log("response fetchAllBlogs", response);
      return response.data;
    } catch (error) {
      return error
      
    }
  }
);

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    blogs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload.blogs;
    });
  },
});

// export const { } = adminSlice.actions;

export default adminSlice.reducer;
