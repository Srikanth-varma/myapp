import React, { Fragment, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
  InputLabel,
  MenuItem,
  InputAdornment,
  InputBase,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { CardImg } from "react-bootstrap";
import "../../CSS/HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ExploreCarousle from "./ExploreCarousle";
import Header from "../../Components/Header/Header";
import MenuIcon from "@mui/icons-material/Menu";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchBar from "../../SearchBar/SearchBar";
import RouteIcon from "@mui/icons-material/Route";
import EastIcon from "@mui/icons-material/East";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import axios from "axios";
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

const HomePage = () => {
  const [selectedDate, handleDateChange] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [category, setCategory] = React.useState("");

  const handleChangecategory = (event) => {
    setCategory(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

///latest post axios post func///
const latestPost=()=>{
  axios
  .get(" http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/latest-posts/")
  .then((response) => {
    console.log(response,"latest post response")
   
      }

    
  ) .catch((error) => {
    // Error
    if (error.response.status===400) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        
    }
});
}
latestPost();
///explore by country axios post func///
const exploreByCountry=()=>{
  axios
  .get(" http://127.0.0.1:8000/explore/?destination1=india&destination2=united")
  .then((response) => {
    console.log(response,"exploreByCountry response")
   
      }

    
  ) .catch((error) => {
    // Error
    if (error.response.status===400) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        
    }
});
}
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Grid container component="main" style={{ marginTop: 40 }}>
          <Grid
            id=""
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundColor: "#ffffff",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="homeheading">
              <b>
                <h1>
                  <span className="homeheadingText">
                    Find A{" "}
                    <span style={{ color: "#1ec28b" }}>Travel Buddy</span>,
                  </span>
                </h1>
                <span className="homeheadingText">
                  Share <span style={{ color: "#1ec28b" }}>Coast </span>&
                </span>
                <span className="homeheadingText">
                  {" "}
                  <span style={{ color: "#1ec28b" }}> Experiences</span>{" "}
                </span>
              </b>
            </div>
            <div className="homelandingContent">
              <p>
                Travel makes one modest. You see what a tiny place you occupy in
                the world”- Gustave Flauber
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            align="center"
            // component={Paper}
          >
            <div>
              <img
                src="./Assets/Images/I5.jpg"
                alt="logo"
                // style={{ height: 510, width: 500, marginTop: -20 }}
                className="homelandingImage"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* <Container>
        <div>
          <Box sx={{ width: "100%" }}>
           
            <div className="Onetab-section">
              <Grid container spacing={2} className="OnetabsubHeading">
                <Grid
                  item
                  xs={2}
                  className="Onesource"
                  style={{ marginRight: 75 }}
                >
                 
                  <Paper component="form" className="OnesourcePaper">
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Flying From"
                      inputProps={{ "aria-label": "Flying From" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10" }}
                      aria-label="search"
                    >
                      <FlightTakeoffIcon style={{ fill: "#1ec28b" }} />
                    </IconButton>
                  </Paper>
                </Grid>

                <Grid
                  item
                  xs={2}
                  className="Onedestination"
                  style={{ marginRight: 75 }}
                >
                  
                  <Paper component="form" className="OnesourcePaper">
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Destination"
                      inputProps={{ "aria-label": "Destination" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <LocationOnIcon style={{ fill: "#1ec28b" }} />
                    </IconButton>
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="Onestop"
                  style={{ marginRight: 75 }}
                >
                  
                  <FormControl fullWidth style={{ marginTop: 11 }}>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleChangecategory}
                      sx={{
                        "&.MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#1ec28b"
                          },
                          "&:hover fieldset": {
                            borderColor: "#1ec28b"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1ec28b"
                          }
                        }
                      
                      }}
                    >
                      <MenuItem value={10}>Available Travel Companion</MenuItem>
                      <MenuItem value={20}>
                        Looking for Travel Companion
                      </MenuItem>
                   
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="Onefromdate"
                  style={{ marginRight: 75 }}
                >
                  
                  <CssTextField
                    label="From Date"
                    id="custom-css-outlined-input"
                    type="date"
                    style={{ marginTop: 11 }}
                    InputLabelProps={{ shrink: true, required: true }}
                  />
                  
                </Grid>
                <Grid item xs={2} className="Onetodate">
                 
                
                     <CssTextField
                     label="To Date"
                     id="custom-css-outlined-input"
                     type="date"
                     style={{ marginTop: 11 }}
                     InputLabelProps={{ shrink: true, required: true }}
                   />
             
                </Grid>
              </Grid>
              <Button className="OnesearchButton">
                <Link to="/" className="OnesearchButtonText">
                  Search
                </Link>
              </Button>
            </div>
            
          </Box>
        </div>
      </Container> */}

      <div>
        <SearchBar />
      </div>
      <div>
      <img
                src="./Assets/Images/lemonhatDV.jpg"
                alt="Add"
                style={{marginTop: 57,marginLeft:28,width:"81%" }}
                className=""
              />
      </div>
      {/* <div className="createTmainripBtn">
        <Button className="createTripBtn">
          Create a Trip
        </Button>
      </div> */}

      {/* <div className="homepageaboutUssection">
        <div className="homepageaboutUsHeading">
          <h2>About Travel Companion </h2>
        </div>
        <div className="hraboutUsLine"></div>
        <p className="aboutUs">
          Travel Companion (TC) is one of the most respected and successful one
          in the global travel industry. TC is dedicated to the provision of
          objective, accurate, informative and reliable travel content in
          various formats, including the World Travel Guide for consumers,Travel
          Companion is for travel industry professionals and extensive licensed
          and bespoke content for commercial partners through its specialist
          division. A fast-growing, pioneering and diverse global travel content
          business, contact us to find out more about us.
        </p>
      </div> */}

      {/* <div className="howWorkSection">
        <span className="howWorkHeading">
          <b>How it Works?</b>
        </span>
        <div className="hrhowworkLine"></div>
        <img
          className="howWorkImage"
          src="./Assets/Images/How it works 1.jpg"
          alt="logo"
        />
      </div> */}

      <div className="latestPostsection">
        <div className="latestPostHeading">
          <b>Latest Post</b>
        </div>
        <div className="hrlatestPostsectionLine"></div>

        <Slider
          {...settings}
          className="item"
          // prevArrow={<PreviousBtn></PreviousBtn>}
          // nextArrow={<NextBtn></NextBtn>}
          rows={2}
        >
          <Card className="Cards">
            <CardContent>
              <b className="contentCat">Catherin Theresa</b>
            </CardContent>
            <CardContent className="contentplace">
              <p>“Is looking for a travel companion to New Delhi”</p>
            </CardContent>
            <div className="container">
              <div className="inner">
                <img
                  className="imgRes"
                  variant="top"
                  src="./Assets/Images/I1.png"
                  alt="..."
                />
              </div>
            </div>
            {/* */}
            <CardContent className="crd">

              <RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
             

              {/* <RouteIcon style={{ color: "#1ec28b" }} /> */}
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
            {/* <CardContent className="cardPara">
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to change.
            </CardContent> */}
            <Button className="cardButton">
              <Link to="/" className="cardButtonText">
                Connect
              </Link>
            </Button>
            {/* */}
          </Card>
          <Card className="Cards">
            <CardContent>
              <b className="contentJohn">John Kennedy</b>
            </CardContent>
            <CardContent className="contentplace">
              <p>“Is looking for a travel companion to Trivandrum”</p>
            </CardContent>
            <div className="container">
              <div className="inner">
                <img
                  className="imgRes"
                  variant="top"
                  src="./Assets/Images/I2.png"
                  alt="..."
                />
              </div>
            </div>

            <CardContent className="crd">

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

            {/* <CardContent className="cardPara">
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to change.
            </CardContent> */}
            <Button className="cardButton">
              <Link to="/" className="cardButtonText">
                Connect
              </Link>
            </Button>
          </Card>
          <Card className="Cards">
            <CardContent>
              <b className="contentPraveen">John Praveen</b>
            </CardContent>
            <CardContent className="contentplace">
              <p>“Is looking for a travel companion to Trivandrum”</p>
            </CardContent>
            <div className="container">
              <div className="inner">
                <img
                  className="imgRes"
                  variant="top"
                  src="./Assets/Images/I3.png"
                  alt="..."
                />
              </div>
            </div>

            <CardContent className="crd">

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
            {/* <CardContent className="cardPara">
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to change.
            </CardContent> */}
            <Button className="cardButton">
              <Link to="/" className="cardButtonText">
                Connect
              </Link>
            </Button>
          </Card>
          <Card className="Cards">
            <CardContent>
              <b className="contentVinsent">Vinsent K</b>
            </CardContent>
            <CardContent className="contentplace">
              <p>“Is looking for a travel companion to Trivandrum”</p>
            </CardContent>
            <div className="container">
              <div className="inner">
                <img
                  className="imgRes"
                  variant="top"
                  src="./Assets/Images/I4.png"
                  alt="..."
                />
              </div>
            </div>

            <CardContent className="crd">

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

            {/* <CardContent className="cardPara">
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to change.
            </CardContent> */}
            <Button className="cardButton">
              <Link to="/" className="cardButtonText">
                Connect
              </Link>
            </Button>
          </Card>
        </Slider>
        <Button className="homeexploreButton">
          {" "}
          <span className="homeexploreMore">EXPLORE More</span>
        </Button>
      </div>

      <div className="exploreSection">
        <span className="exploreSectionHeading">
          <b>Explore by Country</b>
        </span>
        <div className="hrexploreLine"></div>

        <ExploreCarousle />
      </div>
      <div className="howWorkSection">
        <span className="howWorkHeading">
          <b>How it Works?</b>
        </span>
        <div className="hrhowworkLine"></div>
        <img
          className="howWorkImage"
          src="./Assets/Images/How it works 1.jpg"
          alt="logo"
        />
      </div>
      <div >
        <span className="companion-selfie-Heading">
          <b>Companion Selfie</b>
        </span>
        <div className="hrcompanion-selfie"></div>
        <Grid container className="comp-selfie">
        <Grid  item
            xs={6}
            sm={6}
            md={6}
            lg={6}
                // spacing={2}
                // style={{    marginTop: 10,
                //   marginLeft: 0}}
                  >
                          <img
                src="./Assets/Images/selfie.jpg"
                alt="selfie"
                // style={{marginTop: 57,marginLeft:28,width:"81%" }}
                className=""
                style={{height: "75%"}}
              />
                     </Grid>
            <Grid  item
            xs={6}
            sm={6}
            md={6}
            lg={6}
                // spacing={2}
                // style={{    marginTop: 10,
                //   marginLeft: 0}}
                  >
                  
                    <Grid><h1 style={{textAlign: "justify",width: "80%",lineHeight: 1.6}}> <span style={{color: "#1ec28b"}}>Anushri</span> with Travel Companion
                    <span style={{color: "#1ec28b"}}> Srilatha</span></h1></Grid>
<Grid container>
<RouteIcon style={{ color: "#1ec28b",transform: "rotate(90deg)" }} />
             

             {/* <RouteIcon style={{ color: "#1ec28b" }} /> */}
             <b>
               <Grid
                 container
                 spacing={2}
                 style={{    marginTop: 1,
                   marginLeft: 15}}
               >
                 <Grid item xs={2} style={{ display: "contents" }}>
                 Phoenix (PHX)
                 </Grid>
                 {/* <Grid item xs={2}> */}
                 <EastIcon style={{ color: "#1ec38b" }} />
                 {/* </Grid> */}
                 <Grid item xs={2} style={{ display: "contents" }}>
                 Toronto (YYZ)
                 </Grid>
               </Grid>
               <Grid container spacing={2} style={{ marginTop: 10, marginLeft: 15 }}>
               <EastIcon style={{ color: "#1ec38b" }} />
                 <Grid item xs={3} style={{ display: "contents" }}>
                 Dubai (DXB)
                 </Grid>
                 {/* <Grid item xs={3}> */}
                 {/* <EastIcon style={{ color: "#1ec38b" }} /> */}
                 {/* </Grid> */}
                
               </Grid>
             </b>
             </Grid>
           <Grid container>  
           
           
             
             
              <p style={{textAlign: "justify",lineHeight: "250%"}}>
              <FormatQuoteIcon style={{transform: "rotate(180deg)",
    fontSize: 54,
    color: "darksalmon"}}></FormatQuoteIcon>
    A famous quote reads, Travel far enough & you will meet

yourself but there is no denying the fact that while on

the move, you sometime happen to meet a few people

who, unknowingly, enhance your travel experience with

their sheer humanness.</p>
             
             </Grid>
             <Grid style={{textAlign: "justify"}}>
              <ArrowCircleLeftIcon style={{color: "#1ec28b",
    fontSize: 35,
    marginRight: 10}}></ArrowCircleLeftIcon>
              <ArrowCircleRightIcon style={{color: "#1ec28b",
    fontSize: 35,
    }}></ArrowCircleRightIcon>
             </Grid>
                    </Grid>
                    </Grid>
        {/* <img
          className="howWorkImage"
          src="./Assets/Images/How it works 1.jpg"
          alt="logo"
        /> */}
      </div>
      <div>
      <img
                src="./Assets/Images/lemonhatDV.jpg"
                alt="Add"
                style={{marginTop: 57,marginLeft:28,width:"81%" }}
                className=""
              />
      </div>
     
    </>
  );
};

export default HomePage;
