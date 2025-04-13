import React from "react";
import {Typography} from "@mui/material";
import { useParams, Link } from 'react-router-dom';
import models from '../../modelData/models';
import "./styles.css"; 

function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    return (
      <div className="user-detail-container">
        <h2>{user.first_name} {user.last_name}</h2>
        <p>Location: 
          {user.location ? (
            <span dangerouslySetInnerHTML={{ __html: user.location }} />
          ) : (
            <span className="no-data">Location not available</span>
          )}
        </p>
        <p>Occupation: 
          {user.occupation ? (
            <span dangerouslySetInnerHTML={{ __html: user.occupation }} />
          ) : (
            <span className="no-data">Occupation not available</span>
          )}
        </p>
        <p>Description: 
          {user.description ? (
            <span dangerouslySetInnerHTML={{ __html: user.description }} />
          ) : (
            <span className="no-data">Description not available</span>
          )}
        </p>
        <Link to={`/photos/${user._id}`}>
          View Photos
        </Link>
      </div>
    );
}

export default UserDetail;
