import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../CSS/dashboardHeader.css";
// import { NavLink } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function DashboardHeader() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const [createTrip, setcreateTrip] = React.useState(true);
  // console.log("hi im traveller", createTrip);

  // const clickedcreateTrip = () => {
  //   setcreateTrip(true);
  //   setconnectpeople(false);
  // };

  // const [connectpeople, setconnectpeople] = React.useState(false);
  
  // const clickedconnectPeople = () => {
  //   setconnectpeople(true);
  //   setNeedTravell(false);
  //   console.log("hi im traveller", connectpeople);
  // };

  return (
    <>
      <nav className="navbar-dash ">
        <div className="nav-container-dash ">
          <NavLink
            // exact
            to="/"
            className="nav-logo-dash "
          >
            <img
              src="./Assets/Images/TravelCompanion Logo PNG.png"
              alt="logo-img"
              className="navbar-image-dash "
            />
          </NavLink>

          <div className="nav-item-dash ">
            <Button
              style={{}}
              // activeClassName="active"
              className="nav-links-button-login-dash "
            >
              {" "}
              Login
            </Button>
          </div>

          <ul className={click ? "nav-menu-dash  active" : "nav-menu-dash "}>
            <li className="nav-item-dash ">
              <NavLink
                // exact
                to="/create-a-trip"
                // activeClassName="active"
                className="nav-links-dash "
                onClick={handleClick}
               
              >
                Create a Trip
              </NavLink>
            </li>
            <li className="nav-item-dash ">
              <NavLink
                // exact
                to="/connect-people"
                // activeClassName="active"
                className="nav-links-dash "
                onClick={handleClick}
              >
                Connect People
              </NavLink>
            </li>
          </ul>
          {/* <li className="nav-item">
                <Button style={{marginLeft:20}}
                  activeClassName="active"
                  className="nav-links-button"
                  onClick={handleClick}
                >
                  {" "}
                  Login
                </Button>
              </li> */}
          <div className="nav-item-dash ">
            <Icon
              // style={{width:30,height:21,marginTop:-15,marginLeft:40}}
              // activeClassName="active"
              className="nav-links-icon-dash "
              onClick={handleClick}
              icon="clarity:notification-solid-badged"
            />
          </div>
          <div className="nav-item-dash ">
            <div className="nav-item-dash-container">
              <div className="nav-item-dash-inner">
                <img
                  className="nav-item-dash-Img"
                  variant="top"
                  src="./Assets/Images/I1.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
          {/* <li className="nav-item">
                <div
                  // activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  style={{marginTop: -100}}
                >
                  <span className="notifications">Notifications</span>
                </div>
              </li> */}

          {/* <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div> */}
        </div>
      </nav>
    </>
  );
}

export default DashboardHeader;
