import React, { useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";
import UserDataGrid from "../components/UserDataGrid";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Details from "../components/details/Details";
import { Button, CircularProgress, Typography } from "@mui/material";
import { setOpenDetails } from "../redux/reducer/appSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const {
    openDetails,
    userDetails,
    setUpMessage,
    setupStatus,
    isUserGridLoading,
  } = useSelector(
    (state) => ({
      openDetails: state.app.openDetails,
      userDetails: state.app.userDetails,
      setUpMessage: state.app.setUpMessage,
      setupStatus: state.app.setupStatus,
      isUserGridLoading: state.app.isUserGridLoading,
    }),
    shallowEqual
  );

  const scrollRef = useRef();

  useEffect(() => {
    doInitialSetup();
  }, []);

  useEffect(() => {
    if (setupStatus) fetchUsers();
  }, [setupStatus]);

  useEffect(() => {
    if (openDetails && userDetails && scrollRef?.current) {
      scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [userDetails]);

  const fetchUsers = () => {
    dispatch({ type: "DO_SEARCH", payload: {} });
  };

  const doInitialSetup = () => {
    dispatch({ type: "DO_INITIAL_SETUP" });
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
        {!setupStatus ? (
          setUpMessage ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "15vh",
                gap: "10px",
              }}
            >
              <Typography variant="h6" color="error">
                Failed to setup the application, please contact the admin.
              </Typography>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "15vh",
                gap: "10px",
              }}
            >
              <CircularProgress />
              <Typography variant="h6">
                Getting the things ready, please wait...
              </Typography>
            </div>
          )
        ) : !isUserGridLoading ? (
          <UserDataGrid />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "15vh",
              gap: "10px",
            }}
          >
            <CircularProgress />
            <Typography variant="h6">
              Fetching user data, please wait...
            </Typography>
          </div>
        )}
      </div>
      <div ref={scrollRef}>
        {openDetails && (
          <React.Fragment>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "2rem",
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
            <div style={{ display: "flex", justifyContent: "center" }}>
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
