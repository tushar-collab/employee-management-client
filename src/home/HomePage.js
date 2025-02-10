import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserDataGrid from "../components/UserDataGrid";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {

  const dispatch = useDispatch();
  const userApiStatus = useSelector((state) => state?.app?.userApiStatus);

  console.log("userApiStatus : ", userApiStatus);

  useEffect(() => {
    loadUsers();
  }, []);
  

  useEffect(() => {
    if (userApiStatus) {
      fetchUsers();
    }
  }, [userApiStatus]);

  const loadUsers = () => {
    dispatch({ type: "LOAD_USERS" });
  };

  const fetchUsers = () => {
    dispatch({ type: "FETCH_USERS" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "5rem",
        paddingTop: "2rem",
        flexDirection: "column",
      }}
    >
      <div>
        <SearchBar />
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <UserDataGrid />
      </div>
    </div>
  );
};
