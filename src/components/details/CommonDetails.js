import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const CommonDetails = () => {
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
            {userDetails?.firstName} {userDetails?.maidenName}{" "}
            {userDetails?.lastName}
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
              name={"Email"}
              value={userDetails?.email}
              iconName={"EmailIcon"}
              />{" "}
            <CustomDataField
              name={"Phone"}
              value={userDetails?.phone}
              iconName={"PhoneIcon"}
              />{" "}
            <CustomDataField
              name={"Age"}
              value={userDetails?.age}
              iconName={"Numbers"}
              />{" "}
            <CustomDataField
              name={"DOB"}
              value={userDetails?.birthDate}
              iconName={"CakeIcon"}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CommonDetails;
