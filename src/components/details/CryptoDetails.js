import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataField from "./CustomDataField";
import { useSelector } from "react-redux";

const CryptoDetails = () => {
  const userDetails = useSelector((state) => state?.app?.userDetails);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Crypto Details</Typography>
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
              name={"Coin"}
              value={userDetails?.coin}
              iconName={"CurrencyBitcoinIcon"}
            />{" "}
            <CustomDataField
              name={"Wallet"}
              value={userDetails?.wallet}
              iconName={"WalletIcon"}
            />{" "}
            <CustomDataField
              name={"Network"}
              value={userDetails?.network}
              iconName={"Diversity3Icon"}
            />{" "}
            <CustomDataField
              name={"Role"}
              value={userDetails?.role}
              iconName={"PersonPinIcon"}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CryptoDetails;
