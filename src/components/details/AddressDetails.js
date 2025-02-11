import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const AddressDetails = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Address details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0 10px 0 10px",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CustomDataField
                name={"Address"}
                value={userDetails?.address}
                iconName={"HomeIcon"}
              />{" "}
              <CustomDataField
                name={"City"}
                value={userDetails?.city}
                iconName={"ApartmentIcon"}
              />{" "}
              <CustomDataField
                name={"State"}
                value={userDetails?.state}
                iconName={"LocationCityIcon"}
              />{" "}
              <CustomDataField
                name={"Country"}
                value={userDetails?.country}
                iconName={"PublicIcon"}
              />
              <CustomDataField
                name={"State code"}
                value={userDetails?.stateCode}
                iconName={"Numbers"}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CustomDataField
                name={"Postal code"}
                value={userDetails?.postalCode}
                iconName={"Numbers"}
              />{" "}
              <CustomDataField
                name={"Latitude"}
                value={userDetails?.addressLat}
                iconName={"LocationOnIcon"}
              />{" "}
              <CustomDataField
                name={"Longitude"}
                value={userDetails?.addressLong}
                iconName={"LocationOnIcon"}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddressDetails;
