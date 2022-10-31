import { Grid } from "@mui/material";
import React from "react";
import "../../CSS/createTripCSS/createTrip.css";
// import DashboardHeader from "../../Dashboard/DashboardHeader";
import VerticalStepper from "./VerticalStepper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";
import "./CreateTripNew.css"

function CreateTripNew() {

  const stepperData=[
    {
    Maintext:"Traveller Details",
    subText:"Give the traveller details"
    },
    {
    Maintext:"Airport, Airline& Language",
    subText:"Select your airport, airline and language details"
    },
    {
     Maintext:"Trip Details",
    subText:"Give your trip name and short description"
    },
    {
    Maintext:"Full Details about Trip",
    subText:"Details about your full trip"
     }
]
  return (

    <>
    <div sx={{width:"100%"}}>
    <DashboardHeader/>
      <div>
      <div className="createTripHeading">
        Create a <span style={{ color: "#1ec28b" }}>Trip</span>
      </div>
      <h3 className="createTripHeadingText">
        "The world is a book and those who do not travel read only one page."
      </h3>

      <div>
        <img
          src="./Assets/Images/CreatetripPageImage.png"
          alt="createTripImage"
          className="createTripImage"
        />
      </div>
      </div>
     

     
    <div>
      <div className="createTripStepperHeading">
        Follow the simple steps to create a trip. (4/4)
      </div>

      <div></div>


      <Grid container spacing={2} style={{ marginLeft: 0}}>
          <Grid item 
          style={{ 
            marginLeft:"5rem", 
            display: "flex",
            alignItems:"center",
            justifyContent:"sapce-between",
            backgroundColor:"",
            width:"100%"
             }}>
            <div style={{ marginLeft:0}}>
              <div className="createTripStepTravellerText">
                Traveller Details
              </div>

              <div className="createTripStepTravellerSubText">
                Give the traveller{" "}
                <span style={{ marginLeft:0 }}>details</span>
              </div>
             
            </div>

            <div style={{ marginLeft: 0}}>
              <div className="createTripStepDestinationText">
                Airport, Airline& <span>Language</span>
              </div>

              <div className="createTripStepDestinationSubText">
                Select your airport, airline and language details{" "}
              </div>
             
            </div>

            <div style={{ marginLeft: 0 }}>
              <div className="createTripStepText">Trip Details</div>

              <div className="createTripStepSubText">
                Give your trip name and short description
              </div>
             
            </div>

            <div style={{ marginLeft: 0 }}>
              <div className="createTripStepFullDetailText">
                Full Details about Trip
              </div>

              <div className="createTripStepFullDetailSubText">
                Details about your full trip
               
              </div>
             
            </div>
          </Grid>
        </Grid>



        <Grid  >
          <Grid >
            <div className="">
              <VerticalStepper  />
            </div>
          </Grid>
        </Grid>

        <div className="createTripBack">
          <Link to="/HomePage">
          <span>
            <ArrowBackIcon  style={{color: "#1ec28b"}} />
          </span>
          </Link>
          <div>Back To Homepage</div>
        </div>
      </div>
    </div>
  
    </>
  );
}
export default CreateTripNew;
