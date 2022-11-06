import { Grid } from "@mui/material";
import React,{ useState } from "react";
import "../../CSS/footer.css";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { NavLink,Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


function Footer(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
            
              <p>
              <NavLink to="/Create-a-Trip" className="footer-nav-links">
              Create a Trip
              </NavLink>
               
                </p>
              <p>
                <NavLink to="/connect-people" className="footer-nav-links">
                Connect People
              </NavLink>
              </p>
              <p>
              <NavLink to="/student-promotion" className="footer-nav-links">
              Student Community
              </NavLink>
              </p>
              <p>
              <NavLink to="/desi-community" className="footer-nav-links">
              Desi Community
              </NavLink>
                </p>
            
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <p className="thirdcolumn">SUPPORT</p>
            <div className="footerLinks2">
            <p>
              <NavLink to="/about-us" className="footer-nav-links">
              About Us
              </NavLink>
              </p>
              <p>
              <NavLink to="/privacy-policy" className="footer-nav-links">
              Privacy Policy
              </NavLink>
                
                </p>
                <p>
              <NavLink to="/faq" className="footer-nav-links">
              FAQs
              </NavLink></p>
              <p>
                <NavLink to="/ads" className="footer-nav-links">
                Ad’s Enquiry
              </NavLink>
              </p>
            

              
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <p className="fourthcolumn">CONTACT US</p>
            <div className="thirdcolumncontent">
              <p className="fourthCoulmn_query">Do you have any queries? Please feel
free to Contact us!!</p>
<Button 
              LinkComponent={Link}
              exact
              to="/contactus"
                // activeClassName="active"
                className="footer-contact-button"
                // onClick={handleClick}
              >
                {" "} <NavLink to="/contactus" style={{textDecoration:"none",color:"black"}}>
                Contact Us <ExpandLessIcon style={{transform: "rotate(90deg)",marginBottom: "-7px"}}/></NavLink>
              </Button>
<div className="emailUnderLine"></div>
              {/* <a
                href="mailto:contact@auxtomate.com?subject=New%20Enquiry%20from%20the%20website"
                style={{
                  textDecoration: "none",
                }}
              >  */}

              <div>{" "}<MailIcon
                style={{ fontSize: "large", color: "#5dcb42" }}
              />{" "}  <span
                  // className="footerMail"
                  style={{ color: "white", fontSize: "large",marginTop: -10 }}
                >
                             contact@travelcompanion.com</span>
                </div>
              {/* </a> */}
             

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
