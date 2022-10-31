import "../CSS/sidebarLink.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../CSS/sidebarLink.css";
import { Drawer, Grid, List, Paper } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

import { logout } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";

function SidebarLink() {
  const dispatch = useDispatch();

  const [dashboardState, setDashboardState] = React.useState(false);

  const DashboardMenu = () => {
      setDashboardState(!dashboardState);
  };

  const [MyTripsState, setMyTripsState] = React.useState(false);

  const MyTripsMenu = () => {
      setMyTripsState(!MyTripsState);
  };
  const [InvitationsState, setInvitationsState] = React.useState(false);

  const InvitationsMenu = () => {
      setInvitationsState(!InvitationsState);
  };


  const logOut = () => {
    dispatch(logout());
  };


  return (
    <div className="link">
      
      <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    >

      <ListItemButton onClick={DashboardMenu} style={{}}>
        <ListItemIcon className="listItemicon">
          {/* <InboxIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {dashboardState ? <ExpandLess className="sidebaricon"/> : <ExpandMore className="sidebaricon" />}
      </ListItemButton>
      <Collapse in={dashboardState} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton LinkComponent={Link} to='/profile'  sx={{ pl: 12 }}>
            <ListItemIcon >
              <AccountCircleTwoToneIcon className="sidebaricon"/>
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }} onClick={MyTripsMenu}>
            <ListItemIcon >
              <StarBorder className="sidebaricon"/>
            </ListItemIcon>
            <ListItemText primary="My Trips" />
            {MyTripsState ? <ExpandLess className="sidebaricon"/> : <ExpandMore className="sidebaricon"/>}
          </ListItemButton>
          <Collapse in={MyTripsState} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
             <ListItemButton LinkComponent={Link} to='/upcoming-trips' sx={{ pl: 12 }}>
            <ListItemIcon >
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Upcoming Trip" />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to='/past-trips' sx={{ pl: 12 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Past Trip" />
          </ListItemButton>
          </List>
      </Collapse>
          <ListItemButton sx={{ pl: 12 }} onClick={InvitationsMenu}>
            <ListItemIcon >
              <InsertInvitationIcon className="sidebaricon"/>
            </ListItemIcon>
            <ListItemText primary="Invitations" />
            {InvitationsState ? <ExpandLess className="sidebaricon"/> : <ExpandMore className="sidebaricon"/>}
          </ListItemButton>
          <Collapse in={InvitationsState} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
             <ListItemButton LinkComponent={Link} to='/connected-list' sx={{ pl: 12 }}>
            <ListItemIcon >
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Connected List" />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to='/sent-list' sx={{ pl: 12 }}>
            <ListItemIcon >
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Sent List" />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to='/recieved-list' sx={{ pl: 12 }}>
            <ListItemIcon >
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Recieved List" />
          </ListItemButton>
          </List>
      </Collapse>
          <ListItemButton LinkComponent={Link} to='/notification' sx={{ pl: 12 }}>
          {/* <Link to='/notification'> */}
            <ListItemIcon >
              <NotificationsIcon className="sidebaricon"/>
            </ListItemIcon>
            <ListItemText primary="Notification" />
            {/* </Link> */}
          </ListItemButton>
          {/* <ListItemButton LinkComponent={Link} to='/message' sx={{ pl: 12 }}>
            <ListItemIcon >
              <ChatBubbleSharpIcon className="sidebaricon"/>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton> */}
              <ListItemButton LinkComponent={Link} to='/dashboard' sx={{ pl: 12 }}>
          {/* <Link to='/notification'> */}
            <ListItemIcon >
              {/* <NotificationsIcon className="sidebaricon"/> */}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {/* </Link> */}
          </ListItemButton>
        </List>
      </Collapse>
     
      <ListItemButton LinkComponent={Link} to='/settings'>
        <ListItemIcon >
          {/* <NotificationsIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton  onClick={logOut}>
        <ListItemIcon >
          {/* <DraftsIcon /> */}
        </ListItemIcon >
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
            

          
      
      
    </div>








  );
}
export default SidebarLink;


