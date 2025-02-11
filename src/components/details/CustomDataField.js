import { Label, Numbers } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Tooltip } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import PaidIcon from '@mui/icons-material/Paid';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HeightIcon from '@mui/icons-material/Height';
import React from "react";
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GestureIcon from '@mui/icons-material/Gesture';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

const CustomDataField = (props) => {
  const iconMap = {
    Numbers: <Numbers fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    EmailIcon: <EmailIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    PhoneIcon: <PhoneIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    CakeIcon: <CakeIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    LabelIcon: <Label fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    CreditCardIcon: <CreditCardIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    EventIcon: <EventIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    FormatListNumberedRtlIcon: <FormatListNumberedRtlIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    PaidIcon: <PaidIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    ApartmentIcon: <ApartmentIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    PublicIcon: <PublicIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    LocationCityIcon: <LocationCityIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    HomeIcon: <HomeIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    LocationOnIcon: <LocationOnIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    WaterDropIcon: <WaterDropIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    HeightIcon: <HeightIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    MonitorWeightIcon: <MonitorWeightIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    VisibilityIcon: <VisibilityIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    GestureIcon: <GestureIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    FormatColorFillIcon: <FormatColorFillIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    CurrencyBitcoinIcon: <CurrencyBitcoinIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    AccountBalanceWalletIcon: <AccountBalanceWalletIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    WalletIcon: <WalletIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    Diversity3Icon: <Diversity3Icon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    PersonPinIcon: <PersonPinIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    BusinessIcon: <BusinessIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    GroupsIcon: <GroupsIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
    SubtitlesIcon: <SubtitlesIcon fontSize={"small"} style={{ color: props?.color || "#1976d2" }} />,
  };

  function getIcon(iconName) {
    const IconComponent =
      iconName && iconMap[iconName] ? iconMap[iconName] : iconMap["LabelIcon"];
    return IconComponent;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          margin: "4px 0 10px 0",
        }}
      >
        {getIcon(props.iconName)}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: props?.textBoxWidth || "100%",
          }}
        >
          <span
            style={{
              fontSize: props?.fontSize || "14px",
              opacity: "80%",
              fontFamily: "poppins, sans-serif",
              fontWeight: "bolder",
            }}
          >
            {props?.name}
          </span>
          <span
            style={{
              fontSize: props?.fontSize || "14px",
              fontFamily: "poppins, sans-serif",
            }}
          >
            <Tooltip title={props?.value || "N/A"}>
              {props?.value || "N/A"}
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomDataField;