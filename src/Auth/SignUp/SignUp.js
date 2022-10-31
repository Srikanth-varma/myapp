import React, { useEffect, useState } from "react";
import * as Yup from "yup";
// import axiosInstance from "../axios";
// import { useHistory } from "react-router-dom";
import { Formik, Field, Form, useFormik } from "formik";
import Swal from "sweetalert2";
// import GoogleLogin from "react-google-login";
import "../../CSS/signup.css";
import { responseGoogle, useGoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { LinkedIn, useLinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
import {
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from "@mui/material";
import { CheckBox, NoEncryption } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

// import showPwdImg from "../images/visible.png";
// import hidePwdImg from "../images/hidevisibility.png";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import SelectInput from "@mui/material/Select/SelectInput";
import CountryJson from "../../json/Country-State-City.json"

function SignUp(props) {
  // http://127.0.0.1:8000/login/
  // const history = useHistory();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealCnfPwd, setIsRevealCnfPwd] = useState(false);
  const [registerResponseMsg,setRegisterResponseMsg]=useState("");
  const [registerErrorResponse,setRegisterErrorResponse]=useState("");
  const [phonecode,setPhonecode]=useState("");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(auth.user, "messege from store");
  const { signIn } = useGoogleLogin({
    // clientId: '77u1ur1ceor1kq',
    // clientId:"77u1ur1ceor1kq",
    clientId:
      "619231732966-jt147mnkcsqr3o5ncv8bddq8pr0eeu9e.apps.googleusercontent.com",
    // clientSecret:"pLYWUMGYhIZtqyIT",
    // scope:'r_basicprofile r_emailaddress r_contactinfo r_network',
    redirectUri: "http://localhost:3000",
    //  redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  // const initialFormData = Object({
  //   full_Name: "",
  //   dob: "",
  //   gender: "",
  //   phoneNumber: "",
  //   location: "",
  //   email: "",
  //   password: "",
  //   passwordConfirmation: ""
  // });

  // const [formData, updateFormData] = useState(initialFormData);
  // const [formData, setformData] = useState(initialFormData);
  // const [isSubmit, setIsSubmit] = useState(false);
  // const handleSubmit = (e) => {
  // e.preventDefault();
  //   setformData(formData);
  //   if (Object.keys(formData).length === 0 && isSubmit) {
  //     console.log(formData);

  //   }
  //   console.log(formData);
  //   console.log(formData.full_Name);
  //   console.log(formData.lname);
  //   console.log(formData.phoneNumber);
  //   console.log(formData.email);
  //   console.log(formData.password);
  //   setIsSubmit(true);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(formData);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const passwordRegExp = "^((?=.*d)(?=.*[A-Z])(?=.*W).{8,8})$";

  // const ContactSchema = Yup.object().shape({
  //   full_Name: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),

  //   dob: Yup.string()
  //     .min(1, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),

  //   phoneNumber: Yup.string()
  //     .matches(phoneRegExp, "Phone number is not valid")
  //     .required("Required")
  //     .min(10)
  //     .max(12),

  //   email: Yup.string().email("Invalid email")
  //   .required("Required"),

  //   password: Yup.string().required(
  //     "Must Contain 16 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //   ),
  //   passwordConfirmation: Yup.string().oneOf(
  //     [Yup.ref("password"), null],
  //     "Passwords must match"
  //   )
  // });

  const { linkedInLogin } = useLinkedIn({
    // clientId: '77u1ur1ceor1kq',
    clientId: "86brmzrvhbkp80",

    // clientSecret: "pLYWUMGYhIZtqyIT",
    // scope:'r_basicprofile r_emailaddress',

    redirectUri: "http://localhost:3000/signin-linkedin",
    // LinkedInCallback: responseGoogle,
    // redirectUri: `${window.location.origin}/linkedin`,
    //   for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const validationSchema = Yup.object({
    full_Name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    // dob: Yup.string()
    //   .min(1, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),

    Gender: Yup.string().required("Required"),
    Age_Group: Yup.string().required("Required"),
    // country_code:Yup.string().required("Required"),
    mobile_Number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required")
      .min(10)
      .max(12),
      country:  Yup.string().required("Required"),
      state:  Yup.string().required("Required"),
    // location: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    email_Id: Yup.string().email("Invalid email").required("Required"),

    password: Yup.string().required(
      "Password is required"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
    ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Passwords must match"),
    signinagreement: Yup.boolean()
      .required()
      .isTrue("Need to agree terms and conditions"),
  });

  // email: Yup
  //   .string('Enter your email')
  //   .email('Enter a valid email')
  //   .required('Email is required'),
  // password: Yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),

  const formik = useFormik({
    initialValues: {
      full_Name: "",
      Age_Group: "",
      Gender: "",
      country_code:"",
      mobile_Number: "",
      // location: "",
      country:"",
      state:"",
      email_Id: "",
      password: "",
      passwordConfirmation: "",
      signinagreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setRegisterResponseMsg("");
      // alert(JSON.stringify(values, null, 2));
      console.log("request values",values)
      console.log("request body",JSON.stringify(values));
      // formik.resetForm();
  // const registerResponse= 
   let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json')
   axios
      .post("http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/register/", {
        full_name: values.full_Name,
        age_group: values.Age_Group,
        country : values.country,
        state   : values.state,
        mobile_number: values.mobile_Number,
        country_code : values.country_code,
        email_id: values.email_Id,
        password: values.password,
        gender : values.Gender
      },
      // {
      //   method: 'POST',
      //   mode: 'no-cors',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/json',
      //   },
      //   withCredentials: true,
      //   credentials: 'same-origin',}
      )
      .then((response) => {
        console.log(response,"register response")
        // if (response.data) {
        // ret  localStorage.setItem("user", JSON.stringify(response.data));
        // }
          if (response.data.message) {
            setRegisterErrorResponse("")
        setRegisterResponseMsg(response.data.message)
        formik.resetForm()
        // formik.setFieldValue('signinagreement', checked)
        // values.signinagreement.v
        // formik.values("signinagreement",false)
          }

        // return response.data;
      }) .catch((error) => {
        // Error
        if (error.response.status===400) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            setRegisterResponseMsg("");
            setRegisterErrorResponse(error.response.data.message)
        }
    });
    },
  });

  //   const  addPosts = async () => {
  //     var dataObj = {
  //             email_Id : "Prakash05@gmail.com",
  //             password: "jaya1234"
  //           }
  //  try{
  //   let logindata= await axios.post('http://ec2-13-233-80-109.ap-south-1.compute.amazonaws.com/login/',{
  //         email_Id : "prakash@gmail.com",
  //         password: "jaya4321"
  //       } )
  //        .then((response) => {
  //         console.log(response,"hhh");
  //        });
  //       }catch(error){
  //         console.log(error.response,"gggg");
  //       }

  //  };

  //   addPosts();

  //   const manageac = async () => {
  //     try {
  //       let logindata = await axios
  //         .get(
  //           "http://ec2-13-233-80-109.ap-south-1.compute.amazonaws.com/users-details/"
  //         )
  //         .then((response) => {
  //           console.log(response.data, "manage details");

  //        let   name= response.data.map((item)=>[item.full_Name,item.mobile_Number,item.email_Id])

  //     console.log(name,"array of reg")

  //         });
  //     } catch (error) {
  //       console.log(error.response, "gggg");
  //     }
  //   };

  //  manageac();
console.log("country state",CountryJson
)
const mycountry=CountryJson;
 const countrycode=()=>{ mycountry.map(item => {
    // console.log("country")
    
  if(item.name===formik.values.country){
  
     
           setPhonecode(item.phone_code) 
          return true
    
    
  }}
                          
                          )}
                          



  console.log(formik, "form values");

  return (
    <div className="mainSignup">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <div>
              <img
                src="./assests/images/TravelCompanion Logo PNG.png"
                alt="first"
                className="signupFirstimage"
              />
            </div>
            <h1 className="planForYouHeading">
              <span> Plan For Your </span>
              <span style={{ color: "#175993" }}>Trip </span>
              <br />
              <span> And Explore Your </span>
              <br />
              <span style={{ color: "#7ec649" }}>Life Now ... </span>
            </h1>
            <div>
              <img
                src="./assests/images/Register Illustraion Image PNG.png"
                alt="first"
                className="signupPageSecondimage"
              />
            </div>
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="signupPageContainer">
              {/* <Formik
                initialValues={{
                  initialFormData
                }}
                validationSchema={ContactSchema}
                onSubmit={
                  // (values) => console.log(values),
                  handleSubmit
                }> */}
              {/* {({ errors, touched, isValid, isSubmitting }) => */}
              {/* // Started Create Account Form  // */}
              <form onSubmit={formik.handleSubmit}>
                <h2 style={{ fontWeight: 645, padding: 20 }}>
                  Create your account
                </h2>

                <Grid container spacing={1}>
                  <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                    <label className="fullNamelabel">
                      Full Name <span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div>
                      <TextField
                        name="full_Name"
                        // onChange={handleChange}
                        // required
                        className="fullNameInput"
                        type="text"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.full_Name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.full_Name && Boolean(formik.errors.full_Name)
                        }
                        helperText={formik.touched.full_Name && formik.errors.full_Name}
                      />
                      <div id="errormessage" className="fullNameError">
                        {/* {errors.full_Name && touched.full_Name
                              ? <div>
                                {errors.full_Name}
                              </div>
                              : null} */}
                      </div>
                    </div>
                  </Grid>

                  {/* <div className="dobMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="dobLabel">
                        Date of Birth{" "}
                        <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="inputDate"
                        // onChange={handleChange}
                        name="dob"
                        // required
                        type="date"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}
                      />
                      <div
                        id="errormessage"
                        style={{ marginRight: 230, color: "#ff0000" }}
                        className="dobError"
                      > */}
                  {/* {errors.dob && touched.dob
                              ? <div>
                                {errors.dob}
                              </div>
                              : null} */}
                  {/* </div>
                    </Grid>
                  </div> */}
                  <div className="genderMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="ageGroupLabel">
                        Age Group <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        // label=" Select a Gender"
                        className="genderInput"
                        name="Age_Group"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.Age_Group}
                        onChange={formik.handleChange}
                        error={formik.touched.Age_Group && Boolean(formik.errors.Age_Group)}
                        helperText={formik.touched.Age_Group && formik.errors.Age_Group}
                      >
                        <MenuItem value="" label="Select a Gender">
                          Select Age Group{" "}
                        </MenuItem>
                        <MenuItem value="20-25" label="20-25">
                          {" "}
                          20-25
                        </MenuItem>
                        <MenuItem value="26-30" label="26-30">
                          26-30
                        </MenuItem>
                        <MenuItem value="31-35" label="31-35">
                          31-35
                        </MenuItem>
                        <MenuItem value="36-40" label="36-40">
                          36-40
                        </MenuItem>
                        <MenuItem value="41-45" label="41-45">
                          41-45
                        </MenuItem>
                        <MenuItem value="46-50" label="46-50">
                          46-50
                        </MenuItem>
                        <MenuItem value="51-60" label="51-60">
                          51-60
                        </MenuItem>
                        <MenuItem value="61-70" label="61-70">
                          61-70
                        </MenuItem>
                      </Select>

                      <div id="errormessage" className="genderError">
                        {formik.touched.Age_Group && formik.errors.Age_Group && (
                          <span
                            className="gender_error"
                            style={{ color: "#d32f2f" }}
                          >
                            {formik.errors.Age_Group}
                          </span>
                        )}

                        {/* {errors.gender && touched.gender
                              ? <div>
                                {errors.gender}
                              </div>
                              : null} */}
                      </div>
                    </Grid>
                  </div>
                  <div className="genderMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="genderLabel">
                        Gender <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        // label=" Select a Gender"
                        className="genderInput"
                        name="Gender"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.Gender}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Gender && Boolean(formik.errors.Gender)
                        }
                        helperText={
                          formik.touched.Gender && formik.errors.Gender
                        }
                      >
                        <MenuItem value="" label="Select a Gender">
                          Select a Gender{" "}
                        </MenuItem>
                        <MenuItem value="Male" label="Male">
                          {" "}
                          Male
                        </MenuItem>
                        <MenuItem value="Female" label="Female">
                          Female
                        </MenuItem>
                      </Select>

                      <div id="errormessage" className="genderError">
                        {formik.touched.Gender && formik.errors.Gender && (
                          <span
                            className="gender_error"
                            style={{ color: "#d32f2f" }}
                          >
                            {formik.errors.Gender}
                          </span>
                        )}

                        {/* {errors.gender && touched.gender
                              ? <div>
                                {errors.gender}
                              </div>
                              : null} */}
                      </div>
                    </Grid>
                  </div>

                  <div className="mobileMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="mobileLabel">
                        Mobile Number
                        <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                     
                      <div>
                      {/* <div> */}
                      <TextField
                        // label=" Select a Gender"
                        className="countryCodeInput"
                        name="country_code"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        // value={formik.values.country_code}
                        value=  {formik.values.country_code=phonecode}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.country_code && Boolean(formik.errors.country_code)
                        }
                        helperText={
                          formik.touched.country_code && formik.errors.country_code
                        }
                      >
                        {/* <MenuItem value="" label="Select a Gender">
                          Select a Gender{" "}
                        </MenuItem> */}
                        {/* <MenuItem value="+91" label="+91">
                          {" "}
                          +91
                        </MenuItem>
                        <MenuItem value="+81" label="+81">
                        +81
                        </MenuItem> */}
                         {/* { mycountry.map(item => {
  // console.log("country")
if(item.name===formik.values.country){
  // console.log("state")


    // console.log("state coming",states.name)
             return(          <MenuItem value= {item.phone_code} label="chennai">
                          {item.phone_code}
                        </MenuItem>
  )
  
}}
                        
                        )} */}
                      </TextField>
                      {/* <div id="errormessage" className="">
                    {
                          formik.touched.country_code && formik.errors.country_code
                        }
                        </div> */}
                      {/* </div> */}
                        <TextField
                        contr
                          className="signupmobileInput"
                          name="mobile_Number"
                          onBlur={formik.handleBlur}
                          touched={formik.touched}
                          value={formik.values.mobile_Number}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.mobile_Number &&
                            Boolean(formik.errors.mobile_Number)
                          }
                          helperText={
                            formik.touched.mobile_Number &&
                            formik.errors.mobile_Number
                          }
                        />
                      </div>
                      <div id="error_phone" className="mobileError">
                        {/* {errors.phoneNumber && touched.phoneNumber
                              ? <div>
                                {errors.phoneNumber}
                              </div>
                              : null} */}
                      </div>
                     
                    </Grid>
                    {/* <div id="errormessage" className="">
                    {
                          formik.touched.country_code && formik.errors.country_code
                        }
                        </div> */}
                  </div>

                  {/* <div className=""> */}
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="countryGrid">
                      <label className="countryLabel">
                        Country <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                      <Select
                        // label=" Select a Gender"
                        className="countryInput"
                        name="country"
                        onBlur={formik.handleBlur && countrycode}
                        touched={formik.touched}
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.country && Boolean(formik.errors.country)
                        }
                        helperText={
                          formik.touched.country && formik.errors.country
                        }
                      >
                        <MenuItem value="" label="Select a Gender">
                          Select a country{" "}
                        </MenuItem>
                        { mycountry.map(item => {
                    return   ( <MenuItem value={item.name} label="USA">
                          
                          {item.name}
                        </MenuItem> )
                      })}
                        {/* <MenuItem value="India" label="India">
                          India
                        </MenuItem> */}
                      </Select>
                      <div id="errormessage" className="">
                    {
                          formik.touched.country && formik.errors.country
                        }
                        </div>
                    </Grid>
                   
                    {/* <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                      <label className="locationL">
                        state <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                      <div>
                        <TextField
                          className="locationIput"
                          name="location"
                         
                          type="text"
                          onBlur={formik.handleBlur}
                          touched={formik.touched}
                          value={formik.values.location}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.location &&
                            Boolean(formik.errors.location)
                          }
                          helperText={
                            formik.touched.location && formik.errors.location
                          }
                        />
                        <div id="errormessage" className="locationError">
                        
                        </div>
                      </div>
                    </Grid> */}
                    {/* <div></div> */}
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="stateGrid">
                      <label className="stateLabel">
                        State <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                      <Select
                        // label=" Select a Gender"
                        className="stateInput"
                        name="state"
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={
                          formik.touched.state && formik.errors.state
                        }
                      >
                        <MenuItem value="" label="Select a state">
                          Select a state{" "}
                        </MenuItem>
                        {/* <MenuItem value="telangana" label="telangana">
                          {" "}
                          telangana
                        </MenuItem> */}
 { mycountry.map(item => {
  // console.log("country")
if(item.name===formik.values.country){
  // console.log("state")

return(  item.states.map(states => {
    // console.log("state coming",states.name)
             return(          <MenuItem value= {states.name} label="chennai">
                          {states.name}
                        </MenuItem>
  )
  }
  ))
}}
                        
                        )}
                      </Select>
                      <div id="errormessage" className="">
                    {
                          formik.touched.state && formik.errors.state
                        }
                        </div>
                    </Grid>
                    
                    {/* </div> */}
                  <div className="emailIdMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="emailIdLabel">
                        Email ID<span style={{ color: "#ff0000" }}>*</span>
                      </label>
                      <div>
                        <TextField
                          className="emailIdInput"
                          // onChange={handleChange}
                          type="email"
                          name="email_Id"
                          margin="normal"
                          onBlur={formik.handleBlur}
                          touched={formik.touched}
                          value={formik.values.email_Id}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email_Id && Boolean(formik.errors.email_Id)
                          }
                          helperText={
                            formik.touched.email_Id && formik.errors.email_Id
                          }
                        />
                      </div>
                      <div id="errormessage" className="emailIdError">
                        {/* {errors.email && touched.email
                              ? <div>
                                {errors.email}
                              </div>
                              : null} */}
                      </div>
                    </Grid>
                  </div>

                  <div className="passwordMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="passwordLabel">
                        Password (8+ characters){" "}
                        <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                    </Grid>
                  </div>

                  <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                    <TextField
                      className="passwordInput"
                      name="password"
                      type="password"
                      // required
                      // type={isRevealPwd ? "text" : "password"}
                      onBlur={formik.handleBlur}
                      touched={formik.touched}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <div id="errormessage" className="passwordError">
                      {/* {errors.password && touched.password
                            ? <div>
                              {errors.password}
                            </div>
                            : null} */}
                    </div>
                  </Grid>

                  <div className="confirmPasswordMain">
                    <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                      <label className="confirmPasswordSignupLabel">
                        Confirm Password (8+ characters)
                        <span style={{ color: "#ff0000" }}>*</span>
                      </label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="confirmPasswordInputSignup"
                        name="passwordConfirmation"
                        type="password"
                        // required
                        // onChange={handleChange}
                        // type={isRevealCnfPwd ? "text" : "password"}
                        onBlur={formik.handleBlur}
                        touched={formik.touched}
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.passwordConfirmation &&
                          Boolean(formik.errors.passwordConfirmation)
                        }
                        helperText={
                          formik.touched.passwordConfirmation &&
                          formik.errors.passwordConfirmation
                        }
                      />
                      <div
                        id="errormessage"
                        className="confirmPasswordErrorSignup"
                      >
                        {/* {errors.passwordConfirmation &&
                              touched.passwordConfirmation
                              ? <div>
                                {errors.passwordConfirmation}
                              </div>
                              : null} */}
                      </div>
                    </Grid>
                  </div>
                </Grid>

                <div
                  className="agreement"
                  xs={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <Checkbox
                  checked={formik.values.signinagreement}
                    name="signinagreement"
                    style={{
                      color:
                        formik.touched.signinagreement &&
                        formik.errors.signinagreement
                          ? "red"
                          : "",
                    }}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.signinagreement}
                    value={formik.values.signinagreement}
                    onChange={formik.handleChange}
                    // onChange={(e)=>{
                    //   if(e.target.value==="false"){
                    //     formik.setFieldValue(e.target.name," ")
                    //   }else{
                    //     formik.setFieldValue(e.target.name,e.target.value)
                    //   }
                    // }}
                    error={
                      formik.touched.signinagreement &&
                      Boolean(formik.errors.signinagreement)
                    }
                    helperText={
                      formik.touched.signinagreement &&
                      formik.errors.signinagreement
                    }
                  />
                  <span className="signupAgreementText">
                    By Signing up , you agree to our Terms and Conditions.
                  </span>
                </div>
                {formik.touched.signinagreement &&
                  formik.errors.signinagreement && (
                    <span style={{ color: "#d32f2f" }}>
                      {formik.errors.signinagreement}
                    </span>
                  )}
{registerResponseMsg?<span style={{color:"green"}}>{registerResponseMsg}</span>:null}
{registerErrorResponse?<span style={{color:"red"}}>{registerErrorResponse}</span>:null}
                {/* Register button starts */}
                <Grid container spacing={2} className="registerBtnMain">
                  <Grid item xs={12}>
                    {/* <Link to='/'> */}
                    <button
                      name="Submit"
                      className="registerBtn"
                      type="submit"
                      onClick={()=>{setRegisterResponseMsg("")}}
                    >
                      Register
                    </button>
                    {/* </Link> */}
                  </Grid>
                  <div />
                </Grid>
                {/* Register button ends */}
              </form>
              {/* } */}
              {/* End Create Account Form     */}

              {/* </Formik> */}
              {/* SOCIAL ICONS (LINKEDIN,GOOGLE,FACEBOOK) start */}
              <p> or sign up by using :</p>
              <Grid container className="socialIcons" style={{ marginLeft: 0 }}>
                <Grid item xs={2} style={{ color: "#1EC28B ", fontSize: 45 }}>
                  <Icon
                    onClick={signIn}
                    icon="ant-design:google-square-filled"
                    color="#1ec28b"
                  />{" "}
                </Grid>
                <Grid item xs={2} style={{ color: "#1EC28B ", fontSize: 45 }}>
                  <Icon icon="ant-design:facebook-filled" color="#1ec28b" />
                  {/* <FacebookLogin
                    appId="825386758444401"
                    fields="name,email,picture"
                    callback={responseFacebook}
                  /> */}
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{ color: "#1EC28B ", fontSize: 41, marginTop: 4 }}
                >
                  <Icon
                    onClick={linkedInLogin}
                    icon="akar-icons:linkedin-box-fill"
                    color="#1ec28b"
                  />{" "}
                </Grid>
              </Grid>
              {/* Social icons end */}
              <p>
                Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#4f8df9", fontWeight: 500 }}>
                    Log in
                  </span>
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SignUp;
