import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import "../../CSS/pastTripPopup.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import Captcha from "demos-react-captcha";


import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  inputLabelClasses,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

import UploadPhoto from "./UploadPhoto";

function PastTripPopup(props) {
  const onSubmit = (data) => console.log(data);

  const onChange = (value, e) => {
    console.log(value);
    console.log("ddd", e);

    if (value) {
      console.log("I am Ready to go");
    } else {
      //error={...error,'captha':'invalid'}
    }
  };

  return (
    <div className="pastTripPopup-modalBackground">
      <div className="pastTripPopup-modalContainer">
        <div className="pastTripPopup-titleCloseBtn">
          <button onClick={props.setOpenModal}>X</button>
        </div>

        <form style={{ marginTop: "1rem" }}>
          <div className="tripDetailmain">
            <h4 className="pastTripPopupHeading">Upload your Trip Memories</h4>
            <div className="pastTripPopuphrlines"></div>

            <Grid container spacing={3} className="pastTripPopupPageContainer">
              <Grid item xs={12} sm={6}>
                <div className="pastTripPopupUpload">
                  <div className="pastTripPopupUploadinnerCard">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        className="pastTripPopupIcon"
                      >
                        {/* <input hidden accept="image/*" type="file" /> */}

                        {/* <div class="fileUploader " >
                        <div class="fileContainer ">
                          <p class></p>
                          <div class="errorsContainer"></div>
                          <button type="button" class="chooseFileButton ">
                          <PhotoCameraBackIcon style={{ fill: "#1ec28b" }} />
                          </button>
                        </div>
                      </div> */}
                        <PhotoCameraBackIcon style={{ fill: "#1ec28b" }} />
                      </IconButton>
                    </Stack>
                    <UploadPhoto />
                    {/* <div className="pastTripPopupText">Add Photo </div> */}
                    {/* <div className="pastTripPopupSubText">or drag and drop</div> */}
                  </div>
                  <div></div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div>
                  <TextareaAutosize
                    aria-label="description"
                    minRows={3}
                    placeholder="Whats on your mind??"
                    className="pastTripPopupdescription"
                  />
                </div>
              </Grid>

              <div className="pastTripPopupCaptchaMain">
                {/* <Grid item xs={2} sm={6}> */}
                <div className="pastTripPopupCaptchaText">Captcha</div>
                {/* </Grid> */}

                {/* <Grid item xs={2} sm={6} className="pastTripPopupCaptcha"> */}
                <div className="pastTripPopupCaptcha">
                  {/* <Captcha
                    onChange={(e) => onChange(e)}
                    placeholder="Enter Captcha here"
                    length={6}
                    name="captha"
                  /> */}
                
                </div>
                {/* </Grid> */}
              </div>
            </Grid>
            <div className="pastTripPopupBox">
              <FormGroup className="pastTripPopupCheckBox">
                <FormControlLabel
                  control={<Checkbox style={{ color: "#1ec28b" }} />}
                />
              </FormGroup>
              <div className="pastTripPopupBoxText">
                By clicking, you are confirming that you have read, understood
                and agree Terms and Conditions.
              </div>
            </div>
            <div>
              <Button className="pastTripPopupBtn">Post</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PastTripPopup;
