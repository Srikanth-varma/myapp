import { Box, Grid } from "@mui/material";
import DashboardHeader from "../Dashboard/DashboardHeader";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
// import "../../CSS/DesiCommunity.css";
import "../CSS/DesiCommunity.css"

function DesiCommunity() {
  return (
    <div>
      <DashboardHeader />
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            }
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="desiCommunityMainHeading"
            >
              <h2 className="DCHeading">
                Travel Companion <span>by Community </span>
                <span style={{ color: "#1ec28b" }}> Desi</span>
                <span> Community</span>
              </h2>
              <div className="halfHr">
                <hr className="hrDesi"></hr>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="makeMyMoneyText">
                Make money on your travel back home (India, Pakistan,
                Bangladesh, Nepal, Sri Lanka) or abroad by being a paid travel
                companion to others.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="globeFlightImageDesi"
                  src="./Assets/Images/I_2.jpg"
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="itServiceDestText">
                Our desi nature is always to help others in need, being a paid
                travel companion is like getting paid to help someone on your
                travel abroad or back home. No additional efforts other than
                assisting a travel companion and being a support. Getting paid
                is an additional perk for the help that most of desi’s are
                always willing to do!!
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <img
                  className="ruReadyImg"
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
          </Grid>{" "}
        </Box>
      </div>
    </div>
  );
}
export default DesiCommunity;
