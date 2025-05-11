import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import './styles.css';

function TopBar({ userName }) {
  const location = useLocation();

  let appContext = "";
  if (location.pathname.includes("/users/")) {
    appContext = userName;
  } else if (location.pathname.includes("/photos")) {
    appContext = `Photos of ${userName}`;
  }

  return (
    <AppBar position="static" className="AppBar">
      <Toolbar className="Toolbar">
        <Typography variant="h6" className="Typography">
          Phạm Văn Đức - B22DCCN245
        </Typography>

        <Box className="Box">
          {appContext ? (
            <Typography variant="body1">{appContext}</Typography>
          ) : (
            <Typography variant="body1">Home</Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
