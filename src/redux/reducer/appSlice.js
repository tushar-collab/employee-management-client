import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
  isUserGridLoading: false,
  userDetails: {},
  selectedUser: [],
  openDetails: false,
  setupStatus: false,
  setUpMessage: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    setIsUserGridLoading: (state, action) => {
      state.isUserGridLoading = action.payload;
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
    setSetupStatus: (state, action) => {
      state.setupStatus = action.payload;
    },
    setSetUpMessage: (state, action) => {
      state.setUpMessage = action.payload;
    },
  },
});

export const {
  setUsersData,
  setIsUserGridLoading,
  setUserDetails,
  setSelectedUser,
  setOpenDetails,
  setSetupStatus,
  setSetUpMessage,
} = appSlice.actions;

export default appSlice.reducer;
