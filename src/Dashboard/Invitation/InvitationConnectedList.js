import React from "react";
import "../../CSS/conncetedList.css";
import { Box, Container, Grid, IconButton, InputBase, Typography } from "@mui/material";
import SidebarLink from "../SidebarLink";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader"
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import SearchIcon from "@mui/icons-material/Search";


function InvitationConnectedList() {

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
      <Box className="connectedListBox">
        <p className="connectedListText">Connected List</p>
        <div>
              <InputBase  sx={{ p: "10px" }} className="connectedListsearchbtn" placeholder="Search" />
              <IconButton
                className="connectedListsearchbtnicon"
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
            <div className="conncetedListbox">
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
              <Typography className="connectedListTharaText">
              Chennai
              </Typography>
              <div className="connectedListProfile">PROFILE</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="conncetedListbox">
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
              <Typography className="connectedListAbdulText">
                {" "}
                Trivandrum
              </Typography>
              <div className="connectedListProfile">PROFILE</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="conncetedListbox">
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
              <Typography className="sentListPallaviText">
                {" "}
                Mumbai
              </Typography>
              <div className="connectedListProfile">PROFILE</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="conncetedListbox">
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
              <Typography className="connectedListKoushikText">
                {" "}
                Kolkata
              </Typography>
              <div className="connectedListProfile">PROFILE</div>
            </div>
          </Grid>
        </Grid>

        {/* <div style={{color:"pink",marginTop: 34,marginLeft: -134}}>Load more Results</div> */}
        <div style={{ color: "pink", marginTop: 34, marginLeft: -40 }}>
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



export default InvitationConnectedList