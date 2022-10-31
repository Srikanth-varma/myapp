import React from 'react'
import { Button, Card, CardContent, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from 'react-router-dom';
import "../CSS/sidebarLink.css";
function EditProfile() {
  return (
   
    <div>
    <Box
      sx={{
        width: 250,
        height: 300,
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "aliceblue",
        },
      }}
    >
      <div>
        <div className="card-profile">
          <div className="card-profilecontainer">
            <div className="card-profile-inner">
              <img
                className="cardprofile-img-sidebar"
                variant="top"
                src="./Assets/Images/human_dummy_image.jpg"
                alt="..."
              />
            </div>
          </div>
          <CardContent className="profile-name">Ram Kumar</CardContent>
          <Button LinkComponent={Link} to="/edit-profile" className="profile-edit-btn"  endIcon={<EditIcon className='profileEdit-endIcon' style={{marginBottom:"1px",fontSize:"15px"}} />}>
            Edit Profile
          </Button>
        </div>
      </div>
    </Box>
  </div>
  )
}

export default EditProfile