import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import "../CSS/HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {useFormik } from "formik";
import * as Yup from "yup";
import CountryJson from "../../src/json/Airports.json"
import { createFilterOptions } from '@mui/material/Autocomplete';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment/moment";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import Select from '@material-ui/core/Select';
const useStyles = makeStyles({
  paper: {
   
    width:"450px",
    // textAlign:"center"
  },
 
});
const SearchBar = ({mySearchData}) => {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  // const [value1, setValue1] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [searchCountry,setSearchCountry]=useState("");
  const [air, setAir] = React.useState();
  // console.log(air);
  // const [searchResponse, setSearchResponse] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [category, setCategory] = React.useState("");

  const handleChangecategory = (event) => {
    setCategory(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [openDestination, setOpenDestination] = useState(false);
  const [inputValueDestination, setInputValueDestination] = useState("");
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#1ec28b",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1ec28b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1ec28b",
      },
      "&:hover fieldset": {
        borderColor: "#1ec28b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1ec28b",
      },
    },
  });


const validationSchema = Yup.object({
    flyingFrom: Yup
      .string('Enter flyingFrom')
      .required('Please Enter Flying From'),
    
  });  


  const formik = useFormik({
    initialValues: {
      flyingFrom: '',
      Destination:'',
      Category:'',
      FromDate:'',
      ToDate:''
      // password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(values);
      // const beginDate = moment(values.FromDate).format('YYYY-MM-DD')
      // console.log(beginDate);
      const mydate=new Date(values.FromDate)
      const fromdate=mydate.getDate()+'-'+(mydate.getMonth()+1)+'-'+mydate.getFullYear()
      console.log(fromdate,"fromdate")
      const mydate2=new Date(values.ToDate)
      const todate=mydate2.getDate()+'-'+(mydate2.getMonth()+1)+'-'+mydate2.getFullYear()
      console.log(todate,"todate")
      console.log(values)
      // console.log(JSON.stringify(values))
      // dispatch(login(values.email, values.password))

      axios
      .get(`http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/search?flying_from=${values.flyingFrom}&destination=${values.Destination}&category=${values.Category}&date_range_from=${fromdate}&date_range_to=${todate}`)
      .then((response) => {
        console.log(response,"search response")
        // setSearchResponse(response.data)
        // console.log(searchResponse,"SearchResponse state")
       mySearchData(response.data);
          }
    
        
      ) .catch((error) => {
        // Error
        if (error.response.status===400) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            
        }
    });


    },
  });

  console.log(formik, "form values");
  const mycountry=CountryJson;


const classes = useStyles();
  return (
    <>
      <Container>
        <div>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ width: "100%" }}>
            <div className="Onetab-section">
           
              <Grid container spacing={2} className="OnetabsubHeading">
                <Grid
                  item
                  xs={2}
                  className="Onesource"
                  style={{ marginRight: 75 }}
                >
                  
                  {/* <Paper component="form" className="OnesourcePaper"> */}
                    {/* <InputBase
                    
                    name="flyingFrom"
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Flying From"
                      inputProps={{ "aria-label": "Flying From" }}
                      onBlur={formik.handleBlur}
                      touched={formik.touched}
                          value={formik.values.flyingFrom=searchCountry}
                          onChange={formik.handleChange && countrySearch}
                          error={formik.touched.flyingFrom && Boolean(formik.errors.flyingFrom)}
                          // helperText={formik.touched.flyingFrom && formik.errors.flyingFrom}
                    />
                       */}
                       <Autocomplete
                          // id="airlines"
                          
                          // sx={{ ml: 1, flex: 1 }}
                          open={open}
                          onOpen={() => {
                            // only open when in focus and inputValue is not empty
                            if (inputValue) {
                              setOpen(true);
                            }
                          }}
                          onClose={() => setOpen(false)}
                          inputValue={inputValue}
                          onInputChange={(e, value, reason) => {
                            setInputValue(value);
                      
                            // only open when inputValue is not empty after the user typed something
                            if (!value) {
                              setOpen(false);
                            }
                          }}
                          sx={{
                            
                            "& .MuiAutocomplete-popupIndicator": { transform: "none" },
                            
                          }}
                        
                          className="flyfrom"
                          autoHighlight
                          id="country-select-demo"
                          freeSolo={false}
                          popupIcon={<FlightTakeoffIcon style={{color: "#1ec28b",
                            marginBottom: "auto"}}></FlightTakeoffIcon>}
                          // popupIcon= {FlightTakeoffIcon}
                          options={mycountry}
                          // filterOptions={filterOptions}
                          // getOptionSelected={(option)=> option.city && option.name && option.iata_code && option.country }
                          getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}
                          style={{ width: 200 }}
                          classes={{ paper: classes.paper }}
                          // value={air}
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0,} }}
                              {...props}
                              
                            >
                              {/* <img
                                loading="lazy"
                                width="20"
                                src={option.logo}
                                alt=""
                              /> */}
                                 {/* {option.map(item=>{

{item.state}
return true
})} */}
                              {option.city},{option.country}({option.iata_code}-{option.name})

                            </Box>
                          )}
                          name="flyingFrom"
                          // value={formik.values.flyingFrom}
                          //  onBlur={formik.handleBlur}
                          // touched={formik.touched}
                          onChange={(e,value) => formik.setFieldValue('flyingFrom',value?`${value.city},${value.country}(${value.iata_code}-${value.name})`:'')}
                        //  error={formik.touched.flyingFrom && Boolean(formik.errors.flyingFrom)}
                              // helperText={formik.touched.flyingFrom && formik.errors.flyingFrom}
                          renderInput={(params) => (
                            
                            <TextField
                              {...params}
                              label="Flying From"
                              // name="flyingFrom"
                              sx={{
                                "&.MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    borderColor: "#1ec28b",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "#1ec28b",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#1ec28b",
                                  },
                                  
                                },
                              }}
                              IconComponent = {FlightTakeoffIcon}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                             
                              }}
                              
                              
      // onChange={(e,value) => formik.setFieldValue('flyingFrom',value.city)}
                              // value={formik.values.flyingFrom}
                              // onChange={(e) =>formik.setFieldValue('flyingFrom', e.target.value)}
                            />
                           
                          )}
                          // name="flyingFrom"
                          // onBlur={formik.handleBlur}
                          // touched={formik.touched}
                              // value={formik.values.flyingFrom}
                              // onChange={formik.handleChange}
                              // error={formik.touched.flyingFrom && Boolean(formik.errors.flyingFrom)}
                              // helperText={formik.touched.flyingFrom && formik.errors.flyingFrom}
                        />
                    {/* <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <FlightTakeoffIcon style={{ fill: "#1ec28b" }} />
                    </IconButton> */}
                   
                  {/* </Paper> */}
                  <span
                          id="errormessage"
                          className="loginEmailError"
                        >{formik.touched.flyingFrom && formik.errors.flyingFrom}</span>
                </Grid>

                <Grid
                  item
                  xs={2}
                  className="Onedestination"
                  style={{ marginRight: 75 }}
                >
                  {/* <Paper component="form" className="OnesourcePaper">
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Destination"
                      inputProps={{ "aria-label": "Destination" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <LocationOnIcon style={{ fill: "#1ec28b" }} />
                    </IconButton>
                  </Paper> */}
 <Autocomplete
                          // id="airlines"
                          
                          // sx={{ ml: 1, flex: 1 }}
                          open={openDestination}
                          onOpen={() => {
                            // only open when in focus and inputValue is not empty
                            if (inputValueDestination) {
                              setOpenDestination(true);
                            }
                          }}
                          onClose={() => setOpenDestination(false)}
                          inputValue={inputValueDestination}
                          onInputChange={(e, value, reason) => {
                            setInputValueDestination(value);
                      
                            // only open when inputValue is not empty after the user typed something
                            if (!value) {
                              setOpenDestination(false);
                            }
                          }}
                          sx={{
                            
                            "& .MuiAutocomplete-popupIndicator": { transform: "none" },
                          }}
                          className="destinationTo"
                          autoHighlight
                          freeSolo={false}
                          popupIcon={<LocationOnIcon style={{color: "#1ec28b",
                          marginBottom: "auto"}}></LocationOnIcon>}
                          // forcePopupIcon={<LocationOnIcon></LocationOnIcon>}
                          id="country-select-demo"
                          options={mycountry}
                          // filterOptions={filterOptions}
                          // getOptionSelected={(option)=> option.city && option.name && option.iata_code && option.country }
                          getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}
                          style={{ width: 200 }}
                          classes={{ paper: classes.paper }}
                          // value={air}
                         
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {/* <img
                                loading="lazy"
                                width="20"
                                src={option.logo}
                                alt=""
                              /> */}
                                 {/* {option.map(item=>{

{item.state}
return true
})} */}
                              {option.city},{option.country}({option.iata_code}-{option.name})
                            </Box>
                          )}
                          name="Destination"
                          onChange={(e,value) => formik.setFieldValue('Destination',value?`${value.city},${value.country}(${value.iata_code}-${value.name})`:'')}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Destination"
                              variant="outlined"
                              
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                              }}
                            />
                            
                          )}
                        />
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="Onestop"
                  style={{ marginRight: 75 }}
                >
                  <FormControl fullWidth style={{ marginTop: 11,marginLeft: 35 }}>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                    //  IconComponent = {FlightTakeoffIcon}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={category}
                      label="Category"
                      // onChange={handleChangecategory}
                      name="Category"
                      
                      value={formik.values.Category}
                      onChange={formik.handleChange}
                      // style={{marginLeft: "633px!important"}}
                      sx={{
                        "&.MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#1ec28b",
                          },
                          "&:hover fieldset": {
                            borderColor: "#1ec28b",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1ec28b",
                          },
                          
                        },
                      }}
                    >
                      <MenuItem value="1">Available Travel Companion</MenuItem>
                      <MenuItem value="2">
                        Looking for Travel Companion
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="Onefromdate"
                  style={{ marginRight: 22, marginTop: 11 }}
                >
                  {/* <CssTextField
                    label="From Date"
                    id="custom-css-outlined-input"
                    type="date"
                    style={{ marginTop: 11 }}
                    InputLabelProps={{ shrink: true, required: true }}
                  /> */}
                  {/* {} */}
                  <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
      views={["day"]}
        label="From Date"
        inputFormat="DD-MMM-YY"
        value={formik.values.FromDate=fromDate}
        style={{ marginTop: 11 }}
        onChange={(newValue) => {
          setFromDate(newValue)
        }}
        name="FromDate"
                      
        // value={formik.values.FromDate}
        // onChange={formik.handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

                </Grid>
                <Grid item xs={2} className="Onetodate" style={{ marginTop: 11 }}>
                  {/* <CssTextField
                    label="To Date"
                    id="custom-css-outlined-input"
                    type="date"
                    style={{ marginTop: 11 }}
                    InputLabelProps={{ shrink: true, required: true }}
                  /> */}
                  <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
 
        label="To Date"
        inputFormat="DD-MMM-YY"
        value={formik.values.ToDate=toDate}
        style={{ marginTop: 11 }}
        onChange={(newValue) => {
          setToDate(newValue)
        }}
        name="ToDate"
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                </Grid>
              </Grid>
             
              <Button name="Submit"
                          type="submit" className="OnesearchButton" >
                <Link to="/" className="OnesearchButtonText"  >
                  Search
                </Link>
              </Button>
              
            </div>
          </Box>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
