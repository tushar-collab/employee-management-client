import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", flex: 1, hide: true },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "maidenName",
    headerName: "Maiden name",
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    flex: 1,
    renderCell: (params) =>
      `${params?.row?.firstName || ""} ${params?.row?.maidenName || ""} ${
        params?.row?.lastName || ""
      }`,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  }
];

export default function UserDataGrid() {
  const usersData = useSelector((state) => state?.app?.usersData);

  return (
    <Box>
      <DataGrid
        columnVisibilityModel={{ id: false }}
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        checkboxSelection
        disableMultipleRowSelection={true}
      />
    </Box>
  );
}
