import React, { useEffect, useState } from "react";
import "../../CSS/createTripCSS/fullDetails.css";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Radio,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import Swal from "sweetalert2";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";
import Tc from "./Tc.PNG";
import { Language } from "@mui/icons-material";

function FullDetails(props) {
  const { values } = props;
  const DeleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };

  const btnEl = document.querySelector(".btn");
  const toggleOptions = () => {
    const wrapperEl = document.querySelector(".wrapper");
    const iconEl = btnEl.querySelector("i");
    wrapperEl.classList.toggle("active");
    if (iconEl.classList.contains("ri-share-line")) {
      iconEl.classList.replace("ri-share-line", "ri-close-line");
    } else {
      iconEl.classList.replace("ri-close-line", "ri-share-line");
    }
  };
  // btnEl.addEventListener('click',toggleOptions);

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div>
      {/* <h6 className="fullDetailStep">Step(4/4)</h6> */}
      <h3 className="fullDetailHeading">Full Details about Trip</h3>
      <div className="fullDetailhrlines"></div>
      <Container className="fullDetailmain">
        <div style={{ display: "flex" }}>
          <Button
            className="fullDetailEdit"
            endIcon={
              // <Link to="/travellerDetails">
              <EditIcon fontSize="initial" style={{ fill: "white" }} />
              // </Link>
            }
          >
            Edit
          </Button>

          <Button
            className="fullDetailDelete"
            endIcon={
              <DeleteIcon fontSize="initial" style={{ fill: "white" }} />
            }
            onClick={() => {
              DeleteHandler();
            }}
          >
            Delete
          </Button>

          <div className="fullDetailIcons">
            <Grid container spacing={2}>
              <Grid item xs={2} style={{ display: "contents" }}>
                {isShown && (
                  <div>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                  </div>
                )}
              </Grid>
              <Grid item xs={2}>
                {" "}
                <IconButton className="fullDetailShare">
                  <ShareOutlinedIcon onClick={handleClick} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* <div>
          <FlightTakeoffOutlinedIcon
            style={{ fill: "#f6348f", marginLeft: 410, marginTop: 15 }}
          />
        </div> */}
        <Grid
          container
          spacing={2}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   flexDirection: "column",
          // }}
          className="fullDetailGrid"
        >
          <div
            // style={{
            //   width: "80%",
            //   display: "flex",
            //   flexDirection: "column",
            // }}
            className="fullDetailImageGrid"
          >
            <img
              src={Tc}
              // style={{
              //   width: "100%",
              //   height: "100%",
              // }}
              className="fullDetailImage"
            ></img>
          </div>
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   width: "80%",
            // }}
            className="fullDetailText"
          >
            <div>
              <div>{values.flying_from}</div>
              <div style={{ marginTop: 10, color: "#1ec28b" }}>Flying from</div>
            </div>
            <div>
              <div>{values.destination}</div>
              <div style={{ marginTop: 10, color: "#1ec28b" }}>Destination</div>
            </div>
          </div>
        </Grid>

        <Card className="fullDetailCard">
          <div className="fullDetailTravellerCountry">
            <div className="fullDetailTravellerText">Traveller details </div>
            <Grid container spacing={2}>
              <Grid item xs={2} className="fullDetailTravellerDetail">
                <div>
                  Name <span>:</span>
                </div>
                <div>
                  Age Group <span>:</span>
                </div>
                <div>
                  Gender <span>:</span>
                </div>
                {values.category === "1" && (
                  <div>
                    Tip I Expect <span>:</span>
                  </div>
                )}
              </Grid>
              <Grid item xs={2} className="fullDetailTravellerCountryNames">
                <div>{values.name}</div>
                <div>{values.age_group}</div>
                <div>{values.gender}</div>
                {values.category === "1" && <div>{values.tip_expected}</div>}
              </Grid>
            </Grid>
          </div>
          {/* <div className="fullDetailcontainer">
            <div className="fullDetailinner">
              <img
                className="fullDetailimgRes"
                variant="top"
                src="./Assets/Images/I1.png"
                alt="..."
              />
            </div>
          </div> */}

          {values.booking_status === "1" ? (
            <div>
              {/* <Grid
                container
                spacing={2}
                className="fullDetailTravellerCountryText"
              >
                <div className="fullDetailTravellerBookingStatus">
                  Booking Status
                  <span>:</span>
                </div>

                <Grid
                  item
                  xs={2}
                  className="fullDetailTravellerBookingStatusName"
                >
                  <div>:{values.booking_status}</div>
                </Grid>
              </Grid> */}
              {/* <div>Booking Status:{values.booking_status}</div> */}

              <Grid
                container
                spacing={2}
                className="fullDetailTraveller-TravelDate"
              >
                <div className="fullDetailTraveller-TravelDateText ">
                  Travel Date
                  <span>:</span>
                </div>

                <Grid
                  item
                  xs={2}
                  className="fullDetailTraveller-TravelDateName"
                >
                  <div>{values.departing_on.format("DD/MM/YYYY")}</div>
                </Grid>
              </Grid>

              {/* <div>Travel Date:{values.departing_on.format("DD/MM/YYYY")}</div> */}
              <div style={{ display: "flex" }}>
                <div>
                  <Grid
                    container
                    spacing={2}
                    className="fullDetailTraveller-travelFlyingfrom "
                  >
                    <div className="fullDetailTraveller-Flyingfrom">
                      Flying from
                      <span>:</span>
                    </div>

                    <Grid
                      item
                      xs={6}
                      className="fullDetailTraveller-FlyingfromName-flying"
                    >
                      <div>{values.flying_from}</div>
                    </Grid>
                  </Grid>
                </div>
                {/* <div> Flying from :{values.flying_from}</div> */}

                <div>
                  <Grid
                    container
                    spacing={2}
                    className="fullDetailTraveller-travelAirline "
                  >
                    <div className="fullDetailTraveller-Airline">
                      Airline
                      <span>:</span>
                    </div>

                    <Grid
                      item
                      xs={6}
                      className="fullDetailTraveller-AirlineName"
                    >
                      <div>{values.airline}</div>
                    </Grid>
                  </Grid>
                </div>

                {/* <div>Airline :{values.airline}</div> */}
              </div>
              <div>
                {values.airAndTrans.map((field, index) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <Grid
                        container
                        spacing={2}
                        className="fullDetailTraveller-travelTransist "
                      >
                        <div className="fullDetailTraveller-Transist">
                          {`Transit${index + 1}`} <span>:</span>
                        </div>
                        <Grid
                          item
                          xs={6}
                          className="fullDetailTraveller-TransistName"
                        >
                          <div>{field.transit}</div>
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        spacing={2}
                        className="fullDetailTraveller-TransittravelAirline "
                      >
                        <div className="fullDetailTraveller-AirlineSubTransist">
                          {`Airline${index + 1}`}
                          <span>:</span>
                        </div>
                        <Grid
                          item
                          xs={6}
                          className="fullDetailTraveller-TransitAirlineName"
                        >
                          <div>{field.airline}</div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </div>

              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTraveller-Destination">
                    Destination <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTraveller-DestinationName"
                  >
                    <div>{values.destination}</div>
                  </Grid>
                </Grid>
              </div>
              {/* <div>Destination:{values.destination}</div> */}

              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTraveller-Language">
                    Preferred Language <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTraveller-LanguageName"
                  >
                    {values.prefered_language.map((langugage) => {
                      return <div>{langugage.name},</div>;
                    })}
                  </Grid>
                </Grid>
              </div>
              {/* <div>
                Preferred Language:
                {values.prefered_language.map((langugage) => {
                  return <div>{langugage.name},</div>;
                })}
              </div> */}
            </div>
          ) : (
            <div>
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerCountryText"
                >
                  <div className="fullDetailTravellerBookingStatus">
                    Booking Status
                    <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={2}
                    className="fullDetailTravellerBookingStatusName"
                  >
                    <div>{values.booking_status}</div>
                  </Grid>
                </Grid>
              </div>
              {/* <div>Booking Status:{values.booking_status}</div> */}
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTravellerDateRangeFrom ">
                    Date Range From <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={2}
                    className="fullDetailTravellerDateRangeFromName"
                  >
                    <div>{values.date_range_from.format("DD/MM/YYYY")} </div>
                  </Grid>
                </Grid>
                {/* Date Range From:{values.date_range_from.format("DD/MM/YYYY")} */}
              </div>
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTravellerDateRangeTo">
                    Date Range To <span>:</span>{" "}
                  </div>

                  <Grid
                    item
                    xs={2}
                    className="fullDetailTravellerDateRangeToName"
                  >
                    <div>{values.date_range_to.format("DD/MM/YYYY")}</div>
                  </Grid>
                </Grid>
                {/* Date Range To:{values.date_range_to.format("DD/MM/YYYY")} */}
              </div>
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellertravelFlyingfrom "
                >
                  <div className="fullDetailTravellerFlyingfrom">
                    Flying from <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTravellerFlyingfromName"
                  >
                    <div>{values.flying_from}</div>
                  </Grid>
                </Grid>
              </div>

              {/* <div>Flying from :{values.flying_from}</div> */}

              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTravellerDestination">
                    Destination <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTravellerDestinationName"
                  >
                    <div>{values.destination} </div>
                  </Grid>
                </Grid>
              </div>

              {/* <div>Destination:{values.destination}</div> */}

              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTravellerLanguage">
                    Preferred Language <span>:</span>
                  </div>

                  <Grid item xs={6} className="fullDetailTravellerLanguageName">
                    {values.prefered_language.map((langugage) => {
                      return <div>{langugage.name},</div>;
                    })}
                  </Grid>
                </Grid>
              </div>
              {/* <div>
                Preferred Language:
                {values.prefered_language.map((langugage) => {
                  return <div>{langugage.name},</div>;
                })}
              </div> */}
            </div>
          )}

          <div>
            <div>
              <Grid container spacing={2} className="fullDetailTravellerScope">
                <div className="fullDetailTravellerTrip">
                  Trip Name <span>:</span>
                </div>

                <Grid item xs={2} className="fullDetailTraveller-TripName">
                  <div>{values.trip_name}</div>
                </Grid>
              </Grid>
            </div>
            {/* <div>Trip Name:{values.trip_name}</div> */}

            <div>
              <Grid container spacing={2} className="fullDetailTravellerScope">
                <div className="fullDetailTravellerDescription">
                  Description <span>:</span>{" "}
                </div>

                <Grid
                  item
                  xs={6}
                  className="fullDetailTravellerDescriptionName"
                >
                  <div>{values.short_description}</div>
                </Grid>
              </Grid>
            </div>
            {/* <div>Description :{values.short_description}</div> */}

            <div>
              <Grid container spacing={2} className="fullDetailTravellerScope">
                <div className="fullDetailTraveller-MeetupLocation ">
                  Meetup Location <span>:</span>
                </div>

                <Grid
                  item
                  xs={6}
                  className="fullDetailTraveller-MeetupLocationName"
                >
                  <div> {values.meetup_location}</div>
                </Grid>
              </Grid>
            </div>
            {/* <div>Meetup Location:{values.meetup_location}</div> */}
            {values.category === "2" ? (
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTravellerAssistance">
                    Assistance Needed<span>:</span>{" "}
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTravellerAssistanceName"
                  >
                    <div>{values.assistance_needed}</div>
                  </Grid>
                </Grid>
              </div>
            ) : (
              // <div>Assistance Needed:{values.assistance_needed}</div>
              <div>
                <Grid
                  container
                  spacing={2}
                  className="fullDetailTravellerScope"
                >
                  <div className="fullDetailTraveller-CanAssistWith ">
                    Can Assist With <span>:</span>
                  </div>

                  <Grid
                    item
                    xs={6}
                    className="fullDetailTraveller-CanAssistWithName"
                  >
                    <div> {values.can_assist_with}</div>
                  </Grid>
                </Grid>
              </div>
              // <div>Can Assist with:{values.can_assist_with}</div>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default FullDetails;
