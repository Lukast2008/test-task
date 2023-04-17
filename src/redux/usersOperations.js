import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63ac57c634c46cd7ae7f01a4.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "user/getUsers",
  async ({ page, limits }, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get(`/users?p=${page}&l=${limits}`);
      return data;
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);

export const fetchChangePost = createAsyncThunk(
  "user/putUsers",
  async ({ id, newData }, { rejectedWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, { ...newData });
      return data;
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);
