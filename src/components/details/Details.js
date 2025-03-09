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
      {Object.keys(userDetails)?.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Typography variant="h6" color="error">
            User details not available. Please try again later.
          </Typography>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0 10px 0 10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "18vh",
              }}
            >
              <Image src={userDetails?.image} alt={userDetails?.firstName} />
            </div>
            <Typography variant="h5" gutterBottom>
              {userDetails?.firstName} {userDetails?.maidenName}{" "}
              {userDetails?.lastName}
            </Typography>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <CommonDetails />
            <AddressDetails />
            <BioLogicalDetails />
            <BankDetails />
            <WorkDetails />
            <CryptoDetails />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
