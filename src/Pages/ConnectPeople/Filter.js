import React, { useState } from "react";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import "../../CSS/filters.css";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PublicIcon from "@mui/icons-material/Public";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  TextField,
} from "@mui/material";

const language = [
  { label: "English" },
  { label: "Hindi" },
  { label: "French" },
  { label: "Spanish" },
  { label: "Telugu" },
];

const Filter = (props) => {
  const [bookingstatus, setBookingStatus] = useState(false);
  const [airlinesState, setAirlinesState] = useState(false);
  const [tipAmtState, setTipAmtState] = useState(false);
  const [allFieldValues, setAllFieldValues] = useState({
    airline: "",
    prefered_language: [],
    tip_expected: "",
    booking_status: "",
  });

  // const FilterMenu = () => {
  //   setBookingStatus(!bookingStatus);
  // };

  const AirlinesMenu = () => {
    setAirlinesState(!airlinesState);
  };

  const TipAmtMenu = () => {
    setTipAmtState(!tipAmtState);
  };

  const bookingStatusMenu = () => {
    setBookingStatus(!bookingstatus);
  };

  const handleChange = (event, acValue) => {
    const { name, value } = event.target;
    console.log(name, value, acValue, "inOnchange");
    if (name === undefined || name === "" || name === null) {
      const Array = [];
      acValue.map((field) => {
        Array.push(field.label);
      });
      setAllFieldValues({
        ...allFieldValues,
        prefered_language: Array,
      });
    } else {
      setAllFieldValues({
        ...allFieldValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(allFieldValues);
    // setAllFieldValues({
    //   airlines: "",
    //   language: [],
    //   tipAmt: "",
    //   travelscope: "",
    // });
    setBookingStatus(false);
    setAirlinesState(false);
    setTipAmtState(false);
    // console.log(allFieldValues ,"rrrrrrrrrrrr")
  };
  console.log(allFieldValues, "rrrrrrrrrrrr");

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiSvgIcon-root": {
      color: "#1ec28b",
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="filter-main">
          <div className="filter-second">
            <div className="filter-icon-section">
              <SortSharpIcon
                fontSize="large"
                style={{ fill: "white" }}
                className=" SortSharpIcon"
              />
            </div>

            <div className="filter-text-section">Filters</div>
          </div>
          <TravelExploreIcon className="travelExploreIcon" />
          <div className="filter-listed">
            <ListItemButton onClick={bookingStatusMenu}>
              {/* <ListItemIcon className="filter-icon">radio</ListItemIcon> */}
              <ListItemText
                className="bookingStatus"
                primary="Booking Status"
                // style={{   }}
              />
              {bookingstatus ? (
                <ArrowDropUpTwoToneIcon style={{ fill: "#1ec28b" }} />
              ) : (
                <ArrowDropDownTwoToneIcon style={{ fill: "#1ec28b" }} />
              )}
            </ListItemButton>
            <Collapse in={bookingstatus} timeout="auto" unmountOnExit>
              <FormControl>
                <RadioGroup
                  name="booking_status"
                  value={allFieldValues.booking_status}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio style={{ color: "pink" }} />}
                    label="Booked"
                    className="filter-confrimed"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio style={{ color: "pink" }} />}
                    label="Yet to Booked"
                  />
                </RadioGroup>
              </FormControl>
            </Collapse>
          </div>
          <hr />
          {/* <div style={{ display: "flex" }}>
          <PublicIcon style={{ marginLeft: 10, marginTop: 7 }} />
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 170 }}
            options={countries}
            size={"small"}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Source Country"
                varient="standard"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </div>
        <hr /> */}
          <div style={{ display: "flex" }}>
            <div>
              <FlightIcon
                style={{ marginLeft: 10, marginTop: 7, fill: "#1ec28b" }}
              />
            </div>
            <div className="airlines-listed">
              <ListItemButton onClick={AirlinesMenu}>
                {/* <ListItemIcon className="filter-icon">radio</ListItemIcon> */}
                <ListItemText
                  primary="Airlines"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
                {airlinesState ? (
                  <ArrowDropUpTwoToneIcon style={{ fill: "#1ec28b" }} />
                ) : (
                  <ArrowDropDownTwoToneIcon style={{ fill: "#1ec28b" }} />
                )}
              </ListItemButton>
              <Collapse in={airlinesState} timeout="auto" unmountOnExit>
                <FormControl>
                  <RadioGroup
                    name="airline"
                    value={allFieldValues.airline}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <FormControlLabel
                      value="indigo"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Indigo"
                    />
                    <FormControlLabel
                      value="airindia"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Air India"
                    />
                    <FormControlLabel
                      value="jetairways"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Jet Airways"
                    />
                    <FormControlLabel
                      value="spicejet"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Spice Jet"
                    />
                  </RadioGroup>
                </FormControl>
              </Collapse>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex" }}>
            <LanguageRoundedIcon
              style={{ marginLeft: 10, marginTop: 7, fill: "#1ec28b" }}
            />
            <Autocomplete
              id="language-select"
              sx={{ width: 170 }}
              options={language}
              name="prefered_language"
              airlines
              multiple
              size={"small"}
              value={allFieldValues.language}
              onChange={(e, value) => {
                handleChange(e, value);
              }}
              // inputValue={inputValue}
              // defaultValue={[language[3]]}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Language"
                  varient="standard"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
              // renderInput={(params) => (
              //   <TextField
              //     {...params}
              //     label="Language"
              //     variant="outlined"
              //     fullWidth
              //   />
              // )}
            />
          </div>
          <hr />
          {/* <div>
          
          <h4 className="tip-amt-text">Tip Amount</h4>
          <Box width={180} style={{ marginLeft: 15 }}>
            <h5>
              <select className="currency-options">
                <option value="inr">INR</option>
                <option value="euro">Euro</option>
                <option value="usd">USD</option>
                <option value="$">$</option>
              </select>
            </h5>
            <h5 className="range-amount">{rangeval}</h5>
            <input
              type="range"
              className="custom-range"
              min="0"
              max="5000"
              onChange={(event) => setRangeval(event.target.value)}
            />
          </Box>
        </div> */}

          {/* <hr/> */}
          <div style={{ display: "flex" }}>
            <div>
              <PriceChangeOutlinedIcon
                style={{ marginLeft: 10, marginTop: 7, fill: "#1ec28b" }}
              />
            </div>
            <div className="tipamt-listed">
              <ListItemButton onClick={TipAmtMenu}>
                {/* <ListItemIcon className="filter-icon">radio</ListItemIcon> */}
                <ListItemText
                  primary="Tip Amount"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
                {airlinesState ? (
                  <ArrowDropUpTwoToneIcon style={{ fill: "#1ec28b" }} />
                ) : (
                  <ArrowDropDownTwoToneIcon style={{ fill: "#1ec28b" }} />
                )}
              </ListItemButton>
              <Collapse in={tipAmtState} timeout="auto" unmountOnExit>
                <FormControl>
                  <RadioGroup
                    name="tip_expected"
                    value={allFieldValues.tip_expected}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <FormControlLabel
                      value="50USD"
                      control={<Radio style={{ color: "pink" }} />}
                      label="50 USD"
                    />
                    <FormControlLabel
                      value="75USD"
                      control={<Radio style={{ color: "pink" }} />}
                      label="75 USD"
                    />
                    <FormControlLabel
                      value="negotiable"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Negotiable"
                    />
                    <FormControlLabel
                      value="free"
                      control={<Radio style={{ color: "pink" }} />}
                      label="Free"
                    />
                  </RadioGroup>
                </FormControl>
              </Collapse>
            </div>
          </div>
          <hr />
          <div>
            <Button className="apply-filter-btn" type="submit">
              Apply Filter
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Filter;
