import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`photo/photosOfUser/${userId}`)
      .then((data) => setPhotos(data))
      .catch((err) => console.error("Error fetching user photos:", err));
  }, [userId]);

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        User has not uploaded any photos yet.
      </Typography>
    );
  }

  return (
    <div className="user-photos-container">
      {photos.map((photo) => (
        <Card key={photo._id} className="photo-card">
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`} // Cập nhật đường dẫn ảnh hợp lý
            alt={photo.file_name}
            className="photo-image"
          />
          <CardContent className="photo-info">
            <Typography className="photo-upload-time">
              Uploaded at: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            {photo.comments && photo.comments.length > 0 ? (
              <div className="photo-comments-section">
                {photo.comments.map((comment) => (
                  <div key={comment._id} className="comment-card">
                    <Typography variant="body2">
                      <Link to={`/users/${comment.user._id}`} className="comment-user-link">
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>{" "}
                      commented at {new Date(comment.date_time).toLocaleString()}
                    </Typography>
                    <Typography variant="body1" className="comment-text">
                      {comment.comment}
                    </Typography>
                  </div>
                ))}
              </div>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
