import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { gridSkeleton } from "./gridSkeleton";
import { Skeleton, Tooltip } from "@mui/material";
import { setSelectedUser } from "../redux/reducer/appSlice";

const columns = [
  { field: "id", headerName: "ID", flex: 1, hide: true },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.firstName || ""}>
          <span>{params?.row?.firstName || ""}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.lastName || ""}>
          <span>{params?.row?.lastName || ""}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "maidenName",
    headerName: "Maiden name",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.maidenName || ""}>
          <span>{params?.row?.maidenName || ""}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "fullName",
    headerName: "Full name",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.fullName || ""}>
          <span>
            {params?.row?.firstName +
              " " +
              params?.row?.maidenName +
              " " +
              params?.row?.lastName}
          </span>
        </Tooltip>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.email || ""}>
          <span>{params?.row?.email || ""}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params?.row?.phone || ""}>
          <span>{params?.row?.phone || ""}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  },
  {
    field: "ssn",
    headerName: "SSN",
    flex: 1,
  },
];

export default function UserDataGrid() {
  const [gridRef, setGridRef] = React.useState(null);

  const { usersData, selectedUser, isUserGridLoading } = useSelector(
    (state) => ({
      usersData: state?.app?.usersData || [],

      selectedUser: state?.app?.selectedUser || [],
      isUserGridLoading: state?.app?.isUserGridLoading || false,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const gridReference = (gridRef) => {
    setGridRef(gridRef);
  };

  const onRowSelectionModelChange = (newRowSelectionModel) => {
    dispatch(setSelectedUser(newRowSelectionModel));
  };

  React.useEffect(() => {
    if (selectedUser.length > 0) {
      dispatch({ type: "FIND_USER", payload: { id: selectedUser[0] } });
    }
  }, [selectedUser]);

  return (
    <Box>
      <DataGrid
        gridReference={gridReference}
        columnVisibilityModel={{ id: false }}
        rows={
          isUserGridLoading
            ? Array.from({ length: 5 }, (_, index) => ({ id: index }))
            : usersData
        }
        columns={gridSkeleton(columns, isUserGridLoading)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowSelectionModel={selectedUser}
        checkboxSelection
        disableMultipleRowSelection={true}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f49848 !important",
          },
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
          },
        }}
      />
    </Box>
  );
}
