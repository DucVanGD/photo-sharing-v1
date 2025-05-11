import React, { useState, useEffect } from "react";
import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData"; 
import "./styles.css";

function UserList() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetchModel("user/list")
      .then((data) => setUsers(data)) 
      .catch((err) => console.error("Error fetching user list:", err));
  }, []);

  return (
    <div className="user-list-container">
      <Typography variant="h6" className="user-list-title">User List</Typography>
      <List component="nav">
        {users.map((item) => (
          <div key={item._id}>
            <ListItem
              component={Link}
              to={`/users/${item._id}`}
              className="user-list-item"
              button
            >
              <ListItemText
                primary={`${item.first_name || ""} ${item.last_name}`} 
                className="user-list-item-text"
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default UserList;
