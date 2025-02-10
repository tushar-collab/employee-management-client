import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userApiStatus: false,
  usersData: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserApiStatus: (state, action) => {
      state.userApiStatus = action.payload;
    },
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
  },
});

export const { setUserApiStatus, setUsersData } = appSlice.actions;

export default appSlice.reducer;
