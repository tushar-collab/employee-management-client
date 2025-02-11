import { Typography } from "@mui/material";
import React from "react";
import CommonDetails from "./CommonDetails";
import { useSelector } from "react-redux";
import Image from "mui-image";
import AddressDetails from "./AddressDetails";
import BioLogicalDetails from "./BioLogicalDetails";
import BankDetails from "./BankDetails";
import WorkDetails from "./WorkDetails";
import CryptoDetails from "./CryptoDetails";

const Details = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0 10px 0 10px",
          alignItems: "center",
        }}
      >
        <Image
          src={userDetails?.image}
          alt={userDetails?.firstName}
          height="10%"
          width="10%"
        />
        <Typography variant="h5" gutterBottom>
          {userDetails?.firstName} {userDetails?.maidenName}{" "}
          {userDetails?.lastName}
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CommonDetails />
        <AddressDetails />
        <BioLogicalDetails />
        <BankDetails />
        <WorkDetails />
        <CryptoDetails />
      </div>
    </div>
  );
};

export default Details;
