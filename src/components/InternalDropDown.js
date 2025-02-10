import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

export const InternalDropDown = (props) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 150 }}>
        <Select
          displayEmpty
          value={props.category}
          label="Category"
          onChange={props.handleCategoryChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Category</em>;
            }
            return selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"First Name"}>First Name</MenuItem>
          <MenuItem value={"Last Name"}>Last Name</MenuItem>
          <MenuItem value={"SSN"}>SSN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
