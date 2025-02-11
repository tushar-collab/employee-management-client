import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userApiStatus: false,
  usersData: [],
  isUserGridLoading: false,
  userDetails: {},
  isUserDetailsLoading: false,
  selectedUser: [],
  openDetails: false,
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
    setIsUserGridLoading: (state, action) => {
      state.isUserGridLoading = action.payload;
    },
    setIsUserDetailsLoading: (state, action) => {
      state.isUserDetailsLoading = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSelectedUser: (state, action) => {
      if (action?.payload?.length === 0) {
        state.openDetails = false;
      }
      state.selectedUser = action.payload;
    },
    setOpenDetails: (state, action) => {
      state.openDetails = action.payload;
      if (!action.payload) {
        state.selectedUser = [];
      }
    },
  },
});

export const {
  setUserApiStatus,
  setUsersData,
  setIsUserGridLoading,
  setUserDetails,
  setIsUserDetailsLoading,
  setSelectedUser,
  setOpenDetails,
} = appSlice.actions;

export default appSlice.reducer;
