import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "../../CSS/profilePage.css";
import { Grid,Button } from "@mui/material";
import SidebarLink from "../SidebarLink";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader"
import CreateIcon from '@mui/icons-material/Create';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Icon } from '@iconify/react';
import EditIcon from "@mui/icons-material/Edit";
import { Link } from 'react-router-dom';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WcIcon from '@mui/icons-material/Wc';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
// import "../../CSS/sidebarLink.css";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";

function ProfilePage() {
  const { isLoggedIn,user } = useSelector(state => state.auth);
console.log("user_id",user.user_id)
const [profileData,setProfileData]=useState({});
useEffect(
()=>{
  axios
  .get(`http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/user/profile/${user.user_id}/`)
  .then((response) => {
    console.log(response,"profile response")
    
      if (response.data) {
   
       console.log(response.data,"profile response data");
       setProfileData(response.data[0]);
    
      }

    
  }) .catch((error) => {
    // Error
    if (error.response.status===400) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      
    }
})
}
,[])




       
  return (
    <>
      <DashboardHeader></DashboardHeader>
    <div className="myprofile-main">
      <div>
        <Box
          sx={{
            width: 350,
            height: 600,
            backgroundColor: "",
            "&:hover": {
              backgroundColor: "aliceblue",
            },
          }}
        >
          <div>
              {/* <div>Dashboard</div>
              <div>Setting</div>
              <div>Logout</div> */}
              <SidebarLink></SidebarLink>
          </div>
        </Box>
      </div>
      <div>
      <div >
                <p className="myprofile-text">My Profile</p>
            </div>
        <Box className="profile-box"
          sx={{
            width: "90%",
            height: 300,
            borderRadius: "15px",
            boxShadow: "1px 2px 2px 1px #d6e1df",
            backgroundColor: "aliceblue",
            "&:hover": {
              backgroundColor: "",
            },
          }}
        >

          
          <Grid container spacing={2} className="">
             
             <Grid>
             {/* <p className="myprofile-text">edit icon</p> */}
             {/* <CreateIcon className="profile-edit-Icon"></CreateIcon> */}
             <Button LinkComponent={Link} to="/edit-profile" className="profile-edit-btn1"  endIcon={<EditIcon className='' style={{marginBottom:"1px",fontSize:"15px"}} />}>
            Edit Profile
          </Button>
             </Grid>
          </Grid>
          <Grid container spacing={2} className="">
          <Grid xs={4} className="profile-pic-container">
       
                 <Grid>
                    <div className="myprofile-inner">
                      <img
                        className="myprofile-img"
                        variant="top"
                        // src="./Assets/Images/I2.png"
                        src={profileData.profile_picture ==null?"./Assets/Images/human_dummy_image.jpg":profileData.profile_picture}
                        alt="..."
                      />
                    {/* <div className="change-photo"> <AddCircleRoundedIcon className="AddCircleRoundedIcon "></AddCircleRoundedIcon>Change Photo</div> */}
                    </div>
                   
                    </Grid> 
                    <Grid className="profile-nam"> 
                    {/* Ram Kumar */}
                    {profileData.full_name}
                    </Grid>
                    
                    
            </Grid>
                 
          
           
            <Grid xs={8} className=""> 
              <Grid className="profile-desc"><p className="profile_about"> About</p>
             <span className="profile-commas"> <Icon icon="fluent:comma-20-filled" rotate={2}  color="#1ec28b"/><Icon icon="fluent:comma-20-filled" rotate={2} color="#1ec28b" className="comma2"/></span>
            <p className="profile-text">
            {/* I am outgoing, dedicated, and open-minded. I get across
to people and adjust to change. */}
{profileData.about}
</p> </Grid></Grid>
         
          </Grid>
          
        </Box>
        <Grid className="profile_data" spacing={4}>
                
                 
                 <Grid >
                 <Grid sx={{mb:1.5}} className="profile-dob" ><GroupsOutlinedIcon className="profiledataIcons" sx={{mr:1.5}}></GroupsOutlinedIcon>Age Group <span className="profile-date">: {profileData.age_group}</span></Grid>
                  <Grid sx={{mb:1.5}} className="profile-dob"><WcIcon className="profiledataIcons" sx={{mr:1.5}}></WcIcon>Gender : {profileData.gender}</Grid>
                  <Grid sx={{mb:1.5}} className="profile-dob" ><EmailIcon className="profiledataIcons" sx={{mr:1.5}}></EmailIcon>Email <span className="profile-date">: {profileData.email_id}</span></Grid>

                  <Grid sx={{mb:1.5}} className="profile-dob"><CallIcon className="profiledataIcons" sx={{mr:1.5}}></CallIcon>Mobile Number <span className="profile-date">: {profileData.country_code}{profileData.mobile_number}</span></Grid>
                  <Grid sx={{mb:1.5}} className="profile-dob"><PublicIcon className="profiledataIcons" sx={{mr:1.5}}></PublicIcon>Country <span className="profile-date">: {profileData.country}</span></Grid>
                  <Grid sx={{mb:1.5}} className="profile-dob"><TempleHinduIcon className="profiledataIcons" sx={{mr:1.5}}></TempleHinduIcon>State/Province <span className="profile-date">: {profileData.state}</span></Grid>
                  </Grid>
                  </Grid> 
      </div>
{/* <EditProfile></EditProfile> */}
    </div>
  </>
  );
}

export default ProfilePage;
