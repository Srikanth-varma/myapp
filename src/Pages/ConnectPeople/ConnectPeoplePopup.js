import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "../../CSS/ConnectPeoplePopup.css";
// import { Card, Container, Grid } from '@mui/material';
import PriceChangeIcon from "@mui/icons-material/PriceChange";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ModeOfTravelRoundedIcon from "@mui/icons-material/ModeOfTravelRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
// import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ConnectPeoplePopup({onChildClick}) {
 
  return (
    <Grid className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          {/* <Link to="/connectpeople"> */}
          <button className="closeIcon" onClick={onChildClick} >
            X
          </button>
          {/* </Link> */}
        </div>
        <div className="popupCatherineImageContainer">
          <img
            src="./Assets/Images/Image_4.jpg "
            className="popupCatherine"
          ></img>
        </div>
        <div className="titleCatherine">
          <h1>Catherin Theresa</h1>
        </div>
        <Grid container className="ageAndGenderContainer">
          <Grid item lg={3} sm={2} md={2} className="ageGroupPopup">
            Age Group : 20 to 30
          </Grid>
          <Grid item lg={2} sm={2} md={2}>
            Gender : Female
          </Grid>
        </Grid>

        <div className="PopupflightTakeoff">
          <div className="dashedImagediv">
            <img
              src="./Assets/Images/Image_1.jpg "
              className="curvedDashedImage"
            ></img>
          </div>
        </div>
        <div className="FlightTakeoffOutlinedContainer">
          <FlightTakeoffOutlinedIcon className="FlightTakeoffOutlinedIconpopup" />
        </div>
        <Grid container spacing={2} className="locationDestinationIcons">
          <Grid item lg={2}>
            <LocationOnRoundedIcon className="locationDestinationMapIcon1" />
          </Grid>
          <Grid item lg={2}>
            <LocationOnRoundedIcon className="locationDestinationMapIcon2" />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="locationDestinationText">
          <Grid item lg={2} className="flyingPheonix">
            <div className="flyingFrom">Flying From</div>
            <div className="Pheonix">Pheonix</div>
            <div className="PHX">(PHX)</div>
          </Grid>
          <Grid item lg={2} className="TransitOneContainer">
            <div className="Transit1">Transit 1</div>
            <div className="LA">Los Angeles</div>
            <div className="LAX">(LAX)</div>
          </Grid>
          <Grid item lg={2} className="TransitTwoContainer">
            <div className="Transit2">Transit 2</div>
            <div className="connectDubaibaiPopup1">Dubai</div>
            <div className="connectDubaibaiPopup1">(DXB)</div>
          </Grid>
          <Grid item lg={2} className="destinationChennaiContainer">
            <div className="connectPopupDestination">Destination</div>
            <div className="connectPopupChennai ">Chennai</div>
            <div className="connectPopupChennai">(MAA)</div>
          </Grid>
        </Grid>
        <div>
          <img
            src="./Assets/Images/Image_2.jpg"
            className="boxDashedImage"
          ></img>
        </div>
        <Grid container spacing={2} className="airlineIndigoContainer">
          <Grid item lg={2}>
            <Grid className="airlineText1">Airline</Grid>
            <Box className="indigoBox1">
              <div className="indigoText">Indigo</div>
            </Box>
          </Grid>
          <Grid item lg={2} className="stopOneContainer">
            <Grid className="airlineText2">Airline</Grid>
            <Box className="indigoBox2">
              <div className="indigoText">Indigo</div>
            </Box>
          </Grid>
          <Grid item lg={2} className="stopTwoContainer">
            <Grid className="airlineText3">Airline</Grid>
            <Box className="indigoBox3">
              <div className="indigoText">Indigo</div>
            </Box>
          </Grid>
        </Grid>
        <Grid container className="dateRangeOuterContainer">
          <Box className="dateBoxContainer">
            <Container className="boxInnerContainerpopup">
              <Grid container spacing={2} className="OuterContainer">
                <Grid item lg={5} xs={5} sm={5} className="iconContainer">
                  <Icon
                    icon="clarity:date-outline-badged"
                    className="CalendarMonthRoundedIcon"
                  />
                  <div className="dateRangepopup">Date</div>
                  <div className="dateBetweenpopup"> 22 JULY 2022 </div>
                </Grid>
                <Grid item lg={2}>
                  <div className="verticleLine"></div>
                </Grid>
                <Grid item lg={5} xs={5} sm={5}>
                  <PriceChangeIcon className="PriceChangeIconConnect" />
                  <div className="tippopup">Tip Expected</div>
                  <div className="USDpopup">100 USD</div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid container spacing={2} className="iamTextContainer">
          <Grid item lg={6} xs={6} sm={6} className="iamLookingText">
            I am looking for a travel companion to explore the various
            <div className="placesInChennai">places in chennai.</div>
          </Grid>
        </Grid>
        <Grid item className="iconsOuterContainer1">
          <Grid container>
            <Grid
              sm={6}
              lg={3}
              md={12}
              xs={6}
              item
              style={{ color: "#1EC28B " }}
              className="ModeOfTravelRoundedIconContainer"
            >
              <ModeOfTravelRoundedIcon className="ModeOfTravelRoundedIcon" />
              <div className="tripName">Trip Name</div>
              <div className="chennaiExplore">Chennai </div>
              <div className="Explore"> Explore</div>
            </Grid>
            <Grid
              sm={6}
              lg={3}
              md={12}
              xs={6}
              item
              style={{ color: "#1EC28B ", marginRight: "-25px" }}
            >
              <PlaceIcon className="PlaceIcon" />
              <div className="meetupLocation">Meetup Location</div>
              <div className="airportGate">Airport Gate</div>
            </Grid>

            <Grid
              item
              sm={6}
              lg={3}
              md={12}
              xs={6}
              // style={{ color: "#1EC28B " }}
              className="preferedLanguageGrid"
            >
              <LanguageRoundedIcon className="LanguageRoundedIcon" />
              <div className="preferedLanguage">Prefered Language</div>
              <div className="languages">Tamil, English</div>
            </Grid>
            <Grid
              item
              sm={6}
              lg={3}
              md={12}
              xs={6}
              style={{ color: "#1EC28B " }}
              className="handshakeContainer"
            >
              <Icon icon="fa-solid:hands-helping" className="handShake" />
              <div className="canAssist">Can Assist with</div>
              <div className="carrryImportant">Carry Important </div>
              <div className="Documents">Documents</div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid className="inviteContainer">
        <div className="popupinviteButton">
          <button className="inviteBtnConnectPeople1">INVITE</button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ConnectPeoplePopup;


