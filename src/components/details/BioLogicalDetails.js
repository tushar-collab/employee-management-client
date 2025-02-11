import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const BioLogicalDetails = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            Biological Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "0 10px 0 10px",
            }}
          >
            <CustomDataField
              name={"Blood Group"}
              value={userDetails?.bloodGroup}
              iconName={"WaterDropIcon"}
              color={"red"}
            />{" "}
            <CustomDataField
              name={"Height"}
              value={userDetails?.height + " cm"}
              iconName={"HeightIcon"}
            />{" "}
            <CustomDataField
              name={"Weight"}
              value={userDetails?.weight + " kg"}
              iconName={"MonitorWeightIcon"}
            />{" "}
            <CustomDataField
              name={"Eye Color"}
              value={userDetails?.eyeColor}
              iconName={"VisibilityIcon"}
            />{" "}
            <CustomDataField
              name={"Hair Color"}
              value={userDetails?.hairColor}
              iconName={"FormatColorFillIcon"}
            />{" "}
            <CustomDataField
              name={"Hair Type"}
              value={userDetails?.hairType}
              iconName={"GestureIcon"}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BioLogicalDetails;
