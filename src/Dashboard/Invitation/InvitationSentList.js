import React from "react";
import "../../CSS/invitationSentList.css";
import { Box, Container, Divider, Grid, IconButton, InputBase, Typography } from "@mui/material";
import SidebarLink from "../SidebarLink";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader"
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import SearchIcon from "@mui/icons-material/Search";


function InvitationSentList() {

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
      <Box className="sentList">
        <p className="sentListText">Sent List</p>
        <div>
              <InputBase  sx={{ p: "10px" }} className="sentListsearchbtn" placeholder="Search" />
              <IconButton
                className="sentListsearchbtnicon"
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
            <div className="sentListbox">
              <div className="sentListcontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I1.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="sentListThara"> Thara Joseph</Typography>
              <Typography className="sentListharaText">
              Chennai<span style={{ borderLeft: '0.1em solid pink', marginLeft: '5px',paddingLeft: '5px' }}>28/07/2022</span>
              </Typography>
              <div className="sentListProfile">DETAILS</div>
              <div className="sentListCancel">CANCEL</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="sentListbox">
              <div className="sentListcontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I2.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="sentListAbdul">Abdul Rahuman</Typography>
              <Typography className="sentListAbdulText">
                {" "}
                Trivandrum<span style={{ borderLeft: '0.1em solid pink', marginLeft: '5px',paddingLeft: '5px' }}>28/07/2022</span>
              </Typography>
              <div className="sentListProfile">DETAILS</div>
              <div className="sentListCancel">CANCEL</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="sentListbox">
              <div className="sentListcontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I3.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="sentListPallavi"> Sai Pallavi</Typography>
              <Typography className="sentlistPallaviText">
                {" "}
                Mumbai<span style={{ borderLeft: '0.1em solid pink', marginLeft: '5px',paddingLeft: '5px' }}>28/07/2022</span>
              </Typography>
              <div className="sentListProfile">DETAILS</div>
              <div className="sentListCancel">CANCEL</div>
            </div>
          </Grid>
          <Grid item xs={2} className="messageGrid">
            <div className="sentListbox">
              <div className="sentListcontainer">
                <div className="messageinner">
                  <img
                    className="messageImg"
                    variant="top"
                    src="./Assets/Images/I4.png"
                    alt="..."
                  />
                </div>
              </div>
              <Typography className="sentListKoushik">
                {" "}
                Koushik Chandar
              </Typography>
              <Typography className="sentListKoushikText">
                {" "}
                Kolkata<span style={{ borderLeft: '0.1em solid pink', marginLeft: '5px',paddingLeft: '5px' }}>28/07/2022</span>
              </Typography>
              <div className="sentListProfile">DETAILS</div>
              <div className="sentListCancel">CANCEL</div>

            </div>
          </Grid>
        </Grid>

        {/* <div style={{color:"pink",marginTop: 34,marginLeft: -134}}>Load more Results</div> */}
        <div style={{ color: "pink", marginTop: 34, marginLeft: -50 }}>
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



export default InvitationSentList