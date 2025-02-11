import { Skeleton } from "@mui/material";
import React from "react";

const skeletonCell = () => {
  return <Skeleton  height={30} />;
};

export const gridSkeleton = (gridColumns, loadingState) => {
  return gridColumns.map((column) => {
    return {
      ...column,
      renderCell: (params) => {
        if (loadingState) {
          return <skeletonCell />;
        }
        if (column.getActions) {
          return column.getActions(params);
        }
        if (column.renderCell) {
          return column.renderCell(params);
        }
        return params.value;
      },
    };
  });
};
