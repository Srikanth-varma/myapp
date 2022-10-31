import { Box, Grid } from "@mui/material";
import Header from "../../Components/Header/Header";
import "../../CSS/Aboutus.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function AboutUs() {
  return (
    <div>
     
        <Header />
        <>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              lg={12}
              xs={12}
              md={12}
              sm={12}
              className="aboutusHeadingText"
            >
              <h1 className="">
                Hello, we’re{" "}
                <span style={{ color: "#1ec28b" }}> Travel Companion..</span>
              </h1>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div>
                <img
                  className="aboutFlightImg"
                  src="./Assets/Images/about_1.jpg"
                  alt="logo"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div>
                <p className="travelAboutusContent">
                  Travel Companion (TC) is one of the most respected and
                  successful one in the global travel industry. TC is dedicated
                  to the provision of objective, accurate, informative and
                  reliable travel content in various formats, including the
                  World Travel Guide for consumers, Travel Companion is for
                  travel industry professionals and extensive licensed and
                  bespoke content for commercial partners through its specialist
                  division.
                </p>
              </div>
            </Grid>

            <Grid>
              <h1 className="travelAboutusContent2">
                A <span style={{ color: "#1ec28b" }}>fast-growing</span>,
                pioneering and diverse global travel content business,{" "}
                <span style={{ color: "#1ec28b" }}>contact us </span>to find out
                more about Travel Companion!!
              </h1>
            </Grid>

            <Grid className="TCImages">
              <div>
                <img
                  src="./Assets/Images/about_2.jpg"
                  alt="images"
                  className="ImageWidth"
                />
              </div>

              <div className="aboutImageThree">
                <img
                  src="./Assets/Images/about_3.jpg"
                  alt="images"
                  className="ImageWidth"
                />
              </div>

              <div className="aboutImageFour">
                <img
                  src="./Assets/Images/about_4.jpg"
                  alt="images"
                  className="ImageWidth"
                />
              </div>

              <div className="aboutImageFive">
                <img
                  src="./Assets/Images/about_5.jpg"
                  alt="images"
                  className="ImageWidth"
                />
              </div>
            </Grid>

            <Grid>
              <div>
                <p className="TCAboutContentText">
                  Travel Companion helps travelers and adventurers to find
                  others who are planning to go to the same destinations at the
                  same time and plan trips together in a group. Our mission is
                  to make sure people who do not want to travel or adventure
                  alone can find other like-minded individuals to travel cities,
                  explore outdoors or spend time in a long airport layover.
                </p>
              </div>
            </Grid>

            <Grid>
              <div>
                <img
                  src="./Assets/Images/about_6.jpg"
                  alt="images"
                  className="questionImg"
                />
                <div>
                  <button className="aboutusContactBtn">
                    Contact Us{" "}
                    <KeyboardArrowRightIcon className="leftArrowContactBtnIcon" />
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default AboutUs;
