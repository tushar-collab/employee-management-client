import React, { useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";
import UserDataGrid from "../components/UserDataGrid";
import { useDispatch, useSelector } from "react-redux";
import Details from "../components/details/Details";
import { Button } from "@mui/material";
import { setOpenDetails } from "../redux/reducer/appSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const openDetails = useSelector((state) => state?.app?.openDetails);
  const userDetails = useSelector((state) => state?.app?.userDetails);

  const scrollRef = useRef();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (openDetails && userDetails && scrollRef?.current) {
      scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [userDetails]);

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
      <div
        style={{
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          color: "#007bff", 
        }}
      >
        <h1>Advanced User Details</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <UserDataGrid />
      </div>
      <div ref={scrollRef}>
        {openDetails && (
          <React.Fragment>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                onClick={() => dispatch(setOpenDetails(false))}
              >
                Close
              </Button>
            </div>
            <div style={{ paddingTop: "1.5rem" }} id="details-section">
              <Details />
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ marginTop: "1rem" }}
              >
                Back to top
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
