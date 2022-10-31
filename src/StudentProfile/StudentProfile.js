import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { Gif } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Header from "../Components/Header/Header";
import "../CSS/StudentProfile.css";

function StudentProfile() {
  return (
    <div>
      <Header />
      <div>
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
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="studentMainHeading"
            >
              <h2 className="TCStudentHeading">
                Travel Companion <span>by Community </span>
                <span style={{ color: "#1ec28b" }}> Students</span>
                <span> Community</span>
              </h2>
              <div className="hrDiv">
                <hr className="hrStudent"></hr>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="makeMoneyText">
                Make money on your travel back home (India, Pakistan,
                Bangladesh, Nepal, Sri Lanka) or to your university abroad by
                being a paid travel companion to others.
              </p>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="homeheading">
                <div>
                  <img
                    className="fortImage"
                    src="./Assets/Images/I_1.jpg"
                    alt="logo"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div>
                <img
                  className="globeFlightImage"
                  src="./Assets/Images/I_2.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="itTechImage"
                  src="./Assets/Images/I_3.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <p className="itServiceText">
                Students are always the strongest pillars of volunteering, being
                a paid travel companion is like getting paid to help someone on
                your travel to university or back home.
              </p>

              <p className="itServiceSecondText">
                No additional efforts other than assisting a travel companion
                and being a support. Getting paid is an additional perk for the
                help that students are always willing to do!!
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="ruReadyText"
                  src="./Assets/Images/I_4.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid className="addYourTrip">
              <h2 className="justAddText">
                Just add your <span style={{ color: "#1ec28b" }}>trip</span>{" "}
                with us and select your{" "}
                <span style={{ color: "#1ec28b" }}>payment</span> you expect!!
              </h2>
            </Grid>
          </Grid>
          <div className="createTripBtn">
            <button className="createBtn">
              <div>CREATE A TRIP</div>
              <div className="ArrowCircleRightRoundedIcon">
                <ArrowCircleRightRoundedIcon />
              </div>
            </button>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="ruReadyText"
                  src="./Assets/Images/I_5.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="ruReadyText"
                  src="./Assets/Images/I_6.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default StudentProfile;
