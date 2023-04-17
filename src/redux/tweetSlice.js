import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchChangePost } from "./usersOperations";

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchChangePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChangePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchChangePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  reducers: {
    filterTweet: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { filterTweet } = userSlice.actions;
