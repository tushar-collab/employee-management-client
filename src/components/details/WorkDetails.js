import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const WorkDetails = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Work details</Typography>
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
                name={"Company Name"}
                value={userDetails?.department}
                iconName={"BusinessIcon"}
              />{" "}
              <CustomDataField
                name={"Department"}
                value={userDetails?.companyName}
                iconName={"GroupsIcon"}
              />{" "}
              <CustomDataField
                name={"Title"}
                value={userDetails?.title}
                iconName={"SubtitlesIcon"}
              />{" "}
              <CustomDataField
                name={"Address"}
                value={userDetails?.companyAddress}
                iconName={"HomeIcon"}
              />
              <CustomDataField
                name={"Address - II"}
                value={
                  userDetails?.companyCity +
                  ", " +
                  userDetails?.companyState +
                  ", " +
                  userDetails?.companyStateCode
                }
                iconName={"HomeIcon"}
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
                name={"Country"}
                value={userDetails?.companyCountry}
                iconName={"PublicIcon"}
              />{" "}
              <CustomDataField
                name={"Postal Code"}
                value={userDetails?.companyPostalCode}
                iconName={"Numbers"}
              />{" "}
              <CustomDataField
                name={"Latitude"}
                value={userDetails?.companyAddressLat}
                iconName={"LocationOnIcon"}
              />{" "}
              <CustomDataField
                name={"Longitude"}
                value={userDetails?.companyAddressLong}
                iconName={"LocationOnIcon"}
              />{" "}
              <CustomDataField
                name={"EIN"}
                value={userDetails?.ein}
                iconName={"Numbers"}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default WorkDetails;
