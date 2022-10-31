import { Box, Container, Grid, IconButton, InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../CSS/message.css";
import SearchIcon from "@mui/icons-material/Search";
import DashboardHeader from "../DashboardHeader";
import EditProfile from "../EditProfile";
import SidebarLink from "../SidebarLink";

import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
function Message() {
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
      <Box className="message">
        <p className="messageText">Message</p>
        <div>
              <InputBase  sx={{ p: "10px" }} className="messagesearchbtn" placeholder="Search" />
              <IconButton
                className="messagesearchbtnicon"
                type="submit"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div>
        <Grid container spacing={2} className="messageContainer">
          <Grid item xs={2}></Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="messagebox">
              <div className="messagecontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I1.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="messageThara"> Thara Joseph</Typography>
              <Typography className="messageTharaText">
                Hello...This is tara...
              </Typography>
              <div className="messageCount">10</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="messagebox">
              <div className="messagecontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I2.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="messageAbdul">Abdul Rahuman</Typography>
              <Typography className="messageAbdulText">
                {" "}
               when will u come back
              </Typography>
              <div className="messageCount">01</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="messagebox">
              <div className="messagecontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I3.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="messagePallavi"> Sai Pallavi</Typography>
              <Typography className="messagePallaviText">
                {" "}
                Good Morning..have a great day..
              </Typography>
              <div className="messageCount">07</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="messagebox">
              <div className="messagecontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I4.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="messageKoushik">
                {" "}
                Koushik Chandar
              </Typography>
              <Typography className="messageKoushikText">
                {" "}
                what about plan
              </Typography>
              {/* <div className="messageCount">10</div> */}
            </div>
          </Grid>
        </Grid>

        {/* <div style={{color:"pink",marginTop: 34,marginLeft: -134}}>Load more Results</div> */}
        <div style={{ color: "pink", marginTop: 34, marginLeft: -45 }}>
          Load more Results
         <span><ArrowCircleDownSharpIcon/></span>
        </div>
      </Box>
    </div>
<EditProfile></EditProfile>
      </div>
    </>












    
  );
}
export default Message;