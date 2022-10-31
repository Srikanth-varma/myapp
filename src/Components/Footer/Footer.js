import { Grid } from "@mui/material";
import React from "react";
import "../../CSS/footer.css";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
  return (
    <>
      <div className="footerParentContainer">
        <Grid container spacing={2} className="footercontainer">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className="firstcolumn">
              <p className="footerImg">
                {" "}
                <img
                  src="./Assets/Images/TravelCompanion Logo PNG.png"
                  alt="footer logo"
                  className="footerLogo"
                  style={{ width: 280 }}
                />
              </p>
              Travel Companion (TC) is one of the most respected and successful
              one in the global travel industry.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <p className="secondcolumn">LINKS</p>
            <div className="footerLinks">
              <p>About Us</p>
              <p>Create a Trip</p>
              <p>Connect People</p>

              <p>Privacy Policy</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            {/* <p className="secondcolumn"></p> */}
            <div className="footerLinks2">
              <p>Ads</p>
              <p>Student profile</p>
              <p>Desi Community</p>

              <p>XXXXX XXXXX</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <p className="thirdcolumn">CONTACT US</p>
            <div className="thirdcolumncontent">
              <a
                href="mailto:contact@auxtomate.com?subject=New%20Enquiry%20from%20the%20website"
                style={{
                  textDecoration: "none",
                }}
              >
                <p
                  className="footerMail"
                  style={{ color: "white", fontSize: 20 }}
                >
                  contact@travelcompanion.com
                </p>
              </a>
              <div className="emailUnderLine"></div>

              <div>
                {" "}
                <PhoneIcon
                  style={{ fontSize: 20, marginTop: -15, color: "#5dcb42" }}
                />{" "}
                <span style={{ marginTop: -10 }}>+91-99XXXXXXXX </span>
              </div>
              <div style={{ marginTop: 20, lineHeight: 2 }}>
                {" "}
                <span style={{ width: 10 }}> </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="underlinefooter"></div>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={10}>
            <div className="footerDisclaimer">
              © 2022 Travel Companion. All Right Reserved.
            </div>
          </Grid>
          <Grid item xs={2}>
            <Grid container className="FooterIcons" style={{ marginLeft: -60 }}>
              <Grid item xs={2} style={{ color: "#1EC28B " }}>
                <InstagramIcon />
              </Grid>
              <Grid item xs={2} style={{ color: "#1EC28B " }}>
                <FacebookIcon />
              </Grid>
              <Grid item xs={2} style={{ color: "#1EC28B " }}>
                <TwitterIcon />
              </Grid>
              <Grid item xs={2} style={{ color: "#1EC28B " }}>
                <LinkedInIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
