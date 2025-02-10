import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { InternalDropDown } from "./InternalDropDown";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    setCategory("All");
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
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        placeholder="Search"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginLeft: -15 }}>
              <InternalDropDown handleCategoryChange={handleCategoryChange} category={category}/>
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
            </InputAdornment>
          ),
        }}
      />
      <Tooltip title="Clear">
        <IconButton
          type="reset"
          onClick={handleReset}
          disabled={searchTerm === "" || searchTerm.length < 3 ? true : false}
          style={{
            color:
              searchTerm === "" || searchTerm.length < 3 ? "grey" : "#03A9F4",
            "&:hover": {
              color:
                searchTerm === "" || searchTerm.length < 3 ? "grey" : "#01579B",
            },
          }}
        >
          <RestartAltIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default SearchBar;
