import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BottomNavigation } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{ height: 32, display: "flex", alignItems: "center" }}
    >
      <Typography variant="body2" align="center" color="white">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
