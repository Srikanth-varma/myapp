import React from "react";
import "../../CSS/ads.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Fragment } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Select,
  InputLabel,
  Autocomplete,
  inputLabelClasses,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
// import Captcha from "demos-react-captcha";

function AdsForm(props) {
  const { control, values, setValue, errors, register, reset } = props;

  const [mycountry, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const data = require("../../json/Country-State-City.json");
    console.log("data", data);
    setCountries(data);
  }, []);

  const ariaLabel = { "aria-label": "description" };

  return (
    <Fragment>
      <Box px={3} py={2} className="ads-box">
        <Typography variant="h1" align="left" margin="dense">
          <b>
            <span className="ads-headingText ">
              Enquiry for<span style={{ color: "#1ec28b" }}> Ads</span>
            </span>
          </b>
        </Typography>

        <Grid container spacing={2} className="ads-mainPage">
          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Name<span style={{ color: "hotpink" }}>*</span></label>
            <TextField
              required
              id="name"
              name="name"
              // label="Enter Your Name"
              placeholder="Enter Your Name"
              fullWidth
              margin="dense"
              {...register("name")}
              error={errors.name ? true : false}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#1ec28b" },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
              }}
            />
            <Typography variant="inherit" color="red">
              {errors.name && errors.name.message}
            </Typography>
          </Grid>

          {/* <Grid item xs={11} sm={11}>
              <Select
                required
                id="aaa"
                name="aaa"
                label="Full Name"
                fullWidth
                margin="dense"
                {...register("aaa")}
                error={errors.aaa ? true : false}
              >
<MenuItem value="a">lllll</MenuItem>
<MenuItem value="b">lllll</MenuItem>

              </Select>
              <Typography variant="inherit" color="red">
                {errors.fullname?.message}
              </Typography>
            </Grid> */}

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Company Name</label>
            <TextField
              required
              id="companyname"
              name="companyname"
              // label="Enter Company Name"
              placeholder="Enter Company Name"
              inputProps={ariaLabel}
              fullWidth
              margin="dense"
              {...register("companyname")}
              // error={errors.companyname ? true : false}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#1ec28b" },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
              }}
            />
            {/* <Typography variant="inherit" color="red">
              {errors.companyname && errors.companyname.message}
            </Typography> */}
          </Grid>
          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Website Name</label>
            <TextField
              required
              id="websiteName"
              name="websiteName"
              // label="Enter your Website"
              placeholder="Enter your Website"
              fullWidth
              margin="dense"
              {...register("websiteName")}
              // error={errors.websiteName ? true : false}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#1ec28b" },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
              }}
            />
            {/* <Typography variant="inherit" color="red">
              {errors.websiteName && errors.websiteName.message}
            </Typography> */}
          </Grid>
          {/* <Grid item xs={11} sm={11}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.password?.message}
              </Typography>
            </Grid> */}

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Country<span style={{ color: "hotpink" }}>*</span></label>
            <div className="col-md-6">
              <div className="form-group">
                {/* <Controller
                    control={control}
                    name="country"
                    render={({ field: { onChange, value, name } }) => ( */}

                <Autocomplete
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
                  renderInput={(params) => (
                    <TextField
                      required
                      className=""
                      {...params}
                      id="country"
                      name="country"
                      // label="Select Country"
                      placeholder="Select Country"
                      margin="dense"
                      {...register("country")}
                      error={errors.country ? true : false}
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
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "green" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "#1ec28b" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
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
                {/* )}
                  /> */}
              </div>
            </div>
            <div style={{ color: "red" }}>
              {errors.country && errors.country.message}
            </div>
          </Grid>

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">State/ Province<span style={{ color: "hotpink" }}>*</span></label>
            <div className="col-md-6">
              <div className="form-group">
                <Autocomplete
                  options={state}
                  getOptionLabel={(option) => option.name}
                  // onChange={(event, item) => {
                  //   console.log(item, "countyItem");
                  //   setValue("state", item.name, { shouldValidate: true });
                  // }}
                  onChange={(event, item) => {
                    console.log(item, "countyItem");
                    if (item !== null) {
                      setLocation(item.cities);
                      console.log(item, "countyItem");
                      setValue("state", item.name, { shouldValidate: true });
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      required
                      className=""
                      {...params}
                      id="state"
                      name="state"
                      // label="Select State"
                      placeholder="Select State"
                      {...register("state")}
                      error={errors.state ? true : false}
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
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "green" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "#1ec28b" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
                          },
                        },
                      }}
                    />
                  )}
                />
                {/* )}
              /> */}
              </div>
            </div>
            <div style={{ color: "red" }}>
              {errors.state && errors.state.message}
            </div>
          </Grid>
          <div>
            <label className="ads-PhoneText">Phone Number<span style={{ color: "hotpink" }}>*</span></label>
            <Grid item xs={11} sm={11} style={{ display: "flex" }}>
              <div className="ads-code">
                <TextField
                  required
                  id="code"
                  name="code"
                  margin="dense"
                  {...register("code")}
                  error={errors.code ? true : false}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#1ec28b",
                      },
                    },
                    "& .MuiInputLabel-root": { color: "green" }, //styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#1ec28b" },
                    },
                  }}
                />

                {/* )}
           /> */}
              </div>
              <div>
                <TextField
                  className="ads-phone"
                  required
                  id="phone"
                  name="phone"
                  margin="dense"
                  {...register("phone")}
                  error={errors.phone ? true : false}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#1ec28b",
                      },
                    },
                    "& .MuiInputLabel-root": { color: "green" }, //styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#1ec28b" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "#1ec28b",
                      },
                    },
                  }}
                />
              </div>
            </Grid>
            <div style={{ color: "red" }}>
              {errors.phone && errors.phone.message}
            </div>
          </div>

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Ad Location<span style={{ color: "hotpink" }}>*</span></label>
            <div className="col-md-6">
              <div className="form-group">
                <Autocomplete
                  options={location}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, item) => {
                    console.log(item, "countyItem");
                    setValue("location", item.name, {
                      shouldValidate: true,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      required
                      className=""
                      {...params}
                      id="location"
                      name="location"
                      // label="Location"
                      placeholder="Location"
                      {...register("location")}
                      error={errors.location ? true : false}
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
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "green" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "#1ec28b" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#1ec28b",
                          },
                        },
                      }}
                    />
                  )}
                />
                {/* )}
              /> */}
              </div>
            </div>
            <div style={{ color: "red" }}>
              {errors.location && errors.location.message}
            </div>
          </Grid>

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Ad Duration<span style={{ color: "hotpink" }}>*</span></label>
            <Select
              required
              id="adDuration"
              name="adDuration"
              // label="Select"
              placeholder="Select"
              fullWidth
              margin="dense"
              {...register("adDuration")}
              error={errors.adDuration ? true : false}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1ec28b",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1ec28b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1ec28b",
                },
                "& .MuiSvgIcon-root": {
                  color: "hotpink",
                },
              }}
            >
              <MenuItem value="1">1 min</MenuItem>
              <MenuItem value="2">2 min</MenuItem>
              <MenuItem value="3">3 min</MenuItem>
              <MenuItem value="4">4 min</MenuItem>
              <MenuItem value="5">5 min</MenuItem>
              <MenuItem value="6">6 min</MenuItem>
            </Select>
            <Typography variant="inherit" color="red">
              {errors.adDuration && errors.adDuration.message}
            </Typography>
          </Grid>

          <Grid item xs={11} sm={11}>
            <label className="ads-Text">Ad Price I can offer (in USD)<span style={{ color: "hotpink" }}>*</span></label>
            <TextField
              required
              id="adPrice"
              name="adPrice"
              // label="Enter Price in USD"
              placeholder="Enter Price in USD"
              fullWidth
              margin="dense"
              {...register("adPrice")}
              error={errors.adPrice ? true : false}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#1ec28b" },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#1ec28b",
                  },
                },
              }}
            />
            <Typography variant="inherit" color="red">
              {errors.adPrice && errors.adPrice.message}
            </Typography>
          </Grid>
          
        </Grid>

      </Box>

      <Grid container spacing={2} className="ads-mainPage">
      <Grid item xs={11} className="ads-Captcha">
            <Typography
              color={errors.acceptTerms ? "error" : "inherit"}
              className="ads-CaptchaLabel"
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
              {errors.acceptTerms ?   errors.acceptTerms.message  : ""}
            </Typography>
          </Grid>
      </Grid>
    </Fragment>
  );
}

export default AdsForm;
