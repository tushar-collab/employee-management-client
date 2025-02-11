import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const BankDetails = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Bank Details</Typography>
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
              name={"Card Number"}
              value={userDetails?.cardNumber}
              iconName={"CreditCardIcon"}
            />{" "}
            <CustomDataField
              name={"Valid Till"}
              value={userDetails?.cardExpire}
              iconName={"EventIcon"}
            />{" "}
            <CustomDataField
              name={"Card Type"}
              value={userDetails?.cardType}
              iconName={"FormatListNumberedRtlIcon"}
            />{" "}
            <CustomDataField
              name={"Currency"}
              value={userDetails?.currency}
              iconName={"PaidIcon"}
            />{" "}
            <CustomDataField
              name={"Iban"}
              value={userDetails?.iban}
              iconName={"Numbers"}
            />{" "}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BankDetails;
