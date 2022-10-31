import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import "../../CSS/pastTrip.css";
import { Button, Card, CardContent, Grid } from "@mui/material";
import SidebarLink from "../SidebarLink";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import RouteIcon from "@mui/icons-material/Route";
import EastIcon from "@mui/icons-material/East";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import LanguageIcon from "@mui/icons-material/Language";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import PastTripPopup from "./PastTripPopup";

const PastTrip = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

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
          <Box className="pastdashbox">
            <div>
              <p className="recieved-text">Past Trips</p>
            </div>
            {/* <div>
              <InputBase  sx={{ p: "10px" }} className="search-btn" placeholder="Search" />
              <IconButton
                className="search-btn-icon"
                type="submit"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div> */}
            {/* <div>
              <p className="upcoming-text">Upcoming Trips </p>
            </div> */}
            {/* <Grid container spacing={2} className="">
              <Grid item xs={4}>
                <div>
                  <Card className="card-Uptrip">
                    <div className="card-Uptripcontainer">
                      <div className="card-Uptrip-inner">
                        <img
                          className="carduptrip-img"
                          variant="top"
                          src="./Assets/Images/I2.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent className="uptrip-name">
                      Franklin Kumar
                    </CardContent>
                    <CardContent className="uptrip-date">
                      Journey Date - 03/07/2022
                    </CardContent>
                    <CardContent className="uptrip-city">Delhi</CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Card className="card-Uptrip">
                    <div className="card-Uptripcontainer">
                      <div className="card-Uptrip-inner">
                        <img
                          className="carduptrip-img"
                          variant="top"
                          src="./Assets/Images/I1.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <CardContent className="uptrip-name">Aishwarya</CardContent>
                    <CardContent className="uptrip-date">
                      Journey Date - 10/10/2022
                    </CardContent>
                    <CardContent className="uptrip-city">Kolkota</CardContent>
                  </Card>
                </div>
              </Grid>
            </Grid> */}

            <Grid container spacing={2} className="">
              <Grid item xs={4} className="">
                <div>
                  <Card className="card-past-trip1">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Priya</Grid>
                       
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-past-trip-inner">
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
                    <Button className="accept-btn">Details</Button>
                    {/* <Button className="cancel-btn">Cancel</Button> */}
                    <Grid style={{ marginTop: "20px" }}>
                      <Button onClick={showModal} variant="outlined" sx={{ color: 'black', borderColor: '#1ec28b',borderRadius: '18px',fontSize: '11px' }}>
                        UPLOAD YOUR MEMORIES
                      </Button>
                      {modalOpen && <PastTripPopup setOpenModal={showModal} />}
                    </Grid>
                    
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4} sx={{ mr: 12 }} className="">
                <div>
                  <Card className="card-past-trip2">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Suresh</Grid>
                       
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-past-trip-inner">
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
                    <Button className="accept-btn">Details</Button>
                    {/* <Button className="cancel-btn">Cancel</Button> */}
                    <Grid style={{ marginTop: "20px" }}>
                      <Button variant="outlined" sx={{ color: 'black', borderColor: '#1ec28b',borderRadius: '18px',fontSize: '11px' }}>UPLOAD YOUR MEMORIES</Button>
                    </Grid>
                  </Card>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="">
              <Grid item xs={4} className="">
                <div>
                  <Card className="card-past-trip3">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Pragalya Sri</Grid>
                       
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-past-trip-inner">
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
                    <Button className="accept-btn">Details</Button>
                    {/* <Button className="cancel-btn">Cancel</Button> */}
                    <Grid style={{ marginTop: "20px" }}>
                      <Button variant="outlined" sx={{ color: 'black', borderColor: '#1ec28b',borderRadius: '18px',fontSize: '11px' }}>UPLOAD YOUR MEMORIES</Button>
                    </Grid>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={4} className="">
                <div>
                  <Card className="card-past-trip4">
                  <CardContent>
                      <Grid container>
                        <Grid item xs={6} style={{textAlign: "initial"}}>Surya</Grid>
                       
                      </Grid>
                    </CardContent>
                    <div className="card-recentcontainer">
                      <div className="card-past-trip-inner">
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
                   marginLeft: 0}}
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
                    <Button className="accept-btn">Details</Button>
                    {/* <Button className="cancel-btn">Cancel</Button> */}
                    <Grid style={{ marginTop: "20px" }}>
                      <Button variant="outlined" sx={{ color: 'black', borderColor: '#1ec28b',borderRadius: '18px',fontSize: '11px' }}>UPLOAD YOUR MEMORIES</Button>
                    </Grid>
                  </Card>
                </div>
              </Grid>
            </Grid>
            <div style={{ color: "pink", marginTop: 34, marginLeft: -40 }}>
              Load more Results
              <span>
                <ArrowCircleDownSharpIcon />
              </span>
            </div>
          </Box>
        </div>
        <EditProfile></EditProfile>
      </div>
    </>
  );
};

export default PastTrip;
