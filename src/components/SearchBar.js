import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { InternalDropDown } from "./InternalDropDown";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();

  const { setupStatus } = useSelector(
    (state) => ({
      setupStatus: state.app.setupStatus,
    }),
    shallowEqual
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {};
    if (category === "All") {
      payload = { name: searchTerm, searchType: "All" };
    } else if (category === "First Name") {
      payload = { name: searchTerm, searchType: "Fname" };
    } else if (category === "Last Name") {
      payload = { name: searchTerm, searchType: "Lname" };
    } else {
      payload = { name: searchTerm, searchType: "Ssn" };
    }
    dispatch({ type: "DO_SEARCH", payload: payload });
  };

  const handleReset = () => {
    setSearchTerm("");
    setCategory("All");
    dispatch({ type: "DO_SEARCH", payload: {} });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "10px",
        width: "100%",
      }}
    >
      <TextField
        disabled={!setupStatus}
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        placeholder="Search"
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchTerm.length > 2) {
            handleSubmit(e);
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginLeft: -15 }}>
              <InternalDropDown
                handleCategoryChange={handleCategoryChange}
                category={category}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Search">
                <IconButton
                  type="submit"
                  onClick={handleSubmit}
                  disabled={
                    searchTerm === "" || searchTerm.length < 3 ? true : false
                  }
                  style={{
                    color:
                      searchTerm === "" || searchTerm.length < 3
                        ? "grey"
                        : "#03A9F4",
                    "&:hover": {
                      color:
                        searchTerm === "" || searchTerm.length < 3
                          ? "grey"
                          : "#01579B",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Clear">
                <IconButton
                  type="reset"
                  onClick={handleReset}
                  disabled={
                    searchTerm === "" || searchTerm.length < 3 ? true : false
                  }
                  style={{
                    color:
                      searchTerm === "" || searchTerm.length < 3
                        ? "grey"
                        : "#03A9F4",
                    "&:hover": {
                      color:
                        searchTerm === "" || searchTerm.length < 3
                          ? "grey"
                          : "#01579B",
                    },
                  }}
                >
                  <RestartAltIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
