import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
// import "../../CSS/travellerDetails.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "../../CSS/createTripCSS/travellerDetails.css";

import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Controller, useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

function TravellerDetails(props) {
  const { isLoggedIn,user } = useSelector(state => state.auth);
  // console.log("user_id",user.user_id)

  const [profileData,setProfileData]=useState({});
  useEffect(
  ()=>{
    axios
    .get(`http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/user/profile/${isLoggedIn?user.user_id:null}/`)
    .then((response) => {
      console.log(response,"profile response")
      
        if (response.data) {
     
         console.log(response.data,"profile response data");
         setProfileData(response.data[0]);
      
        }
  
      
    }) .catch((error) => {
      // Error
      if (error.response.status===400) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        
      }
  })
  }
  ,[])



  const { control, values, setValue, errors, register } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "user_type" && value === "1") {
      setValue("age_group", profileData.age_group);
      setValue("name", profileData.full_name);
      setValue("gender", profileData.gender);
      setValue("booking_status", "1");
      setValue("date_range_from", null);
      setValue("date_range_to", null);
      setValue("departing_on", "");
      setValue("airline", "");
    }
    if (name === "user_type" && value === "2") {
      setValue("age_group", "");
      setValue("name", "");
      setValue("gender", "");
      setValue("booking_status", "2");
      setValue("date_range_from", "");
      setValue("date_range_to", "");
      setValue("departing_on", null);
      setValue("airline", "Yet to Book");
    }
    setValue(name, value);
    console.log(name, value, "event");
  };

  // console.log(values,"values")

  console.log();

  useEffect(() => {}, []);

  const ageGroup = [
    {
      id: "20-25",
      name: "20-25",
    },
    {
      id: "26-30",
      name: "26-30",
    },
    {
      id: "31-35",
      name: "31-35",
    },
    {
      id: "36-40",
      name: "36-40",
    },
    {
      id: "41-45",
      name: "41-45",
    },
    {
      id: "46-50",
      name: "46-50",
    },
    {
      id: "51-60",
      name: "51-60",
    },
    {
      id: "61-70",
      name: "61-70",
    },
  ];

  const genderGroup = [
    {
      id: "male",
      name: "Male",
    },
    {
      id: "female",
      name: "Female",
    },
  ];

  return (
    <div className="travellermain">
      <Container>
        <h3 className="travellerHeading">Traveller Details</h3>
        <div className="travellerhrlines"></div>

        <div className="travellerdiv">
          <div>
            <Card
              onClick={() => {
                setValue("category", "2");
                setValue("age_group", "");
                setValue("name", "");
                setValue("gender", "");
                setValue("tip_expected", "Null");
                // setValue("gender", "");
                //
              }}
              className={
                values.category === "2"
                  ? "activeTravellerNeed"
                  : "travellerdNeed"
              }
            >
              <p className="travellerdNeedText">Need a Travell Companion</p>
            </Card>
          </div>
          <div>
            <Card
              onClick={() => {
                setValue("category", "1");
                setValue("age_group", profileData.age_group);
                setValue("name", profileData.full_name);
                setValue("gender",profileData.gender);
                setValue("booking_status", "2");
                setValue("tip_expected", "");
              }}
              className={
                values.category === "1"
                  ? "activeTravellerNeed"
                  : "travellerdNeed"
              }
            >
              <p className="travellerdCompanionText">I am Travell Companion</p>
            </Card>
          </div>
        </div>

        {values.category === "2" && (
          <div>
            <Box>
              <Controller
                name="user_type"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <div className="travellerSelf">
                    <div className="travellerOnBehalfText">
                      On Behalf of Traveller
                    </div>
                    <Radio
                      checked={values.user_type === "2"}
                      onChange={handleChange}
                      value="2"
                      name={name}
                      //  inputProps={{ 'aria-label': 'A' }}
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    {/* <label>On Behalf of Traveller</label> */}
                    <div className="travellerSelfText">Self</div>
                    <Radio
                      checked={values.user_type === "1"}
                      onChange={handleChange}
                      value="1"
                      name={name}
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}

                      //  inputProps={{ 'aria-label': 'A' }}
                    />
                    {/* <label>Self</label> */}
                  </div>
                )}
              />
            </Box>
          </div>
        )}

        <div className="travellerSubHeading">
          <div>
            Profile Photo<span style={{ color: "pink" }}>*</span>
          </div>
          <div className="travellercontainer">
            <div className="travellerinner">
              <div lg={6} className="travellerchangePhoto">
                <Controller
                  name="photo"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <>
                      {values.category === "2" && values.user_type === "2" && (
                        <input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          onChange={(e) => {
                            console.log(e.target.files[0], "pricture");
                            setValue("photo", e.target.files[0]);
                          }}
                        />
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <Grid container spacing={3} className="travellerPageContainer">
          <Grid item xs={12} sm={6}>
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label={"Name"}
                    name={name}
                    className="travellerfullNameInput"
                    variant="standard"
                    color="success"
                    focused
                  />
                )}
              />
            </div>
          </Grid>

          {/* ----------------------------- Age Field start ---------------------------------------- */}

          {values.category === "2" && values.user_type === "2" ? (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="travellerAgeNamelabel"
                >
                  Age Group
                  <span style={{ color: "hotpink", fontSize: 19 }}>*</span>
                </InputLabel>
                <Controller
                  name="age_group"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select
                      labelId="demo-simple-select-label"
                      variant="standard"
                      id="demo-simple-select"
                      value={value}
                      label="Age"
                      onChange={onChange}
                      className="travellerAgeInput"
                      sx={{
                        ".MuiSelect-icon": {
                          color: "pink",
                          fontSize: "xx-large",
                        },
                        ".MuiSelect-outlined": {
                          color: "green",
                        },
                      }}
                    >
                      {ageGroup.map((c, i) => (
                        <MenuItem key={`c-${i}`} value={c.id}>
                          {c.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
               <div style={{ color: "red", textAlign: "end" }}>
                {errors.age_group && errors.age_group.message}
              </div>
              </FormControl>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <div>
                <Controller
                  name="age_group"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"age_group"}
                      name={name}
                      className="travellerfullNameInput"
                      variant="standard"
                      color="success"
                      focused
                    />
                  )}
                />
              </div>
            </Grid>
          )}
          {/* ----------------------------- Age Field start ---------------------------------------- */}

          {/* ----------------------------- Gender Field start ---------------------------------------- */}

          {values.category === "2" && values.user_type === "2" ? (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="travellerGenderNamelabel"
                >
                  Gender
                  <span style={{ color: "hotpink", fontSize: 19 }}>*</span>
                </InputLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <Select
                      labelId="demo-simple-select-label"
                      variant="standard"
                      id="demo-simple-select"
                      value={value}
                      label="Gender"
                      onChange={onChange}
                      className="travellerGenderInput"
                      sx={{
                        ".MuiSelect-icon": {
                          color: "pink",
                          fontSize: "xx-large",
                        },
                        ".MuiSelect-outlined": {
                          color: "green",
                        },
                      }}
                    >
                      {/* <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem> */}
                      {/* <MenuItem value={30}>Other</MenuItem> */}
                      {genderGroup.map((c, i) => (
                        <MenuItem key={`c-${i}`} value={c.id}>
                          {c.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  control={control}
                  name="gender"
                  defaultValue=""
                />
                <div
                style={{ color: "red", textAlign: "center", marginLeft: -206 }}
              >
                {errors.gender && errors.gender.message}
              </div>
              </FormControl>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <div>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"gender"}
                      name={name}
                      className="travellerfullNameInput"
                      variant="standard"
                      color="success"
                      focused
                    />
                  )}
                />
              </div>
            </Grid>
          )}
          {/* ----------------------------- Gender Field start ---------------------------------------- */}

          {values.category === "1" && (
            <Grid item xs={12} style={{marginTop: 20}}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="travellerGenderNamelabel"
                >
                  Tip I Expect
                  <span style={{ color: "hotpink", fontSize: 19 }}>*</span>
                </InputLabel>
                <Controller
                  control={control}
                  name="tip_expected"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select
                      labelId="demo-simple-select-label"
                      variant="standard"
                      id="demo-simple-select"
                      value={value}
                      label="Gender"
                      onChange={onChange}
                      className="travellerGenderInput"
                      sx={{
                        ".MuiSelect-icon": {
                          color: "pink",
                          fontSize: "xx-large",
                        },
                        ".MuiSelect-outlined": {
                          color: "green",
                        },
                      }}
                    >
                      <MenuItem value="50">50 USD equiv</MenuItem>
                      <MenuItem value="75">75 USD equiv</MenuItem>
                      <MenuItem value="100">100 USD equiv</MenuItem>
                      <MenuItem value="Negotiable">Negotiable </MenuItem>
                    </Select>
                  )}
                />
                 <div style={{ color: "red" }}>
                  {errors.tip_expected && errors.tip_expected.message}
                </div>
              </FormControl>
            </Grid>
          )}
        </Grid>

        <div className="travellerMandatory">
          All Fields are Mandatory<span style={{ color: "hotpink" }}>*</span>
        </div>
      </Container>
    </div>
  );
}

export default TravellerDetails;