import React from "react";
import { Divider, List, ListItem, ListItemText,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css"; // Đảm bảo đã import đúng file CSS

function UserList() {
    const users = models.userListModel();

    return (
      <div className="user-list-container">
        <Typography variant="h6" className="user-list-title">User List</Typography>
        <List component="nav">
          {users.map((item) => (
            <div key={item._id}>
              <ListItem component={Link} to={`/users/${item._id}`} className="user-list-item">
                <ListItemText
                  primary={`${item.first_name} ${item.last_name}`}
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
