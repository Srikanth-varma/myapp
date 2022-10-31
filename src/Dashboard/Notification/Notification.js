import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../CSS/notification.css";
import DashboardHeader from "../DashboardHeader";
import EditProfile from "../EditProfile";
import SidebarLink from "../SidebarLink";

function Notification() {
  return (
    <>
    <DashboardHeader></DashboardHeader>
    <div className="dashboard-main">
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
      <Box className="notify">
        <p className="notifyText">Notification</p>
        <Grid container spacing={2} className="notifyContainer">
          <Grid item xs={2} className="notifyGrid">
            <div className="notifybox">
            <div className="notifycontainer">
              <div className="notifyinner">
                <img
                  className="notifyImg"
                  variant="top"
                  src="./Assets/Images/I1.png"
                  alt="..."
                />
              </div>
            </div>
                <Typography className="notifyAnu"> Anu Shri</Typography>
                <Typography className="notifyAnuText">  you got a new notification</Typography>
            </div>
          </Grid>
          <Grid item xs={2} className="notifyGrid">
            <div className="notifybox">
            <div className="notifycontainer">
              <div className="notifyinner">
                <img
                  className="notifyImg"
                  variant="top"
                  src="./Assets/Images/I2.png"
                  alt="..."
                />
              </div>
            </div>
                <Typography className="notifyAbdul">Abdul Rahuman</Typography>
                <Typography className="notifyAnuText">  you got a new notification</Typography>
            </div>
          </Grid>
          <Grid item xs={2} className="notifyGrid">
            <div className="notifybox">
            <div className="notifycontainer">
              <div className="notifyinner">
                <img
                  className="notifyImg"
                  variant="top"
                  src="./Assets/Images/I3.png"
                  alt="..."
                />
              </div>
            </div>
                <Typography className="notifyPallavi"> Sai Pallavi</Typography>
                <Typography className="notifyAnuText">  you got a new notification</Typography>
            </div>
          </Grid>
          <Grid item xs={2} className="notifyGrid">
            <div className="notifybox">
            <div className="notifycontainer">
              <div className="notifyinner">
                <img
                  className="notifyImg"
                  variant="top"
                  src="./Assets/Images/I4.png"
                  alt="..."
                />
              </div>
            </div>
                <Typography className="notifyKoushik"> Koushik Chandar</Typography>
                <Typography className="notifyAnuText">  you got a new notification</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>

<EditProfile></EditProfile>
    </div>
  </>
);
}
export default Notification;