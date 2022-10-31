import React from "react";
import "../../CSS/contactUs.css";
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  inputLabelClasses,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
// import Captcha from "demos-react-captcha";
// import CountryJson from "../../Country-State-City.json";
import { useState } from "react";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
// import { ResetTv } from "@mui/icons-material";

function ContactForm(props) {
  const { control, values, setValue, errors, register, reset } = props;

  // console.log("country state", CountryJson);
  // const mycountry = CountryJson;

  const [mycountry, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [phonecode, setPhonecode] = useState("");

  useEffect(() => {
    const data = require("../../json/Country-State-City.json");
    console.log("data", data);
    setCountries(data);
  }, []);

  // const onChange1 = (value, e) => {
  //   console.log(value);
  //   console.log("ddd", e);

  //   if (value) {
  //     console.log("I am Ready to go");
  //   } else {
  //     //error={...error,'captha':'invalid'}
  //   }
  // };

  const autoCompleteHandler = (e) => {
    console.log("***", e);
  };

  // const countrycode = () => {
  //   mycountry.map((item) => {
  //     // console.log("country")

  //     if (item.name === values.country) {
  //       setPhonecode(item.phone_code);
  //       setValue("code", phonecode);

  //       return true;
  //     }
  //   });
  // };

  // const availableState = states.find((c) => c.name === mycountry);

  // console.log("country state", mycountry);
  // const mycountry = CountryJson;

  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 50,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
          <div>
            <label>
              Name<span style={{ color: "hotpink" }}>*</span>
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  // label={"Name"}
                  name={name}
                  className="contactFormfullNameInput"
                  variant="standard"
                  color="success"
                  //   focFContactFormed
                />
              )}
            />
          </div>
          <div style={{ color: "red" }}>
            {errors.name && errors.name.message}
          </div>
        </Grid>

        {/* <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="countryGrid">
          <Controller
            name="country"
            control={control}
            render={({ field: { onChange, value, name, onBlur } }) => (
              <FormControl fullWidth lg={12} xs={12}>
                <InputLabel
                  id="demo-simple-select-label"
                  className="tripDetailselfCanAssistNamelabel"
                >
                  Country
                  <span style={{ color: "pink", fontSize: 19 }}>*</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  variant="standard"
                  id="demo-simple-select"
                  // onBlur={countrycode}
                  value={value}
                  label="location"
                  onChange={autoCompleteHandler}
                  className="tripDetailselfCanAssistInput"
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
                  <MenuItem value="">Select a country </MenuItem>
                  {mycountry.map((item) => {
                    return (
                      <MenuItem value={item.name} label="USA">
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          />
        
          <div style={{ color: "red" }}>
            {errors.country && errors.country.message}
          </div>
        </Grid> */}

        <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
          <div className="col-md-6">
            <div className="form-group">
              <label className="contactFormText">
                Country<span style={{ color: "hotpink" }}>*</span>
              </label>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange, value, name } }) => (
                  <Autocomplete
                    sx={{ width: 200 }}
                    options={mycountry}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, item) => {
                      console.log(item, "countyItem");
                      if (item !== null) {
                        setState(item.states);

                        setValue("code", item.phone_code, {
                          shouldValidate: true,
                        });
                        console.log(item.phone_code, "countyItem");
                        setValue("country", item.name, {
                          shouldValidate: true,
                        });
                      }
                    }}
                    value={value}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        // color="success"
                        // focused
                        className="contactFormInput"
                        {...params}
                        // label="Country"

                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "black",
                            [`&.${inputLabelClasses.shrink}`]: {
                              // set the color of the label when shrinked (usually when the TextField is focused)
                              color: "black",
                            },
                          },
                        }}
                        // inputProps={{
                        //   ...params.inputProps,
                        //   autoComplete: "new-password", // disable autocomplete and autofill
                        // }}
                      />
                    )}
                  />
                )}
              />
            </div>
          </div>
          <div style={{ color: "red" }}>
            {errors.country && errors.country.message}
          </div>
        </Grid>

        {/* <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="countryGrid">
          <Controller
            name="state"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <FormControl fullWidth lg={12} xs={12}>
                <InputLabel
                  id="demo-simple-select-label"
                  className="tripDetailselfCanAssistNamelabel"
                >
                  State
                  <span style={{ color: "pink", fontSize: 19 }}>*</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  variant="standard"
                  id="demo-simple-select"
                  value={value}
                  label="location"
                  onChange={onChange}
                  className="tripDetailselfCanAssistInput"
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
                
                  {mycountry.map((item) => {
                    if (item.name === values.country) {
                      return item.states.map((state) => {
                        return (
                          <MenuItem value={state.name} label="chennai">
                            {state.name}
                          </MenuItem>
                        );
                      });
                    }
                  })}
                </Select>
              </FormControl>
            )}
          />
          <div style={{ color: "red" }}>
            {errors.state && errors.state.message}
          </div>
        </Grid> */}

        <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
          <div className="col-md-6">
            <div className="form-group">
              <label className="contactFormText">
                State/Province<span style={{ color: "hotpink" }}>*</span>
              </label>
              <Controller
                control={control}
                name="state"
                render={({ field: { onChange, value, name } }) => (
                  <Autocomplete
                    sx={{ width: 200 }}
                    options={state}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, item) => {
                      console.log(item, "countyItem");
                      setValue("state", item.name, { shouldValidate: true });
                    }}
                    value={value}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        // color="success"
                        // focused
                        className="contactFormInput"
                        {...params}
                        // label="State/ Province"

                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "black",
                            [`&.${inputLabelClasses.shrink}`]: {
                              // set the color of the label when shrinked (usually when the TextField is focused)
                              color: "black",
                            },
                          },
                        }}
                        // inputProps={{
                        //   ...params.inputProps,
                        //   autoComplete: "new-password", // disable autocomplete and autofill
                        // }}
                      />
                    )}
                  />
                )}
              />
            </div>
          </div>
          <div style={{ color: "red" }}>
            {errors.state && errors.state.message}
          </div>
        </Grid>

        <div className="contactFormPhoneNumber">
          {/* <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="contactFormcountryGrid"
          >
            <label className="contactFormcountryLabel">code</label>
            <Controller
              name="code"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Select
                  // label=" Select a Gender"
                  value={value}
                  className="contactFormcountryLabelText"
                 
                  onChange={onChange}
  
                  labelId="demo-simple-select-label"
                  variant="standard"
                  id="demo-simple-select"
                >
                  {mycountry.map((item) => {
                    return (
                      <MenuItem value={item.phone_code!==undefined?item.phone_code:""}>
                        {item.phone_code!==undefined?item.phone_code:""}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
            <div style={{ color: "red" }}>
              {errors.code && errors.code.message}
            </div>
          </Grid> */}

          {/* <Grid item xs={12} sm={6}>
          <div className="col-md-6">
            <div className="form-group">
              <Controller
                control={control}
                name="code"
                render={({ field: { onChange, value, name } }) => (
                  <Autocomplete
                    // sx={{ width: 200 }}
                    options={mycountry}
                    getOptionLabel={(option) => option.phone_code}
                    onChange={(event, item) => {
                      console.log(item,"countyItem");
                      setValue("code", item.phone_code, { shouldValidate: true });
                    }}
                    value={value}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        // color="success"
                        // focused
                        className="destinationdetailFlyingFrom"
                        {...params}
                        label="Code"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "black",
                            [`&.${inputLabelClasses.shrink}`]: {
                              // set the color of the label when shrinked (usually when the TextField is focused)
                              color: "black",
                            },
                          },
                        }}
                      
                      />
                    )}
                  />
                )}
              />
            </div>
          </div>
          <div style={{ color: "red" }}>
            {errors.flying_from && errors.flying_from.message}
          </div>
        </Grid> */}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Controller
              name="code"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  // label={"Name"}
                  label="code"
                  // placeholder="+91"
                  name={name}
                  variant="standard"
                  color="success"
                  //   focFContactFormed
                  sx={{ width: 70, marginLeft: -12 }}
                />
              )}
            />

            {/* <div style={{ color: "red" }}>
              {errors.name && errors.name.message}
            </div> */}
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            {/* <label>Phone Number</label> */}
            <Controller
              name="phone_number"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label="Phone Number "
                  
                  className="contactFormPhoneInput"
                  variant="standard"
                  color="success"
                  //   focFContactFormed
               
                />
              )}
            />

            <div style={{ color: "red", marginLeft: 130 }}>
              {errors.phone_number && errors.phone_number.message}
            </div>
          </Grid>
        </div>

        <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
          <div>
            <Controller
              name="feedback"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <TextareaAutosize
                  name="feedback"
                  onChange={onChange}
                  aria-label="description"
                  minRows={3}
                  placeholder="Share your Query or Feedback...."
                  className="contactFormShortDescText"
                />
              )}
            />
          </div>
          <div style={{ color: "red" }}>
            {errors.feedback && errors.feedback.message}
          </div>
        </Grid>
        <div className="contactFormShortDescMaxChar">
          <span>*</span>maximum of 100 characters
        </div>

        {/* <div className="pastTripPopupCaptchaMain">
         
          <div className="pastTripPopupCaptchaText">Captcha</div>
          <div className="pastTripPopupCaptcha">
          <Controller
              name="captcha"
              control={control}
              render={({ field: { onChange} }) => (
            <Captcha
              onChange={(e) => onChange(e)}
              placeholder="Enter Captcha here"
              length={6}
              
              
            />
            )}
            />
          </div>
          <div style={{ color: "red" }}>
            {errors.captcha && errors.captcha.message}
          </div>
         
        </div> */}
        <Grid item xs={11} className="contact-Captcha">
          <Typography
            color={errors.acceptTerms ? "error" : "inherit"}
            className="contact-CaptchaLabel"
          >
            Captcha
          </Typography>

          {/* <FormControlLabel
            control={
              <Controller
                control={control}
                name="acceptTerms"
                defaultValue="false"
                inputRef={register()}
                render={({ field: { onChange } }) => (
                  // <Checkbox
                  //   color="primary"
                  //   onChange={(e) => onChange(e.target.checked)}
                  // />
                  <Captcha
                    onChange={(e) => onChange(e)}
                    placeholder="Enter Captcha here"
                    length={6}
                  />
                )}
              />
            }
          /> */}
          <br />
          <Typography variant="inherit" color="red">
            {errors.acceptTerms ? "(" + errors.acceptTerms.message + ")" : ""}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default ContactForm;
