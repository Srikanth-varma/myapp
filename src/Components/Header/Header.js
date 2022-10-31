import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../CSS/navbar.css";
// import { NavLink } from "react-bootstrap";
import { Button } from "@mui/material";
import { NavLink,Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
function NavBar() {
  const { isLoggedIn,user } = useSelector(state => state.auth);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
       <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src="./Assets/Images/TravelCompanion Logo PNG.png"
              alt="logo-img"
              className="navbarImage"
            />
          </NavLink>

       <div className="nav-item">
       <Button
              style={{}}
              activeClassName="active"
              className="nav-links-button-login"
            >
              {" "}
              Login
            </Button>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                // exact
                to="/create-a-trip"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create a Trip
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/connect-people"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Connect People
              </NavLink>
            </li>
            <li className="nav-item">
              <Button style={{marginLeft:20}}
              LinkComponent={Link}
              exact
              to="/login"
                activeClassName="active"
                className="nav-links-button"
                onClick={handleClick}
              >
                {" "}
                Login
              </Button>
            </li>
            <li className="nav-item">
              <Icon style={{width:43,height:21,marginTop:-15,marginLeft:40}}
                activeClassName="active"
                className="nav-links-icon"
                onClick={handleClick}
                icon="clarity:notification-solid-badged"
              />
            </li>
            <li className="nav-item">
              <div
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={{marginTop: -100}}
              >
                <span className="notifications">Notifications</span>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavBar;







