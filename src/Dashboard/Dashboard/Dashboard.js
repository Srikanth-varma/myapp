import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import "../../CSS/dashboardpage.css";
import { Button, Card, CardContent, Grid } from "@mui/material";
import SidebarLink from "../SidebarLink";
import NavBar from "../../Components/Header/Header";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link,Navigate} from "react-router-dom";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import EastIcon from "@mui/icons-material/East";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import RouteIcon from "@mui/icons-material/Route";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";

// import DashboardHeader from "../DashboardHeader"
const Dashboard = () => {
  const { auth } = useSelector(state => state);
  // if (!auth.user) {
  //   return <Navigate replace to="/" />;
  // }

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
          <Box className="dashbox">
            <div>
              <InputBase  sx={{ p: "10px" }} className="search-btn-dashboard" placeholder="Search" />
              <IconButton
                className="search-btn-icon"
                type="submit"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div>
            <div>
              <p className="upcoming-text-dashboard">Upcoming Trips </p>
            </div>
            <Grid container spacing={2} className="">
              <Grid item xs={4}>
                <div>
                  <Card className="card-dash-Uptrip1">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Ram Kumar</Grid>
                        <Grid item xs={6} style={{textAlign: "end",color: ""}}><EditIcon style={{marginRight:"10px", color: "#1ec28b"}}></EditIcon><DeleteForeverIcon style={{color: "pink"}}></DeleteForeverIcon></Grid>
                      </Grid>
                    </CardContent>
                    <div className="card-Uptripcontainer">
                      <div className="card-dash-Uptrip-inner">
                        <img
                          className="carduptrip-img"
                          variant="top"
                          src="./Assets/Images/I2.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent style={{fontSize:12,
                      // width: "max-content",
                      lineHeight: "25px"
                      }}>
                      <Grid
                 container
                 
                 style={{    marginTop: 10,
                   marginLeft: 22}}
                >
                   {/* <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} /> */}
                  <span 
                  // item xs={2} 
                  style={{ }}
                  >
                  <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)", marginBottom: "-7px",marginLeft: "-34px"
                      }} /> Coimbatore (CBE) <EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                      }} /> Hyderabad (HYD)<EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                     }} />  New Delhi (DEL)
                  </span>
                  
                </Grid>
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    >  <CalendarMonthOutlinedIcon style={{ color: "#1ec38b",    marginBottom: "-5px",
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon> Yet to Book</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon> Tamil, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    
           
          </CardContent>  
          <Grid style={{    marginTop: "20px",marginBottom: "20px"
}}><Button variant="outlined" sx={{ color: 'black', borderColor: 'pink',borderRadius: '12px',fontSize: '12px' }}>Status-<span style={{color:"green"}}>ACCEPTED</span></Button></Grid>
                    <Button className="accept-btn">Details</Button>
                    <Button className="cancel-btn">Cancel</Button>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Card className="card-dash-Uptrip2">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Vishnu</Grid>
                        <Grid item xs={6} style={{textAlign: "end",color: ""}}><EditIcon style={{marginRight:"10px", color: "#1ec28b"}}></EditIcon><DeleteForeverIcon style={{color: "pink"}}></DeleteForeverIcon></Grid>
                      </Grid>
                    </CardContent>
                    <div className="card-Uptripcontainer">
                      <div className="card-dash-Uptrip-inner">
                        <img
                          className="carduptrip-img"
                          variant="top"
                          src="./Assets/Images/I1.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent style={{fontSize:12,
                      // width: "max-content",
                      lineHeight: "25px"
                      }}>
                    <Grid
                 container
                 
                 style={{    marginTop: 10,
                   marginLeft: 22}}
                >
                   {/* <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} /> */}
                  <span 
                  // item xs={2} 
                  style={{ }}
                  >
                  <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)", marginBottom: "-7px",marginLeft: "-34px"
                      }} /> Coimbatore (CBE) <EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                      }} /> Hyderabad (HYD)<EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                     }} />  New Delhi (DEL)
                  </span>
                  {/* <Grid item xs={2}> */}
                  {/* <EastIcon style={{ color: "#1ec38b" }} /> */}
                  {/* </Grid> */}
                  {/* <Grid item xs={2} style={{ display: "contents" }}> */}
                    {/* Hyderabad (HYD) */}
                  {/* </Grid> */}
                </Grid>
                {/* <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}> */}
                  {/* <Grid item xs={3} style={{ display: "contents" }}> */}
                    {/* (HYD) */}
                  {/* </Grid> */}
                  {/* <Grid item xs={3}> */}
                  {/* <EastIcon style={{ color: "#1ec38b" }} /> */}
                  {/* </Grid> */}
                  {/* <Grid item xs={3} style={{ display: "contents" }}> */}
                    {/* New Delhi (DEL) */}
                  {/* </Grid> */}
                {/* </Grid> */}
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    >  <CalendarMonthOutlinedIcon style={{ color: "#1ec38b",    marginBottom: "-5px",
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon> Yet to Book</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon> Tamil, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    
           
          </CardContent>  

          <Grid style={{    marginTop: "20px",marginBottom: "20px"
}}><Button variant="outlined" sx={{ color: 'black', borderColor: 'pink',borderRadius: '12px',fontSize: '12px' }}>Status-<span style={{color:"pink"}}>WAITING</span></Button></Grid>
                    <Button className="accept-btn">Details</Button>
                    <Button className="cancel-btn">Cancel</Button>
                  </Card>
                </div>
              </Grid>
            </Grid>
            <Grid style={{    marginTop: "20px",marginBottom: "20px"
}}><Button variant="outlined" sx={{ color: 'black', borderColor: 'black',borderRadius: '5px',fontSize: '12px' }}>EXPLORE MORE</Button></Grid>
            <div>
              <p className="recent-text-dashboard">Recent Invites</p>
            </div>
            <Grid container spacing={2} className="">
              <Grid item xs={4} className="">
                <div>
                  <Card className="card-dash-recent1">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Anu Shri</Grid>
                        <Grid item xs={6} style={{textAlign: "end",color: "pink"}}><DeleteForeverIcon></DeleteForeverIcon></Grid>
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-dash-recent-inner">
                        <img
                          className="cardrecent-img"
                          variant="top"
                          src="./Assets/Images/I1.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent style={{fontSize:12,
                      // width: "max-content",
                      lineHeight: "25px"
                      }}>
                     <Grid
                 container
                 
                 style={{    marginTop: 10,
                   marginLeft: 22}}
                >
                   {/* <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} /> */}
                  <span 
                  // item xs={2} 
                  style={{ }}
                  >
                  <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)", marginBottom: "-7px",marginLeft: "-34px"
                      }} /> Coimbatore (CBE) <EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                      }} /> Hyderabad (HYD)<EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                     }} />  New Delhi (DEL)
                  </span>
                  
                </Grid>
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    >  <CalendarMonthOutlinedIcon style={{ color: "#1ec38b",    marginBottom: "-5px",
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon> Yet to Book</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon> Tamil, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    
           
          </CardContent>   
                    <Button className="accept-btn">Accept</Button>
                    <Button className="cancel-btn">Cancel</Button>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4} className="">
                <div>
                  <Card className="card-dash-recent2">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Abdul</Grid>
                        <Grid item xs={6} style={{textAlign: "end",color: "pink"}}><DeleteForeverIcon></DeleteForeverIcon></Grid>
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-dash-recent-inner">
                        <img
                          className="cardrecent-img"
                          variant="top"
                          src="./Assets/Images/I4.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent style={{fontSize:12,
                      // width: "max-content",
                      lineHeight: "25px"
                      }}>
                  <Grid
                 container
                 
                 style={{    marginTop: 10,
                   marginLeft: 22}}
                >
                   {/* <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} /> */}
                  <span 
                  // item xs={2} 
                  style={{ }}
                  >
                  <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)", marginBottom: "-7px",marginLeft: "-34px"
                      }} /> Coimbatore (CBE) <EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                      }} /> Hyderabad (HYD)<EastIcon style={{ color: "#1ec38b", marginBottom: "-7px",
                     }} />  New Delhi (DEL)
                  </span>
                  
                </Grid>
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    >  <CalendarMonthOutlinedIcon style={{ color: "#1ec38b",    marginBottom: "-5px",
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon> Yet to Book</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon> Tamil, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    
           
          </CardContent>  
                    <Button className="accept-btn">Accept</Button>
                    <Button className="cancel-btn">Cancel</Button>
                  </Card>
                </div>
              </Grid>
            </Grid>
            <Grid style={{    marginTop: "20px",marginBottom: "20px"
}}><Button variant="outlined" sx={{ color: 'black', borderColor: 'black',borderRadius: '5px',fontSize: '12px' }}>EXPLORE MORE</Button></Grid>
          </Box>
        </div>
<EditProfile></EditProfile>
      </div>
    </>
  );
};

export default Dashboard;