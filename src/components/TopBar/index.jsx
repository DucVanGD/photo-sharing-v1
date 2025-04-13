import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import './styles.css'; 

function TopBar() {
  const location = useLocation(); 
  const { userId } = useParams(); 
  const [userName, setUserName] = useState(""); 

  useEffect(() => {
    if (userId) {
      const user = models.userModel(userId); 
      if (user) {
        // Đoạn này em không hiểu sao nó không set được userName nữa.
        setUserName(user.first_name + " " + user.last_name);  
      } else {
        console.error("User not found for id", userId);
      }
    } else {
      console.error("userId is undefined or not available");
    }
  }, [userId]);

  useEffect(() => {
    console.log("Nguoi dung:", userName);
  }, [userName]);

  let appContext = ""; 
  
  if (location.pathname.includes("/users/")) {
    appContext = `${userName}`; 
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
