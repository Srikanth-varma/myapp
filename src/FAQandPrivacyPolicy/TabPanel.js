import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "./FAQAccordian";
import { Autocomplete, Grid, TextField } from "@mui/material";
// import ConnectAccordion from "./ConnectAccordion";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Icon } from "@iconify/react";
// import GettingStartedAccordion from "./GettingStartedAccordion";
// import PaymentAccordion from "./PaymentAccodion";
import AccordianContent from "./AccordionContent";

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
};
}

export default function VerticalTabs() {
const [value, setValue] = React.useState(0);
const [searchTerm, setSearchTerm] = React.useState(null);
const [searched, setSearched] = React.useState([]);

//   const handleChange = (event, newValue) => {
//     console.log(newValue, "newValue");
//     setValue(newValue);
//   };

console.log(searched, "searched");

const contents = AccordianContent();

console.log(contents, "contents");
const [connectSearch, setConnectSearch] = React.useState("");

let AllOptions = [];

Object.entries(contents).map((field) => {
    field[1].map((title) => {
    let obj = {};
    if (title.ConnectTitle) {
        obj = {
        ["content"]: title.ConnectContent,
        ["title"]: title.ConnectTitle,
        };
    } else if (title.title) {
        obj = { ["content"]: title.content, ["title"]: title.title };
    } else if (title.GettingStartedTitle) {
        obj = {
        ["content"]: title.GettingStartedContent,
        ["title"]: title.GettingStartedTitle,
        };
    } else if (title.PaymentTitle) {
        obj = {
        ["content"]: title.PaymentContent,
        ["title"]: title.PaymentTitle,
        };
    } else {
    }
    AllOptions.push(obj);
    });
});
console.log(AllOptions, "AllOptions");
const SearchHandler = () => {
    const filtered = !searchTerm
    ? AllOptions.length > 0
    : AllOptions.filter((val) =>
        val.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setSearched(filtered);
};

const handleChange = (event, newValue) => {
    console.log(newValue, "newValue");
    setValue(newValue);
}
//  const handleChange = (event,newValue)

const changeHandler = (event, value) => {
    console.log(value, "value");
    if (value !== null) {
    setSearchTerm(value.title);
    setValue(value.title);

    console.log(value.title);
    } else {
    console.log("88888");
    setSearchTerm(null);
    setSearched([]);
    }
};



return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="searchContainer">
            <Autocomplete
            onChange={changeHandler}
                onClick={SearchHandler}
            sx={{
                width: 400,
                ".MuiOutlinedInput-root": {
                "&:hover": {
                    borderColor: "none",
                    borderWidth: 10,
                },
                },
            }}
            freeSolo
            options={AllOptions}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField
                {...params}
                placeholder="Search"
                className="searchLabel"
                />
            )}
            />
            <div>
            <SearchIcon className="FAQsearchIcon" onClick={SearchHandler} />
            </div>
        </div>
        </Grid>
    </Grid>

    <Box className="tabPanelBox">
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        inkbarstyle={{ background: "black" }}
        // style={{ backgroundColor: "#1ec28b", height: "auto" }}
        onChange={handleChange}
        TabIndicatorProps={{
            style: { display: "none" },
        }}
        aria-label="Vertical tabs example"
        sx={{
            "& button:hover": { backgroundColor: "rgb(30, 194, 139, 5%)" },
            "& button:focus": {
            backgroundColor: "rgb(30, 194, 139, 5%)",
            color: "black ",
            fontWeight: "bold",
            },
            "& button:active": {
            backgroundColor: "rgb(30, 194, 139, 5%)",
            color: "black ",
            fontWeight: "bold",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
        }}
        >
        <Tab
            className="tabPanelAccount"
            //   className={({ isActive }) => (isActive ? "active " : "inactive")}
            id="tabPanelAccount"
            label={
            <div style={{ display: "flex", columnGap: 10 }}>
                <Icon icon="gg:profile" className="ggProfile" />
                <p>Account Settings</p>
            </div>
            }
            {...a11yProps(0)}
        ></Tab>
        <Tab
            className="tabPanelAccount"
            label={
            <div style={{ display: "flex", columnGap: 10 }}>
                <Icon
                icon="fluent:plug-connected-24-filled"
                className="connectedFilled"
                />
                <p>Connect</p>
            </div>
            }
            {...a11yProps(1)}
        />
        <Tab
            className="tabPanelAccount"
            label={
            <div style={{ display: "flex", columnGap: 10 }}>
                <Icon
                icon="fa-solid:hourglass-start"
                className="hourGlassStart"
                />
                <p>Getting Started</p>
            </div>
            }
            {...a11yProps(2)}
        />
        <Tab
            className="tabPanelAccount"
            label={
            <div style={{ display: "flex", columnGap: 10 }}>
                <Icon
                icon="fluent:payment-16-filled"
                className="connectedFilled"
                />
                <p>Payment </p>
            </div>
            }
            {...a11yProps(3)}
        />
        </Tabs>
        {searched.length === 0 && searchTerm === null ? (
        <Box>
            <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={8}>
                <div className="accordion">
                    {contents.accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                    ))}
                </div>
                </Grid>
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={8}>
                <div className="accordion">
                    {contents.ConnectedData.map(
                    ({ ConnectTitle, ConnectContent }) => (
                        <Accordion
                        title={ConnectTitle}
                        content={ConnectContent}
                        />
                    )
                    )}
                </div>
                </Grid>
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={8}>
                <div className="accordion">
                    {contents.GettingStartedData.map(
                    ({ GettingStartedTitle, GettingStartedContent }) => (
                        <Accordion
                        title={GettingStartedTitle}
                        content={GettingStartedContent}
                        />
                    )
                    )}
                </div>
                </Grid>
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={8}>
                <div className="accordion">
                    {contents.PaymentData.map(
                    ({ PaymentTitle, PaymentContent }) => (
                        <Accordion
                        title={PaymentTitle}
                        content={PaymentContent}
                        />
                    )
                    )}
                </div>
                </Grid>
            </Grid>
            </TabPanel>
        </Box>  
        ) : (
        <Box>
            <div className={searched.length > 0 ? "accordion" : ""}>
            {searched.length > 0
                ? searched.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))
                : null}
            </div>
        </Box>
        )}
    </Box>
    </>
);
}
