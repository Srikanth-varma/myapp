import React from "react";
import "./App.css";
// import LogInSide from './Auth/Login/Login';
import SignUp from "./Auth/SignUp/SignUp";
import ForgetPassword from "./Auth/ForgetPassword/forgetPassword";
import ResetPassword from "./Auth/ResetPassword/resetPassword";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Auth/Login/Login";
import ProfilePage from "./Dashboard/ProfilePage/ProfilePage";
// import DashboardPage from './Dashboard/ProfilePage/Dashboard';
import Notification from "./Dashboard/Notification/Notification";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Message from "./Dashboard/Message/Message";
import ProfileEdit from "./Dashboard/ProfilePage/ProfileEdit";
import ConncetedList from "./Dashboard/Invitation/InvitationConnectedList";
import InvitationConnectedList from "./Dashboard/Invitation/InvitationConnectedList";
import InvitationSentList from "./Dashboard/Invitation/InvitationSentList";
import InvitationRecievedList from "./Dashboard/Invitation/InvitationRecievedList";
import Settings from "./Dashboard/Settings/Settings";
import UpComingTrip from "./Dashboard/MyTrips/UpComingTrip";
import PastTrip from "./Dashboard/MyTrips/PastTrip";
import ConnectPeople from "./Pages/ConnectPeople/ConnectPeople";
// import CreateTrip from "./Pages/CreateTrip/CreateTrip";
import CreateTripNew from "./Pages/CreateTripNew/CreateTripNew";
import { useDispatch, useSelector } from "react-redux";
import StudentProfile from "./StudentProfile/StudentProfile";
import AboutUs from "./Pages/AboutUs/AboutUs";
import FAQ from "./FAQandPrivacyPolicy/FAQ";
import PrivacyPolicy from "./FAQandPrivacyPolicy/PrivacyPolicy";
import DesiCommunity from "./DesiCommunity/DesiCommunity";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Ads from "./Pages/AdsPage/Ads";
// srikanth
function App() {
  const { auth } = useSelector((state) => state);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route
            path="/reset-password"
            element={<ResetPassword></ResetPassword>}
          ></Route>
          {/* <Route path='/profile' element={auth.user?<ProfilePage></ProfilePage>:<Login></Login>}></Route>
          <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
           <Route path='/dashboard' element={auth.user?<Dashboard></Dashboard>:<Login></Login>}></Route>
          <Route path='/notification' element={auth.user?<Notification></Notification>:<Login></Login>}></Route>
          <Route path='/message' element={auth.user?<Message></Message>:<Login></Login>}></Route>
          <Route path='/profileEdit' element={auth.user?<ProfileEdit></ProfileEdit>:<Login></Login>}></Route>
          <Route path='/connectedlist' element={auth.user?<InvitationConnectedList></InvitationConnectedList>:<Login></Login>}></Route>
          <Route path='/sentlist' element={auth.user?<InvitationSentList></InvitationSentList>:<Login></Login>}></Route>
          <Route path='/recievedlist' element={auth.user?<InvitationRecievedList></InvitationRecievedList>:<Login></Login>}></Route>
          <Route path='/settings' element={auth.user?<Settings></Settings>:<Login></Login>}></Route>
          <Route path='/upcomingtrip' element={auth.user?<UpComingTrip></UpComingTrip>:<Login></Login>}></Route>
          <Route path='/pasttrip' element={auth.user?<PastTrip></PastTrip>:<Login></Login>}></Route> */}
          {/* <Route path='/createtrip' element={auth.user?<CreateTrip></CreateTrip>:<Login></Login>}></Route>
          <Route path='/connectpeople' element={auth.user?<ConnectPeople></ConnectPeople>:<Login></Login>}></Route> */}
          {/* <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route> */}
          <Route
            path="/profile"
            element={auth.user ? <ProfilePage></ProfilePage> : <Login></Login>}
          ></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          {/* <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> */}
          <Route
            path="/dashboard"
            element={auth.user ? <Dashboard></Dashboard> : <Login></Login>}
          ></Route>
          {/* <Route
            path="/notification"
            element={<Notification></Notification>}
          ></Route> */}
          <Route
            path="/notification"
            element={
              auth.user ? <Notification></Notification> : <Login></Login>
            }
          ></Route>
          <Route path="/message" element={<Message></Message>}></Route>
          {/* <Route
            path="/edit-profile"
            element={<ProfileEdit></ProfileEdit>}
          ></Route> */}
          <Route
            path="/edit-profile"
            element={auth.user ? <ProfileEdit></ProfileEdit> : <Login></Login>}
          ></Route>
          <Route
            path="/connected-list"
            element={<InvitationConnectedList></InvitationConnectedList>}
          ></Route>
          <Route
            path="/sent-list"
            element={<InvitationSentList></InvitationSentList>}
          ></Route>
          <Route
            path="/recieved-list"
            element={<InvitationRecievedList></InvitationRecievedList>}
          ></Route>
          {/* <Route path="/settings" element={<Settings></Settings>}></Route> */}
          <Route
            path="/settings"
            element={auth.user ? <Settings></Settings> : <Login></Login>}
          ></Route>
          <Route
            path="/upcoming-trips"
            element={<UpComingTrip></UpComingTrip>}
          ></Route>
          <Route path="/past-trips" element={<PastTrip></PastTrip>}></Route>
          {/* <Route path="/createtrip" element={<CreateTrip></CreateTrip>}></Route> */}
          \
          <Route
            path="/create-a-trip"
            element={<CreateTripNew></CreateTripNew>}
          ></Route>
          <Route
            path="/connect-people"
            element={<ConnectPeople></ConnectPeople>}
          ></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/student-promotion"
            element={<StudentProfile></StudentProfile>}
          ></Route>
          <Route path="/faq" element={<FAQ></FAQ>}></Route>
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy></PrivacyPolicy>}
          ></Route>
          <Route
            path="/desi-community"
            element={<DesiCommunity></DesiCommunity>}
          ></Route>
          <Route path="/contactus" element={<ContactUs ></ContactUs>}></Route>
          <Route path="/ads" element={<Ads />}></Route>
        </Routes>
        {(() => {
          if (
            window.location.pathname !== "/login" &&
            window.location.pathname !== "/signup" &&
            window.location.pathname !== "/forgot-password" &&
            window.location.pathname !== "/reset-password"
          ) {
            return <Footer></Footer>;
          } else {
            return null;
          }
        })()}
      </BrowserRouter>

      {/* <HomePage></HomePage> */}
    </div>
  );
}
export default App;
