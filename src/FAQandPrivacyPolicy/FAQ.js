// import { Gif } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
// import Header from "../../Components/Header/Header";
import DashboardHeader from "../Dashboard/DashboardHeader";
import "../CSS/FAQ.css";
// import SearchIcon from "@mui/icons-material/Search";
import Accordion from "./FAQAccordian";
// import ConnectAccordion from "./ConnectAccordion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import VerticalTabs from "./TabPanel";
import AccordianContent from "./AccordionContent";

function FAQ() {
  const [connectShow, setConnectShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const tabAccordionContents = AccordianContent();

  return (
    <div>
      <DashboardHeader />
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} className="FAQHeading">
              <h1 className="frequentlyAskedHeading">
                Frequently asked{" "}
                <span style={{ color: "rgb(30,194,139,80%)" }}>
                  Questions (FAQ’s)
                </span>
              </h1>
              <p style={{ color: "#000000" }} className="helpText">
                Have questions? We’re here to help.
              </p>
            </Grid>

            {/* <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="searchContainer">
                <Autocomplete
                  onChange={changeHandler}
                  // style={{ width: 410 }}
                  sx={{
                    width: 400,
                    ".MuiOutlinedInput-root": {
                      "&:hover": {
                        // borderRadius: 0,
                        borderColor: "none",
                        borderWidth: 10,
                      },
                    },
                  }}
                  freeSolo
                  options={tabAccordionContents.accordionData}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="Search"
                      placeholder="Search"
                      className="searchLabel"
                    />
                  )}
                />
                <div>
                  <SearchIcon className="FAQsearchIcon" />
                </div>
              </div>
            </Grid> */}
          </Grid>

          <Grid container spacing={2} className="sideMenuAccordionContainer">
            <VerticalTabs />
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default FAQ;
