import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import "../../CSS/explorecarousle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RouteIcon from "@mui/icons-material/Route";
import EastIcon from "@mui/icons-material/East";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ExploreCarousle = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="Prev_btn">
        <ArrowLeftRoundedIcon
          onClick={onClick}
          className="arrowleft"
          style={{ width: "6em", color: "#1ec", height: "6em", marginLeft: 65 }}
        />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="Next_btn">
        <ArrowRightRoundedIcon
          onClick={onClick}
          style={{
            width: "6em",
            color: "#1ec",
            height: "6em",
            marginRight: 65,
          }}
          className="arrowright"
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Box style={{ marginTop: 50 }}>
          <Box sx={{ width: "50%", marginLeft: 20 }} className="boxdiv">
            <Tabs value={value} onChange={handleChange}>
              

              <Tab
                className="exploretabName"
                label="United Kingdom"
                {...a11yProps(0)}
              />
              <Tab className="exploretabName2" label="India" {...a11yProps(1)} />
              <Tab
                className="exploretabName2"
                label="United States"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={1}>
            <div className="sectionExplore ">
              <Slider
                className="exploreitem"
                {...settings}
                // prevArrow={<PreviousBtn></PreviousBtn>}
                // nextArrow={<NextBtn></NextBtn>}
                rows={2}
              >
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentCat">Catherin Theresa</b>
                  </CardContent>
                  <CardContent className="explorecontentIndia">
                  <p>“Is looking for a travel companion to New Delhi”</p>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I1.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">      
              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
             
              <b>
                <Grid
                  container
                  spacing={2}
                  style={{    marginTop: 1,
                    marginLeft: 15}}
                >
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Coimbatore (CBE)
                  </Grid>
                  {/* <Grid item xs={2}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Hyderabad (HYD)
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
                  <Grid item xs={3} style={{ display: "contents" }}>
                    (HYD)
                  </Grid>
                  {/* <Grid item xs={3}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={3} style={{ display: "contents" }}>
                    New Delhi (DEL)
                  </Grid>
                </Grid>
              </b>
           
            </CardContent>
            <CardContent>
            
              <Grid  container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon>
                      <span style={{marginLeft: "15px"}}> Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                       </Grid>
              <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon>
                      <span style={{marginLeft: "15px"}}> Yet to Book</span>
                      </Grid>
              <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon>
                      <span style={{marginLeft: "15px"}}> Tamil, English</span>
                      </Grid>
              <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon>
                      <span style={{marginLeft: "15px"}}>“Trip Name from Create a Trip Page”</span>
                      </Grid>
                      
             
            </CardContent>  
                  {/* <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent> */}
                  <Button className="explorecardButton">
                    <Link to="/" className="explorecardbtntext">
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentJohn">John Kennedy</b>
                  </CardContent>
                  <CardContent className="explorecontentIndia ">
                  <p>“Is looking for a travel companion to Trivandrum”</p>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I2.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    {/* <b>Journey Date - 08/08/2022</b>
                  </CardContent> */}
  {/* <CardContent className="crd"> */}
              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
              <b>
                <Grid
                  container
                  spacing={2}
                  style={{    marginTop: 1,
                    marginLeft: 15}}
                >
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Coimbatore (CBE)
                  </Grid>
                  {/* <Grid item xs={2}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Hyderabad (HYD)
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
                  <Grid item xs={3} style={{ display: "contents" }}>
                    (HYD)
                  </Grid>
                  {/* <Grid item xs={3}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={3} style={{ display: "contents" }}>
                    New Delhi (DEL)
                  </Grid>
                </Grid>
              </b>
            </CardContent>
            <CardContent>
            
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon>
                    <span style={{marginLeft: "15px"}}> Departing Date - 03 Aug 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon>
                    <span style={{marginLeft: "15px"}}> Booked</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon>
                    <span style={{marginLeft: "15px"}}> Malayalam, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon>
                    <span style={{marginLeft: "15px"}}>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <AttachMoneyIcon style={{ color: "#1ec38b" }}></AttachMoneyIcon>
                      <span style={{marginLeft: "15px"}}>Tip I Expect 75 USD</span>
                      </Grid>
          </CardContent> 
                  {/* <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent> */}
                  <Button className="explorecardButton">
                    <Link to="/" className="explorecardbtntext">
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentPraveen ">John Praveen</b>
                  </CardContent>
                  <CardContent className="explorecontentIndia ">
                  <p>“Is looking for a travel companion to Trivandrum”</p>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I3.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    {/* <b>Journey Date - 03/07/2022</b>
                  </CardContent> */}
    {/* <CardContent className="crd"> */}
              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
              <b>
                <Grid
                  container
                  spacing={2}
                  style={{    marginTop: 1,
                    marginLeft: 15}}
                >
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Coimbatore (CBE)
                  </Grid>
                  {/* <Grid item xs={2}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={2} style={{ display: "contents" }}>
                  Trivandrum
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
                  <Grid item xs={3} style={{ display: "contents" }}>
                    (TDM)
                  </Grid>
                 
                  {/* <EastIcon style={{ color: "#1ec38b" }} />
                  
                  <Grid item xs={3} style={{ display: "contents" }}>
                    New Delhi (DEL)
                  </Grid> */}
                </Grid>
              </b>
            </CardContent>
            <CardContent>
            
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon>
                    <span style={{marginLeft: "15px"}}> Date Range - 03 Aug 2022 to 09 Oct 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon>
                    <span style={{marginLeft: "15px"}}> Yet to Book</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon>
                    <span style={{marginLeft: "15px"}}> Tamil, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon>
                    <span style={{marginLeft: "15px"}}>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                   
          </CardContent> 
                  {/* <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent> */}
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentVinsent">Vinsent K</b>
                  </CardContent>
                  <CardContent className="explorecontentIndia ">
                  <p>“Is looking for a travel companion to Trivandrum”</p>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I4.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    {/* <b>Journey Date - 08/08/2022</b>
                  </CardContent> */}
{/* <CardContent className="crd"> */}
              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
              <b>
                <Grid
                  container
                  spacing={2}
                  style={{    marginTop: 1,
                    marginLeft: 15}}
                >
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Coimbatore (CBE)
                  </Grid>
                  {/* <Grid item xs={2}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Hyderabad (HYD)
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
                  <Grid item xs={3} style={{ display: "contents" }}>
                    (HYD)
                  </Grid>
                  {/* <Grid item xs={3}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={3} style={{ display: "contents" }}>
                    New Delhi (DEL)
                  </Grid>
                </Grid>
              </b>
            </CardContent>
            <CardContent>
            
            <Grid  container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <CalendarMonthOutlinedIcon style={{ color: "#1ec38b" }}></CalendarMonthOutlinedIcon>
                    <span style={{marginLeft: "15px"}}> Departing Date - 03 Aug 2022</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon>
                    <span style={{marginLeft: "15px"}}> Booked</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon>
                    <span style={{marginLeft: "15px"}}> Malayalam, English</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon>
                    <span style={{marginLeft: "15px"}}>“Trip Name from Create a Trip Page”</span>
                    </Grid>
                    <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <AttachMoneyIcon style={{ color: "#1ec38b" }}></AttachMoneyIcon>
                      <span style={{marginLeft: "15px"}}>Tip I Expect Negotiable</span>
                      </Grid>
           
          </CardContent> 
                  {/* <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent> */}
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
              </Slider>
            </div>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <div className="sectionExplore ">
              <Slider
                className="exploreitem"
                {...settings}
                rows={2}
                // prevArrow={<PreviousBtn></PreviousBtn>}
                // nextArrow={<NextBtn></NextBtn>}
              >
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentCat">Catherin Theresa</b>
                  </CardContent>
                  <CardContent className="explorecontentplace ">
                  <p>“Is looking for a travel companion to New Delhi”</p>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I1.png"
                        alt="..."
                      />
                    </div>
                  </div>
                  {/* */}
                  <CardContent className="explorecrd">      
              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
             
              <b>
                <Grid
                  container
                  spacing={2}
                  style={{    marginTop: 1,
                    marginLeft: 15}}
                >
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Coimbatore (CBE)
                  </Grid>
                  {/* <Grid item xs={2}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={2} style={{ display: "contents" }}>
                    Hyderabad (HYD)
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
                  <Grid item xs={3} style={{ display: "contents" }}>
                    (HYD)
                  </Grid>
                  {/* <Grid item xs={3}> */}
                  <EastIcon style={{ color: "#1ec38b" }} />
                  {/* </Grid> */}
                  <Grid item xs={3} style={{ display: "contents" }}>
                    New Delhi (DEL)
                  </Grid>
                </Grid>
              </b>
           
            </CardContent>
            {/* <CardContent> */}
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                  {/* */}
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentJohn">John Kennedy</b>
                  </CardContent>
                  <CardContent className="explorecontentplace ">
                    <b>Australia</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I2.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 08/Aug/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentPraveen ">John Praveen</b>
                  </CardContent>
                  <CardContent className="explorecontentplace ">
                    <b>Australia</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I3.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 03/JULY/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentVinsent">Vinsent K</b>
                  </CardContent>
                  <CardContent className="explorecontentplace ">
                    <b>Australia</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I4.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 08/AUG/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
              </Slider>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="sectionExplore ">
              <Slider
                className="exploreitem"
                {...settings}
                // prevArrow={<PreviousBtn></PreviousBtn>}
                // nextArrow={<NextBtn></NextBtn>}
                rows={2}
              >
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentCat">Catherin Theresa</b>
                  </CardContent>
                  <CardContent className="explorecontentUS ">
                    <b>United States</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I1.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 03/AUG/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button className="explorecardButton">
                    <Link to="/" className="explorecardbtntext">
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentJohn">John Kennedy</b>
                  </CardContent>
                  <CardContent className="explorecontentUS ">
                    <b>United States</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I2.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 08/AUG/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button className="explorecardButton">
                    <Link to="/" className="explorecardbtntext">
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentPraveen ">John Praveen</b>
                  </CardContent>
                  <CardContent className="explorecontentUS">
                    <b>United States</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I3.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 03/JUL/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
                <Card className="exploreCards">
                  <CardContent>
                    <b className="explorecontentVinsent">Vinsent K</b>
                  </CardContent>
                  <CardContent className="explorecontentUS ">
                    <b>United States</b>
                  </CardContent>
                  <div className="explorecontainer">
                    <div className="exploreinner">
                      <img
                        className="exploreimg"
                        variant="top"
                        src="./Assets/Images/I4.png"
                        alt="..."
                      />
                    </div>
                  </div>

                  <CardContent className="explorecrd">
                    <b>Journey Date - 08/AUG/2022</b>
                  </CardContent>

                  <CardContent className="explorecardPara">
                    I am outgoing, dedicated, and open-minded. I get across to
                    people and adjust to change.
                  </CardContent>
                  <Button
                    style={{
                      backgroundColor: "#1ec28b",
                      color: "white",
                      border: "none",
                      width: 100,
                      height: 40,
                      fontSize: 15,
                      marginTop: 16,
                      borderRadius: 10,
                    }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Connect
                    </Link>
                  </Button>
                </Card>
              </Slider>
            </div>
          </TabPanel>
        </Box>
        <div style={{ background: "rgb(30 194 139 / 10%)" }}>
          <Button className="exploreButton">
            {" "}
            <span
              className="exploreMore"
              style={{ marginLeft: -60, marginTop: -10 }}
            >
              EXPLORE More
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ExploreCarousle;
