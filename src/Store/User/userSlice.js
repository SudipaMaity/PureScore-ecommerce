import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Interceptor";

export const handleSignup = createAsyncThunk(
  "user/handleSignup",
  async (reqBody, { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/register`, reqBody);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "user/handleLogin",
  async (reqBody, { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/login`, reqBody);
      return response.data; // Assume response contains user info including role
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleForgetPassword = createAsyncThunk(
  "user/handleForgetPassword",
  async (reqBody, { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/forgot-password`, reqBody);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: 'idle',
    error: null,
    cartModal: false,
  },
  reducers: {
    setCartModal: (state) => {
      state.cartModal = !state.cartModal;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSignup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(handleSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
        state.status = 'succeeded';
      })
      .addCase(handleLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(handleForgetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(handleForgetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleForgetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCartModal, logout } = userSlice.actions;

export default userSlice.reducer;
