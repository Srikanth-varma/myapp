import React, { useEffect, useState } from "react";
import "../../CSS/createTripCSS/destinationDetails.css";
import AddIcon from "@mui/icons-material/Add";
import { useFieldArray } from "react-hook-form";
import airlines from "../../json/Airlines.json";
import { pink } from "@mui/material/colors";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  inputLabelClasses,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
// import { pink } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import { color } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Controller } from "react-hook-form";
// import "../../CSS/tripDetailself.css"
import CountryJson from "../../json/Airports.json"

function StartTrip(props) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [openDestination, setOpenDestination] = useState(false);
  const [inputValueDestination, setInputValueDestination] = useState("");


  const { control, values, setValue, errors, register } = props;

  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
    { code: "AQ", label: "Antarctica", phone: "672" },
    { code: "AR", label: "Argentina", phone: "54" },
    { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", label: "Austria", phone: "43" },
    {
      code: "AU",
      label: "Australia",
      phone: "61",
      suggested: true,
    },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    {
      code: "BA",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },
    { code: "BB", label: "Barbados", phone: "1-246" },
    { code: "BD", label: "Bangladesh", phone: "880" },
    { code: "BE", label: "Belgium", phone: "32" },
    { code: "BF", label: "Burkina Faso", phone: "226" },
    { code: "BG", label: "Bulgaria", phone: "359" },
    { code: "BH", label: "Bahrain", phone: "973" },
    { code: "BI", label: "Burundi", phone: "257" },
    { code: "BJ", label: "Benin", phone: "229" },
    { code: "BL", label: "Saint Barthelemy", phone: "590" },
    { code: "BM", label: "Bermuda", phone: "1-441" },
    { code: "BN", label: "Brunei Darussalam", phone: "673" },
    { code: "BO", label: "Bolivia", phone: "591" },
    { code: "BR", label: "Brazil", phone: "55" },
    { code: "BS", label: "Bahamas", phone: "1-242" },
    { code: "BT", label: "Bhutan", phone: "975" },
    { code: "BV", label: "Bouvet Island", phone: "47" },
    { code: "BW", label: "Botswana", phone: "267" },
    { code: "BY", label: "Belarus", phone: "375" },
    { code: "BZ", label: "Belize", phone: "501" },
    {
      code: "CA",
      label: "Canada",
      phone: "1",
      suggested: true,
    },
    {
      code: "CC",
      label: "Cocos (Keeling) Islands",
      phone: "61",
    },
    {
      code: "CD",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    {
      code: "CF",
      label: "Central African Republic",
      phone: "236",
    },
    {
      code: "CG",
      label: "Congo, Republic of the",
      phone: "242",
    },
    { code: "CH", label: "Switzerland", phone: "41" },
    { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    { code: "CK", label: "Cook Islands", phone: "682" },
    { code: "CL", label: "Chile", phone: "56" },
    { code: "CM", label: "Cameroon", phone: "237" },
    { code: "CN", label: "China", phone: "86" },
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "CR", label: "Costa Rica", phone: "506" },
    { code: "CU", label: "Cuba", phone: "53" },
    { code: "CV", label: "Cape Verde", phone: "238" },
    { code: "CW", label: "Curacao", phone: "599" },
    { code: "CX", label: "Christmas Island", phone: "61" },
    { code: "CY", label: "Cyprus", phone: "357" },
    { code: "CZ", label: "Czech Republic", phone: "420" },
    {
      code: "DE",
      label: "Germany",
      phone: "49",
      suggested: true,
    },
    { code: "DJ", label: "Djibouti", phone: "253" },
    { code: "DK", label: "Denmark", phone: "45" },
    { code: "DM", label: "Dominica", phone: "1-767" },
    {
      code: "DO",
      label: "Dominican Republic",
      phone: "1-809",
    },
    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },
    {
      code: "FK",
      label: "Falkland Islands (Malvinas)",
      phone: "500",
    },
    {
      code: "FM",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    {
      code: "FR",
      label: "France",
      phone: "33",
      suggested: true,
    },
    { code: "GA", label: "Gabon", phone: "241" },
    { code: "GB", label: "United Kingdom", phone: "44" },
    { code: "GD", label: "Grenada", phone: "1-473" },
    { code: "GE", label: "Georgia", phone: "995" },
    { code: "GF", label: "French Guiana", phone: "594" },
    { code: "GG", label: "Guernsey", phone: "44" },
    { code: "GH", label: "Ghana", phone: "233" },
    { code: "GI", label: "Gibraltar", phone: "350" },
    { code: "GL", label: "Greenland", phone: "299" },
    { code: "GM", label: "Gambia", phone: "220" },
    { code: "GN", label: "Guinea", phone: "224" },
    { code: "GP", label: "Guadeloupe", phone: "590" },
    { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GR", label: "Greece", phone: "30" },
    {
      code: "GS",
      label: "South Georgia and the South Sandwich Islands",
      phone: "500",
    },
    { code: "GT", label: "Guatemala", phone: "502" },
    { code: "GU", label: "Guam", phone: "1-671" },
    { code: "GW", label: "Guinea-Bissau", phone: "245" },
    { code: "GY", label: "Guyana", phone: "592" },
    { code: "HK", label: "Hong Kong", phone: "852" },
    {
      code: "HM",
      label: "Heard Island and McDonald Islands",
      phone: "672",
    },
    { code: "HN", label: "Honduras", phone: "504" },
    { code: "HR", label: "Croatia", phone: "385" },
    { code: "HT", label: "Haiti", phone: "509" },
    { code: "HU", label: "Hungary", phone: "36" },
    { code: "ID", label: "Indonesia", phone: "62" },
    { code: "IE", label: "Ireland", phone: "353" },
    { code: "IL", label: "Israel", phone: "972" },
    { code: "IM", label: "Isle of Man", phone: "44" },
    { code: "IN", label: "India", phone: "91" },
    {
      code: "IO",
      label: "British Indian Ocean Territory",
      phone: "246",
    },
    { code: "IQ", label: "Iraq", phone: "964" },
    {
      code: "IR",
      label: "Iran, Islamic Republic of",
      phone: "98",
    },
    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    {
      code: "JP",
      label: "Japan",
      phone: "81",
      suggested: true,
    },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    {
      code: "KN",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code: "KP",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    {
      code: "LA",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },
    { code: "LB", label: "Lebanon", phone: "961" },
    { code: "LC", label: "Saint Lucia", phone: "1-758" },
    { code: "LI", label: "Liechtenstein", phone: "423" },
    { code: "LK", label: "Sri Lanka", phone: "94" },
    { code: "LR", label: "Liberia", phone: "231" },
    { code: "LS", label: "Lesotho", phone: "266" },
    { code: "LT", label: "Lithuania", phone: "370" },
    { code: "LU", label: "Luxembourg", phone: "352" },
    { code: "LV", label: "Latvia", phone: "371" },
    { code: "LY", label: "Libya", phone: "218" },
    { code: "MA", label: "Morocco", phone: "212" },
    { code: "MC", label: "Monaco", phone: "377" },
    {
      code: "MD",
      label: "Moldova, Republic of",
      phone: "373",
    },
    { code: "ME", label: "Montenegro", phone: "382" },
    {
      code: "MF",
      label: "Saint Martin (French part)",
      phone: "590",
    },
    { code: "MG", label: "Madagascar", phone: "261" },
    { code: "MH", label: "Marshall Islands", phone: "692" },
    {
      code: "MK",
      label: "Macedonia, the Former Yugoslav Republic of",
      phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
    {
      code: "MP",
      label: "Northern Mariana Islands",
      phone: "1-670",
    },
    { code: "MQ", label: "Martinique", phone: "596" },
    { code: "MR", label: "Mauritania", phone: "222" },
    { code: "MS", label: "Montserrat", phone: "1-664" },
    { code: "MT", label: "Malta", phone: "356" },
    { code: "MU", label: "Mauritius", phone: "230" },
    { code: "MV", label: "Maldives", phone: "960" },
    { code: "MW", label: "Malawi", phone: "265" },
    { code: "MX", label: "Mexico", phone: "52" },
    { code: "MY", label: "Malaysia", phone: "60" },
    { code: "MZ", label: "Mozambique", phone: "258" },
    { code: "NA", label: "Namibia", phone: "264" },
    { code: "NC", label: "New Caledonia", phone: "687" },
    { code: "NE", label: "Niger", phone: "227" },
    { code: "NF", label: "Norfolk Island", phone: "672" },
    { code: "NG", label: "Nigeria", phone: "234" },
    { code: "NI", label: "Nicaragua", phone: "505" },
    { code: "NL", label: "Netherlands", phone: "31" },
    { code: "NO", label: "Norway", phone: "47" },
    { code: "NP", label: "Nepal", phone: "977" },
    { code: "NR", label: "Nauru", phone: "674" },
    { code: "NU", label: "Niue", phone: "683" },
    { code: "NZ", label: "New Zealand", phone: "64" },
    { code: "OM", label: "Oman", phone: "968" },
    { code: "PA", label: "Panama", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
    { code: "PF", label: "French Polynesia", phone: "689" },
    { code: "PG", label: "Papua New Guinea", phone: "675" },
    { code: "PH", label: "Philippines", phone: "63" },
    { code: "PK", label: "Pakistan", phone: "92" },
    { code: "PL", label: "Poland", phone: "48" },
    {
      code: "PM",
      label: "Saint Pierre and Miquelon",
      phone: "508",
    },
    { code: "PN", label: "Pitcairn", phone: "870" },
    { code: "PR", label: "Puerto Rico", phone: "1" },
    {
      code: "PS",
      label: "Palestine, State of",
      phone: "970",
    },
    { code: "PT", label: "Portugal", phone: "351" },
    { code: "PW", label: "Palau", phone: "680" },
    { code: "PY", label: "Paraguay", phone: "595" },
    { code: "QA", label: "Qatar", phone: "974" },
    { code: "RE", label: "Reunion", phone: "262" },
    { code: "RO", label: "Romania", phone: "40" },
    { code: "RS", label: "Serbia", phone: "381" },
    { code: "RU", label: "Russian Federation", phone: "7" },
    { code: "RW", label: "Rwanda", phone: "250" },
    { code: "SA", label: "Saudi Arabia", phone: "966" },
    { code: "SB", label: "Solomon Islands", phone: "677" },
    { code: "SC", label: "Seychelles", phone: "248" },
    { code: "SD", label: "Sudan", phone: "249" },
    { code: "SE", label: "Sweden", phone: "46" },
    { code: "SG", label: "Singapore", phone: "65" },
    { code: "SH", label: "Saint Helena", phone: "290" },
    { code: "SI", label: "Slovenia", phone: "386" },
    {
      code: "SJ",
      label: "Svalbard and Jan Mayen",
      phone: "47",
    },
    { code: "SK", label: "Slovakia", phone: "421" },
    { code: "SL", label: "Sierra Leone", phone: "232" },
    { code: "SM", label: "San Marino", phone: "378" },
    { code: "SN", label: "Senegal", phone: "221" },
    { code: "SO", label: "Somalia", phone: "252" },
    { code: "SR", label: "Suriname", phone: "597" },
    { code: "SS", label: "South Sudan", phone: "211" },
    {
      code: "ST",
      label: "Sao Tome and Principe",
      phone: "239",
    },
    { code: "SV", label: "El Salvador", phone: "503" },
    {
      code: "SX",
      label: "Sint Maarten (Dutch part)",
      phone: "1-721",
    },
    {
      code: "SY",
      label: "Syrian Arab Republic",
      phone: "963",
    },
    { code: "SZ", label: "Swaziland", phone: "268" },
    {
      code: "TC",
      label: "Turks and Caicos Islands",
      phone: "1-649",
    },
    { code: "TD", label: "Chad", phone: "235" },
    {
      code: "TF",
      label: "French Southern Territories",
      phone: "262",
    },
    { code: "TG", label: "Togo", phone: "228" },
    { code: "TH", label: "Thailand", phone: "66" },
    { code: "TJ", label: "Tajikistan", phone: "992" },
    { code: "TK", label: "Tokelau", phone: "690" },
    { code: "TL", label: "Timor-Leste", phone: "670" },
    { code: "TM", label: "Turkmenistan", phone: "993" },
    { code: "TN", label: "Tunisia", phone: "216" },
    { code: "TO", label: "Tonga", phone: "676" },
    { code: "TR", label: "Turkey", phone: "90" },
    {
      code: "TT",
      label: "Trinidad and Tobago",
      phone: "1-868",
    },
    { code: "TV", label: "Tuvalu", phone: "688" },
    {
      code: "TW",
      label: "Taiwan, Province of China",
      phone: "886",
    },
    {
      code: "TZ",
      label: "United Republic of Tanzania",
      phone: "255",
    },
    { code: "UA", label: "Ukraine", phone: "380" },
    { code: "UG", label: "Uganda", phone: "256" },
    {
      code: "US",
      label: "United States",
      phone: "1",
      suggested: true,
    },
    { code: "UY", label: "Uruguay", phone: "598" },
    { code: "UZ", label: "Uzbekistan", phone: "998" },
    {
      code: "VA",
      label: "Holy See (Vatican City State)",
      phone: "379",
    },
    {
      code: "VC",
      label: "Saint Vincent and the Grenadines",
      phone: "1-784",
    },
    { code: "VE", label: "Venezuela", phone: "58" },
    {
      code: "VG",
      label: "British Virgin Islands",
      phone: "1-284",
    },
    {
      code: "VI",
      label: "US Virgin Islands",
      phone: "1-340",
    },
    { code: "VN", label: "Vietnam", phone: "84" },
    { code: "VU", label: "Vanuatu", phone: "678" },
    { code: "WF", label: "Wallis and Futuna", phone: "681" },
    { code: "WS", label: "Samoa", phone: "685" },
    { code: "XK", label: "Kosovo", phone: "383" },
    { code: "YE", label: "Yemen", phone: "967" },
    { code: "YT", label: "Mayotte", phone: "262" },
    { code: "ZA", label: "South Africa", phone: "27" },
    { code: "ZM", label: "Zambia", phone: "260" },
    { code: "ZW", label: "Zimbabwe", phone: "263" },
  ];
  const languageSpoken = [
    {
      id: "Assamese",
      name: "Assamese",
      label: "Assamese",
    },
    {
      id: "Bengali",
      name: "Bengali",
      label: "Bengali",
    },
    {
      id: "Gujarati",
      name: "Gujarati",
      label: "Gujarati",
    },
    {
      id: "Hindi",
      name: "Hindi",
      label: "Hindi",
    },
    {
      id: "Kannada",
      name: "Kannada",
      label: "Kannada",
    },
    {
      id: "Kashmiri",
      name: "Kashmiri",
      label: "Kashmiri",
    },
    {
      id: "Konkani",
      name: "Konkani",
      label: "Konkani",
    },
    {
      id: "Malayalam",
      name: "Malayalam",
      label: "Malayalam",
    },
    {
      id: "Manipuri",
      name: "Manipuri",
      label: "Manipuri",
    },
    {
      id: "Marathi",
      name: "Marathi",
      label: "Marathi",
    },
    {
      id: "Nepali",
      name: "Nepali",
      label: "Nepali",
    },
    {
      id: "Oriya",
      name: "Oriya",
      label: "Oriya",
    },
    {
      id: "Punjabi",
      name: "Punjabi",
      label: "Punjabi",
    },
    {
      id: "Sanskrit",
      name: "Sanskrit",
      label: "Sanskrit",
    },
    {
      id: "Sindhi",
      name: "Sindhi",
      label: "Sindhi",
    },
    {
      id: "Tamil",
      name: "Tamil",
      label: "Tamil",
    },
    {
      id: "Telugu",
      name: "Telugu",
      label: "Telugu",
    },
    {
      id: "Urdu",
      name: "Urdu",
      label: "Urdu",
    },
    {
      id: "Bodo",
      name: "Bodo",
      label: "Bodo",
    },
    {
      id: "Santhali",
      name: "Santhali",
      label: "Santhali",
    },
    {
      id: "Maithili",
      name: "Maithili",
      label: "Maithili",
    },
    {
      id: "Dogri",
      name: "Dogri",
      label: "Dogri",
    },
  ];

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "airAndTrans",
    }
  );

  const addHandler = () => {
    append({
      transit: "",
      airline: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "booking_status" && value === "1") {
      setValue("departing_on", "");
      setValue("date_range_from", null);
      setValue("date_range_to", null);
      setValue(name, value);
    } else if (name === "booking_status" && value === "2") {
      setValue("airline", "Yet to Book");
      setValue("date_range_from", "");
      setValue("date_range_to", "");
      setValue("departing_on", null);
      setValue(name, value);
    }
    setValue(name, value);
  };
  const mycountry=CountryJson;
  return (
    <div>
      <div className="">
        <h3 className="destinationdetailmain">
          Select your airport, airline and language details
        </h3>
        <div className="destinationdetailhrlines"></div>

        <div className="destinationdetailSub">
          Travel Date/Booking status
          <span className="destinationdetailSubArt">*</span>
        </div>

        <Grid
          container
          spacing={3}
          className="destinationdetail"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box>
            <Grid item xs={12}>
              <div className="destinationdetailTravelscope">
                <div
                  id="demo-row-radio-buttons-group-label"
                  className="destinationdetailHead"
                >
                  Booking Status
                </div>
                <Controller
                  name="booking_status"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <div
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      className="destinationdetailRadioGroup"
                    >
                      <label className="destinationdetailYetBook">
                        Yet to book
                      </label>
                      <Radio
                        checked={values.booking_status === "2"}
                        onChange={handleChange}
                        value="2"
                        name={name}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}

                        //  inputProps={{ 'aria-label': 'A' }}
                      />
                      {/* <label>Yet to book</label> */}
                      <div className="destinationdetailBooked">Booked</div>
                      <Radio
                        checked={values.booking_status === "1"}
                        onChange={handleChange}
                        value="1"
                        name={name}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                      {/* <label>Booked</label> */}
                    </div>
                  )}
                />
                <div style={{ color: "red" }}>
                  {errors.user_type && errors.user_type.message}
                </div>
              </div>
            </Grid>
          </Box>
        </Grid>
        {values.booking_status === "2" ? (
          <Container>
            <div className="destinationdetailPageContainer">
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Controller
                  name="date_range_from"
                  control={control}
                  render={({ field: { ref, value, name, ...rest } }) => (
                    <DatePicker
                      // disableFuture
                      name="date_range_from"
                      inputFormat="DD-MM-yyyy"
                      value={value}
                      onChange={(newValue) => {
                        setValue(name, newValue.format("YYYY-MM-DD"));
                      }}
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            name="dateFrom"
                            label="Date Range from"
                            variant="standard"
                            color="success"
                            focused
                            className="destinationdetailInputFrom"
                          />
                        );
                      }}
                      {...rest}
                    />
                  )}
                />
              </LocalizationProvider>
              <div style={{ color: "red" }}>
                {errors.date_range_from && errors.date_range_from.message}
              </div>
            </div>
            <Grid item xs={12} sm={6}>
              <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <Controller
                    name="date_range_to"
                    control={control}
                    render={({ field: { ref, value, name, ...rest } }) => (
                      <DatePicker
                        inputFormat="DD-MM-yyyy"
                        value={value}
                        onChange={(newValue) => {
                          setValue(name, newValue);
                        }}
                        renderInput={(params) => {
                          return (
                            <TextField
                              {...params}
                              name="dateFrom"
                              label="Date Range To"
                              variant="standard"
                              color="success"
                              focused
                              className="destinationdetailInputTo"
                            />
                          );
                        }}
                        {...rest}
                      />
                    )}
                  />
                </LocalizationProvider>
                <div style={{ color: "red" }}>
                  {errors.date_range_to && errors.date_range_to.message}
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="col-md-6">
                <div className="form-group">
                  <Controller
                    control={control}
                    name="flying_from"
                    render={({ field: { onChange, value, name } }) => (
                      <Autocomplete

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
                      freeSolo={false}
                        sx={{ width: 200 }}
                        options={mycountry}
                        // getOptionLabel={(option) => option.label}
                        onChange={(event, item) => {
                          setValue(name, item?`${item.city},${item.country}(${item.iata_code}-${item.name})`:'', { shouldValidate: true });
                           
                        }}
                        getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}
                        // value={value}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0,} }}
                            {...props}
                            
                          >
                          
                            {option.city},{option.country}({option.iata_code}-{option.name})

                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            // color="success"
                            // focused
                            className="destinationdetailFlyingFrom"
                            {...params}
                            label="Flying from"
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
                {errors.flying_from && errors.flying_from.message}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="col-md-6">
                <div className="form-group">
                  <Controller
                    control={control}
                    name="destination"
                    render={({ field: { onChange, value, name } }) => (
                      <Autocomplete
                        // name="countries"
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
                        sx={{ width: 200 }}
                        options={mycountry}
                        autoHighlight
                        freeSolo={false}
                        getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}

                        // value={value}
                        // getOptionLabel={(option) => option.label}
                        onChange={(event, item) => {
                          setValue(name, item?`${item.city},${item.country}(${item.iata_code}-${item.name})`:'', { shouldValidate: true });
                        }}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0,} }}
                            {...props}
                            
                          >
              
                            {option.city},{option.country}({option.iata_code}-{option.name})

                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            className="destinationdetaildestination"
                            value={value}
                            {...params}
                            label="Destination"
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
                {errors.destination && errors.destination.message}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <Controller
                  name="airline"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Airline"
                      className="destinationdetailyetToBook"
                      variant="standard"
                      color="success"
                      focused
                    />
                  )}
                />
              </div>
              <div style={{ color: "red" }}>
                {errors.airline && errors.airline.message}
              </div>
            </Grid>
          </Container>
        ) : (
          <Container>
            <div>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Controller
                  name="departing_on"
                  control={control}
                  render={({ field: { ref, value, name, ...rest } }) => (
                    <DatePicker
                      name="departing_on"
                      inputFormat="DD/MM/yyyy"
                      value={value}
                      onChange={(newValue) => {
                        setValue(
                          "departing_onn",
                          newValue.format("DD/MM/YYYY")
                        );
                        setValue(name, newValue);
                      }}
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            name="dateFrom"
                            label="Departing on"
                            variant="standard"
                            color="success"
                            focused
                            className="destinationSelfInput"
                          />
                        );
                      }}
                      {...rest}
                    />
                  )}
                />
              </LocalizationProvider>
              <div style={{ color: "red" }}>
                {errors.departing_on && errors.departing_on.message}
              </div>
            </div>
            <React.Fragment>
              <Grid
                container
                spacing={3}
                className="destinationSelf"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="destinationSelfAirlinesSub">
                  Travel/Airlines Details
                  <span className="destinationSelfSubArt">*</span>
                </div>

                <div>
                  <Card className="destinationSelfCard">
                    <Grid container spacing={2}>
                      <Grid item xs={6} className="destinationSelfFlyingFrom">
                        Flying from
                      </Grid>
                      <Grid item xs={6} className="destinationSelf-CardAirline">
                        Airline
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={2}
                      className="destinationSelfSelect"
                    >
                      <Grid item xs={6} sm={6}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Controller
                              control={control}
                              name="flying_from"
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Autocomplete
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
                      freeSolo={false}
                                  id="country-select-demo"
                                  sx={{ width: 300 }}
                                  options={mycountry}
                                  autoHighlight
                                  onChange={(event, item) => {
                                    setValue(name, item?`${item.city},${item.country}(${item.iata_code}-${item.name})`:'', {
                                      shouldValidate: true,
                                    });
                                  }}
                                  getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}

                                  // value={value}
                                  renderOption={(props, option) => (
                                    <Box
                                      component="li"
                                      sx={{ "& > img": { mr: 2, flexShrink: 0,} }}
                                      {...props}
                                      
                                    >
                                    
                                      {option.city},{option.country}({option.iata_code}-{option.name})
          
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Select"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
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
                      </Grid>

                      <Grid item xs={6} sm={6}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Controller
                              control={control}
                              name="airline"
                              render={({
                                field: { onChange, air, name, value },
                              }) => (
                                <Autocomplete
                                  id="airlines"
                                  autoHighlight
                                  // id="country-select-demo"
                                  options={airlines}
                                  // getOptionLabel={(option) => option.name}
                                  getOptionSelected={(option, value) =>
                                    value === undefined ||
                                    value === "" ||
                                    option.id === value.name
                                  }
                                  style={{ width: 270 }}
                                  value={value}
                                  renderOption={(props, option) => (
                                    <Box
                                      component="li"
                                      sx={{
                                        "& > img": { mr: 2, flexShrink: 0 },
                                      }}
                                      {...props}
                                    >
                                      <img
                                        loading="lazy"
                                        width="20"
                                        src={option.logo}
                                        alt=""
                                      />
                                      {option.name} ({option.id})
                                    </Box>
                                  )}
                                  onChange={(event, item) => {
                                    setValue(name, item.name, {
                                      shouldValidate: true,
                                    });
                                  }}
                                  // value={value}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Select"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                      }}
                                    />
                                  )}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div style={{ color: "red" }}>
                          {errors.airline && errors.airline.message}
                        </div>
                      </Grid>
                    </Grid>
                    {/*--------------------------------------------------------------------------------------------------*/}
                    <>
                      {fields.map((field, index) => {
                        return (
                          <div>
                            <Grid container spacing={2}>
                              <Grid
                                item
                                xs={6}
                                // onChange={handleOnChange}
                                className="destinationSelfTransit"
                              >
                                Transit <span>{index + 1}</span>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                className="destinationSelf-TransitCardAirline"
                              >
                                Airline
                              </Grid>
                            </Grid>

                            <Grid
                              container
                              spacing={2}
                              className="destinationSelfTransitSelect"
                            >
                              <Grid item xs={5} sm={5}>
                                <div className="col-md-5">
                                  <div className="form-group">
                                    <Controller
                                      control={control}
                                      name={`airAndTrans[${index}].transit`}
                                      render={({
                                        field: { onChange, value, name },
                                      }) => (
                                        <Autocomplete
                                          id="country-select-demo"
                                          sx={{ width: 300 }}
                                          options={countries}
                                          autoHighlight
                                          // getOptionLabel={(option) => option.label}
                                          getOptionSelected={(option, value) =>
                                            value === undefined ||
                                            value === "" ||
                                            option.id === value.id
                                          }
                                          onChange={(event, item) => {
                                            setValue(name, item.label, {
                                              shouldValidate: true,
                                            });
                                          }}
                                          value={value}
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              label="Select"
                                              inputProps={{
                                                ...params.inputProps,
                                                autoComplete: "new-password", // disable autocomplete and autofill
                                              }}
                                            />
                                          )}
                                        />
                                      )}
                                    />
                                  </div>
                                </div>
                                <div style={{ color: "red" }}>
                                  {Array.isArray(errors.airAndTrans) &&
                                    errors.airAndTrans[index].transit &&
                                    errors.airAndTrans[index].transit.message}
                                </div>
                              </Grid>

                              <Grid
                                item
                                xs={5}
                                sm={5}
                                style={{ marginLeft: 73 }}
                              >
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <Controller
                                      control={control}
                                      name={`airAndTrans[${index}].airline`}
                                      render={({
                                        field: { onChange, value, name },
                                      }) => (
                                        <Autocomplete
                                          id="airlines"
                                          // options={airlines}
                                          // getOptionLabel={(option) => option.name}
                                          style={{ width: 270 }}
                                          value={value}
                                          options={airlines}
                                          renderOption={(props, option) => (
                                            <Box
                                              component="li"
                                              sx={{
                                                "& > img": {
                                                  mr: 2,
                                                  flexShrink: 0,
                                                },
                                              }}
                                              {...props}
                                            >
                                              <img
                                                loading="lazy"
                                                width="20"
                                                src={option.logo}
                                                alt=""
                                              />
                                              {option.name} ({option.id})
                                            </Box>
                                          )}
                                          getOptionSelected={(option, value) =>
                                            value === undefined ||
                                            value === "" ||
                                            option.id === value.id
                                          }
                                          onChange={(event, item) => {
                                            setValue(name, item.name, {
                                              shouldValidate: true,
                                            });
                                          }}
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              label="Select"
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
                                  {Array.isArray(errors.airAndTrans) &&
                                    errors.airAndTrans[index].airline &&
                                    errors.airAndTrans[index].airline.message}
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={2}
                                sm={2}
                                style={{ marginLeft: -145 }}
                              >
                                <Button
                                  onClick={() => remove(1)}
                                  style={{ color: "#1ec28b" }}
                                >
                                  X
                                </Button>
                              </Grid>
                            </Grid>
                            <div></div>
                          </div>
                        );
                      })}
                      <div style={{ color: "red" }}>
                        {errors.airAndTrans && errors.airAndTrans.message}
                      </div>
                    </>
                    {/*--------------------------------------------------------------------------------------------------*/}

                    <div className="destinationSelfButton">
                      <Button
                        className="destinationSelfBtn"
                        onClick={addHandler}
                        disabled={fields.length > 3}
                      >
                        <AddIcon style={{ fontSize: 18, color: "white" }} />
                        Add Transit
                      </Button>
                    </div>
                    <div className="destinationSelfButtonMaxChar">
                      <span>*</span>max 4 transit
                    </div>
                    <Grid container spacing={2}>
                      <Grid item xs={6} className="destinationSelfDestination">
                        Destination
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={2}
                      className="destinationSelfDestinationSelect"
                    >
                      <Grid item xs={6} sm={6}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Controller
                              control={control}
                              name="destination"
                              rules={{ required: true }}
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Autocomplete
                                  id="country-select-demo"
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
                                  sx={{ width: 300 }}
                                  options={mycountry}
                                  autoHighlight
                                  freeSolo={false}
                                  getOptionLabel={(option) => `${option.city},${option.country}(${option.iata_code}-${option.name})`}

                                  // getOptionLabel={(option) => option.label}
                                  // getOptionSelected={(option, value) =>
                                  //   value === undefined ||
                                  //   value === "" ||
                                  //   option.id === value.id
                                  // }
                                  
                                  onChange={(event, item) => {
                                    setValue(name, item?`${item.city},${item.country}(${item.iata_code}-${item.name})`:'', {
                                      shouldValidate: true,
                                    });
                                  }}
                                  // value={value}
                                  renderOption={(props, option) => (
                                    <Box
                                      component="li"
                                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                      {...props}
                                    >
                                     
                                      {option.city},{option.country}({option.iata_code}-{option.name})
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Destination"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                      }}
                                      sx={{ color: "pink" }}
                                    />
                                  )}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div style={{ color: "red" }}>
                          {errors.destination && errors.destination.message}
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </div>
              </Grid>
            </React.Fragment>
          </Container>
        )}
        <Grid item xs={12} sm={6}>
          <div className="destinationdetailPreferedLanguage">
            Language Spoken<span style={{ color: "hotpink" }}>*</span>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Controller
                control={control}
                name="prefered_language"
                render={({ field: { onChange, value, name } }) => (
                  <Autocomplete
                    name="prefered_language"
                    sx={{ width: 200 }}
                    options={languageSpoken}
                    autoHighlight
                    multiple={true}
                    // getOptionLabel={(option) => option.label}
                    onChange={(event, item) => {
                      console.log(item, "item");
                      setValue(name, item, { shouldValidate: true });
                    }}
                    value={value}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        className="destinationdetailPrelanguageInput"
                        {...params}
                        label="Preferred Language"
                        InputLabelProps={{
                          sx: {
                            color: "black",
                            [`&.${inputLabelClasses.shrink}`]: {
                              color: "black",
                            },
                          },
                        }}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                )}
              />
            </div>
          </div>
          <div style={{ color: "red" }}>
            {errors.prefered_language && errors.prefered_language.message}
          </div>
        </Grid>

        <div className="destinationdetailsMandatory">
          All Fields are Mandatory<span style={{ color: "hotpink" }}>*</span>
        </div>
      </div>
    </div>
  );
}

export default StartTrip;
