import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Card, CardContent, Grid } from "@mui/material";
import "../../CSS/connectpeople.css";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Filters from "./Filter";
import DashboardHeader from "../../Dashboard/DashboardHeader";
import SearchBar from "../../SearchBar/SearchBar";
import ConnectPeoplePopup from "./ConnectPeoplePopup";
import Popover from "@mui/material/Popover";
import { Icon } from "@iconify/react";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EastIcon from "@mui/icons-material/East";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import RouteIcon from "@mui/icons-material/Route";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { FilterList } from "@mui/icons-material";

function ConnectPeople() {
  const [closeIcon, setCloseicon] = useState(false);
  const [searchResponse, setSearchResponse] = useState([]);
  const mySearchData = response_search => {
    //  take parameter passed from Child component
    setSearchResponse(response_search);
    console.log(searchResponse,"searResponse in connect people")
  };
  const filterCards=searchResponse;
  const filterCards1 = [
    {
      id: 3,
      user_id: 2,
      category: 1,
      user_type: 1,
      photo:
        "http://127.0.0.1:8000/media/Create_trip/user_anju%40gmail.com/trip_None/img_None_Skh7ifQ.jfif",
      name: "Catherin Theresa",
      age_group: "20-30",
      gender: "female",
      tip_expected: "free",
      booking_status: "2",
      date_range_from: null,
      date_range_to: null,
      departing_on: "18-Oct-22",
      flying_from: "florida,usa(frd)",
      airline: "indigo",
      transit1: "",
      airline1: "",
      transit2: "",
      airline2: "",
      transit3: "",
      airline3: "",
      transit4: "",
      airline4: "",
      destination: "hyderabad,india(hyd)",
      prefered_language: "Hindi,english",
      trip_name: "airport layouts",
      short_description: "happy journy",
      meetup_location: "airport gate",
      can_assist_with:
        "Help with flight transits,Assist with filling Documentation",
      assistance_needed: "",
    },
    {
      id: 2,
      user_id: 3,
      category: 2,
      user_type: 2,
      photo:
        "http://127.0.0.1:8000/media/Create_trip/user_anju%40gmail.com/trip_None/img_None_CeJBOSK.jfif",
      name: "John Kennedy",
      age_group: "20-30",
      gender: "female",
      tip_expected: "free",
      booking_status: "1",
      date_range_from: null,
      date_range_to: null,
      departing_on: "18-Jan-2023",
      flying_from: "hyderabad,india(hyd)",
      airline: "airindia",
      transit1: "",
      airline1: "",
      transit2: "",
      airline2: "",
      transit3: "",
      airline3: "",
      transit4: "",
      airline4: "",
      destination: "victoria,australia(vta)",
      prefered_language: "spanish,english",
      trip_name: "airport layouts",
      short_description: "happy journy",
      meetup_location: "airportgate",
      can_assist_with: "",
      assistance_needed: "help me with documentation work",
    },
    {
      id: 1,
      user_id: 1,
      category: 1,
      user_type: 1,
      photo:
        "http://127.0.0.1:8000/media/Create_trip/user_anjani%40gmail.com/trip_None/img_None_4WAu7dj.jfif",
      name: "John Praveen",
      age_group: "50-60",
      gender: "female",
      tip_expected: "50USD",
      booking_status: "1",
      date_range_from: null,
      date_range_to: null,
      departing_on: "18-Jan-23",
      flying_from: "hyderabad,india(hyd)",
      airline: "spicejet",
      transit1: "",
      airline1: "",
      transit2: "",
      airline2: "",
      transit3: "",
      airline3: "",
      transit4: "",
      airline4: "",
      destination: "florida,usa(frd)",
      prefered_language: "telugu",
      trip_name: "airport layouts",
      short_description: "happy journy",
      meetup_location: "airportgate",
      can_assist_with: "Assist with filling Documentation",
      assistance_needed: "",
    },
    {
      id: 4,
      user_id: 3,
      category: 1,
      user_type: 1,
      photo:
        "http://127.0.0.1:8000/media/Create_trip/user_anju%40gmail.com/trip_None/img_None_Skh7ifQ.jfif",
      name: "Vinsent K",
      age_group: "20-30",
      gender: "female",
      tip_expected: "75USD",
      booking_status: "2",
      date_range_from: null,
      date_range_to: null,
      departing_on: "18-Oct-22",
      flying_from: "florida,usa(frd)",
      airline: "Jet Airways",
      transit1: "",
      airline1: "",
      transit2: "",
      airline2: "",
      transit3: "",
      airline3: "",
      transit4: "",
      airline4: "",
      destination: "hyderabad,india(hyd)",
      prefered_language: "spanish,english",
      trip_name: "airport layouts",
      short_description: "happy journy",
      meetup_location: "airport gate",
      can_assist_with:
        "Help with flight transits,Assist with filling Documentation",
      assistance_needed: "",
    },
  ];

  const [filteredList, setFilteredList] = useState(filterCards);

  console.log(filteredList.length + "????????");

  // const [filterData, setFilterData] = useState({});

  // Selected Year filter

  // const filterByLanguage = (filteredDataLanguage) => {
  //   if (!selectedLanguage) {
  //     return filteredDataLanguage;
  //   }

  //   const filteredSlang = filteredDataLanguage.filter(
  //     (slang) =>
  //       slang.prefered_language.split(" ").indexOf(selectedLanguage) !== -1
  //   );
  //   return filteredSlang;
  // };

  // useEffect(() => {
  //   setFilteredList(filterCards);
  // }, []);

  const compare = (backengLan, userLanguage) => {
    console.log(userLanguage, "userLanguage");
    const BL = backengLan.split(",");
    let flag = false;
    if (userLanguage.length < 1) {
      flag = true;
    } else {
      BL.map((field) => {
        userLanguage.map(function (u) {
          if (u == field) {
            flag = true;
          }
        });
      });
    }

    return flag;
  };

  const getFilterData = (filteringValue) => {
    console.log(filteringValue, "obj");
    const dataFilter = filterCards.filter(
      (bookingStatus) =>
        (bookingStatus.booking_status == filteringValue.booking_status ||
          filteringValue.booking_status == "") &&
        (bookingStatus.airline == filteringValue.airline ||
          filteringValue.airline == "") &&
        (bookingStatus.tip_expected == filteringValue.tip_expected ||
          filteringValue.tip_expected == "") &&
        compare(
          bookingStatus.prefered_language,
          filteringValue.prefered_language
        )
    );
    console.log(dataFilter, "dataFilter");
    setFilteredList(dataFilter);
  };

  // console.log()
  const handleClick = () => {
    setCloseicon(true);
  };
  const handleClose = () => {
    {
      setCloseicon(false);
    }
  };
  const open = Boolean(closeIcon);
  const id = open ? "simple-popover" : undefined;



  // const [searchResponse, setSearchResponse] = useState([]);





  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="connectpeopleHeading">
        Connect <span style={{ color: "#1ec28b" }}>People</span>
      </div>
      <div>
        <SearchBar mySearchData={mySearchData}/>
      </div>

      <div className="connectpeole-main">
        <div>
          <Box
            sx={{
              width: 350,
              height: "auto",
              marginBottom: 10,
              backgroundColor: "",
              "&:hover": {
                backgroundColor: "",
              },
            }}
          >
            <div>
              <Filters onSubmit={getFilterData} />
            </div>
          </Box>
        </div>

        <div className="loadMoreReasultsDiv">
          <div>
            <h1 className="searchResultsHeading">Search Results</h1>
          </div>

          <Box
            sx={{
              width: "auto",
              marginRight: "20px",
              height: "auto",
              backgroundColor: "rgb(30 194 139 / 10%)",
              "&:hover": {
                backgroundColor: "",
              },
            }}
          >
            <div>
              {filteredList.length > 0 ? (
                <Grid container spacing={2} className="connectpeople-MainCard">
                 
                  {Object.entries(filteredList).length > 0 &&
                    filteredList.map((item, index) => (
                      <Grid item xs={6} key={index}>
                        <Card className="connectpeople-Card">
                          <CardContent>
                            <b className="connectpeople-contentCat">
                              {item.name}
                            </b>
                          </CardContent>

                          <div className="connectpeople-container">
                            <div className="connectpeople-inner">
                              <img
                                className="connectpeople-img"
                                variant="top"
                                src={item.photo?item.photo:"./Assets/Images/human_dummy_image.jpg"}
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
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - {item.date_range_from} to {item.date_range_to}</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon>{item.booking_status==1?"Booked":"Yet to book"}</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon>{item.prefered_language}</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>{item.trip_name}</span>
                    </Grid>
                    <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <AttachMoneyIcon style={{ color: "#1ec38b" }}></AttachMoneyIcon>
                      <span style={{marginLeft: "15px"}}>Tip I Expect - {item.tip_expected}</span>
                      </Grid>
           
          </CardContent> 
                          {/* <CardContent className="connectpeople-date">
                            <Icon
                              icon="clarity:date-outline-badged"
                              // className="CalendarMonthRoundedIcon"
                            />
                            <p>{item.booking_status}</p>
                          </CardContent> */}

                          {/* <CardContent>
                            <div className="languageDiv">
                              <LanguageRoundedIcon className="LanguageRoundedIconConnectCard"></LanguageRoundedIcon>
                              <p className="languageText">
                                {item.prefered_language}
                              </p>
                            </div>
                          </CardContent> */}

                          {/* <CardContent>
                            <div className="languageDiv">
                              <LanguageRoundedIcon className="LanguageRoundedIconConnectCard"></LanguageRoundedIcon>
                              <p className="languageText">
                                {item.departing_on}{" "}
                              </p>
                            </div>
                          </CardContent> */}

                          {/* <CardContent>
                            <div className="tipAmount">
                              <p className="">{item.airline}</p>
                            </div>
                          </CardContent> */}

                          {/* <CardContent>
                            <div className="tipAmount">
                              <p className="">{item.tip_expected}</p>
                            </div>
                          </CardContent> */}

                          <Button
                            aria-describedby={id}
                            variant="contained"
                            onClick={handleClick}
                            className="connectpeople-cardButton"
                          >
                            Connect
                          </Button>

                          <Popover id={id} open={open} closeIcon={closeIcon}>
                            <ConnectPeoplePopup onChildClick={handleClose} />
                          </Popover>
                        </Card>

                        {/* return <Card />  */}
                      </Grid>
                    ))}

                  <div className="loadmoreDiv" style={{ color: "#1ec28b" }}>
                  {Object.entries(filteredList).length > 0?(   <p className="loadMoreText">
                      Load more Results <ArrowDownwardIcon />
                    </p>):null}
                  </div>
                </Grid>
              ) : (
                <Grid container spacing={2} className="connectpeople-MainCard">
                  {filterCards.map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Card className="connectpeople-Card">
                        <CardContent>
                          <b className="connectpeople-contentCat">
                            {item.name}
                          </b>
                        </CardContent>

                        <div className="connectpeople-container">
                          <div className="connectpeople-inner">
                            <img
                              className="connectpeople-img"
                              variant="top"
                              src={item.photo?item.photo:"./Assets/Images/human_dummy_image.jpg"}
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
                    marginRight: "4px" }}></CalendarMonthOutlinedIcon>Date Range - {item.date_range_from} to {item.date_range_to}</span>
                     </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <FlightIcon style={{ color: "#1ec38b" }}></FlightIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    > <FlightIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></FlightIcon>{item.booking_status==1?"Booked":"Yet to book"}</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <LanguageIcon style={{ color: "#1ec38b" }}></LanguageIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><LanguageIcon style={{ color: "#1ec38b", marginBottom: "-5px",
                    marginRight: "4px" }}></LanguageIcon>{item.prefered_language}</span>
                    </Grid>
            <Grid container
                spacing={2}
                style={{    marginTop: 10,
                  marginLeft: 0}}>
                    {/* <ModeOfTravelIcon style={{ color: "#1ec38b" }}></ModeOfTravelIcon> */}
                    <span 
                    // style={{marginLeft: "15px"}}
                    ><ModeOfTravelIcon style={{ color: "#1ec38b",marginBottom: "-5px",
                    marginRight: "4px" }}></ModeOfTravelIcon>{item.trip_name}</span>
                    </Grid>
                    <Grid container
                  spacing={2}
                  style={{    marginTop: 10,
                    marginLeft: 0}}>
                      <AttachMoneyIcon style={{ color: "#1ec38b" }}></AttachMoneyIcon>
                      <span style={{marginLeft: "15px"}}>Tip I Expect - {item.tip_expected}</span>
                      </Grid>
           
          </CardContent> 




                        {/* <CardContent className="connectpeople-date">
                          <Icon
                            icon="clarity:date-outline-badged"
                            // className="CalendarMonthRoundedIcon"
                          />
                          <p>Journey Date - 03/07/2022</p>
                        </CardContent> */}
{/* 
                        <CardContent>
                          <div className="languageDiv">
                            <LanguageRoundedIcon className="LanguageRoundedIconConnectCard"></LanguageRoundedIcon>
                            <p className="languageText">
                              {item.prefered_language}
                            </p>
                          </div>
                        </CardContent> */}

                        {/* <CardContent>
                          <div className="languageDiv">
                            <LanguageRoundedIcon className="LanguageRoundedIconConnectCard"></LanguageRoundedIcon>
                            <p className="languageText">
                              {item.departing_on} to{" "}
                            </p>
                          </div>
                        </CardContent> */}

                        {/* <CardContent>
                          <div className="tipAmount">
                            <p className="">{item.airline}</p>
                          </div>
                        </CardContent> */}

                        <Button
                          aria-describedby={id}
                          variant="contained"
                          onClick={handleClick}
                          className="connectpeople-cardButton"
                        >
                          Connect
                        </Button>

                        <Popover id={id} open={open} closeIcon={closeIcon}>
                          <ConnectPeoplePopup onChildClick={handleClose} />
                        </Popover>
                      </Card>

                      {/* return <Card />  */}
                    </Grid>
                  ))}

              <div className="loadmoreDiv" style={{ color: "#1ec28b" }}>
              {Object.entries(filterCards).length > 0?(   <p className="loadMoreText">
                      Load more Results <ArrowDownwardIcon />
                    </p>):null}
                  </div>
                </Grid>
              )}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}

export default ConnectPeople;
