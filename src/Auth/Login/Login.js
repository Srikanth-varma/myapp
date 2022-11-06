import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Icon } from '@iconify/react';
// import axiosInstance from "../axios";

import {useFormik } from "formik";

import axios from "axios";
import "../../CSS/login.css";
import { Container, Grid, TextField } from "@mui/material";
// import { Link } from "react-router-dom";
import { Link,Navigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../../actions/auth";



function Login(props) {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  console.log(message,"error check")
  const dispatch =useDispatch();
  // const [password, setPassword] = useState("");
  // const ContactSchema = Yup.object().shape({
  //   email: Yup.string().email("Invalid email").required("Please Enter Your Email"),
  //   password: Yup.string()
  //     .required("Please Enter your password")
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/,
  //       "password is required"
  //     )
  // });

  // const initialValues = Object.entries({
  //   email: "",
  //   password: ""
  // });

  // const [formData, setformData] = useState(initialValues);

  // const [isRevealPwd, setIsRevealPwd] = useState(false);

  // const handleChange = e => {
  //   setformData({
  //     ...formData,
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };


  // const handleSubmit = e => {
  //   // e.preventDefault();
  //   setformData(formData)
  //   console.log(formData);

  // };


  
  // const WithMaterialUI = () => {

    const validationSchema = Yup.object({
      email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup
        .string('Enter your password')
        // .min(8, 'Password should be of minimum 8 characters length')
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
        // )
        .required('Password is required'),
    });

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values))
        dispatch(login(values.email, values.password))
      },
    });

    if (isLoggedIn) {
      return <Navigate replace to="/dashboard" />;
    }


  return (
    <div className="mainLogin">
      <Container>
        <Grid container spacing={2} className="containerMainGrid">
          <Grid item xs={12} md={6} lg={6} sm={12} xl={6}>
            <div>
              <img
                src="./Assets/Images/TravelCompanion Logo PNG.png"
                alt="first"
                className="travelCompanionImg"
              />
            </div>

            <div>
              <img
                src="./Assets/Images/Login Illustraion Image PNG - Copy.png"
                alt="first"
                className="loginsecondimg"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sm={12} xl={6}>
            <div
              className="loginsection"
              style={{ border: "1px solid #4F8DF9" }}
            >
              {/* <Formik
                // enableReinitialize
                initialValues={{ initialValues }}
                validationSchema={ContactSchema}
                onSubmit={
                  // (values) => console.log(values)
                  handleSubmit
                }
              > */}
                {/* {({ errors, touched, isValid, isSubmitting }) => */}
                  <form onSubmit={formik.handleSubmit}>
                    <h2
                      className="tagLine">
                      Login
                    </h2>
                    <p>by using :</p>
                    <Grid container className="socialIcons" style={{ marginLeft: 0 }}>
                      <Grid item xs={2} style={{ color: "#1EC28B ", fontSize: 45 }}>
                        <Icon icon="ant-design:google-square-filled" color="#1ec28b" />                   </Grid>
                      <Grid item xs={2} style={{ color: "#1EC28B ", fontSize: 45 }}>
                        <Icon icon="ant-design:facebook-filled" color="#1ec28b" />              </Grid>
                      <Grid item xs={2} style={{ color: "#1EC28B ", fontSize: 41, marginTop: 2 }}>
                        <Icon icon="akar-icons:linkedin-box-fill" color="#1ec28b" />              </Grid>
                    </Grid>
                    <Container>
                      <hr className="hrLine"></hr></Container>

                    <Grid container spacing={1} className="emailMainGrid">
                      <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                        <label
                          className="emailLabelLogin">
                          Email<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div>
                          <TextField
                            className="emailLoginInput "
                            type="email"
                            name="email"
                            id="email"
                            margin="normal"
                            // onChange={handleChange}

                          // placeholder="Email Address"
                          // fullWidth
                          onBlur={formik.handleBlur}
                      touched={formik.touched}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          />
                        </div>
                        <div
                          id="errormessage"
                          className="loginEmailError"
                        ></div>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={12}
                        md={6}
                        sm={12}
                        xs={12}
                        className="passwordMainGrid"
                      >
                        <label
                          className="passwordLoginLabel"
                        // style={{ marginRight: 118, marginTop: 150 }}
                        >
                          Password
                          <span style={{ color: "red" }}>*</span>
                        </label>
                      </Grid>

                      <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                        <TextField
                          className="passwordLoginInput "
                          name="password"
                          id="password"
                          type="password"
                          // required
                        // onChange={handleChange}

                          // type={isRevealPwd ? "text" : "password"}
                          onBlur={formik.handleBlur}
                      touched={formik.touched}
                          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
                        >
                        </TextField>
                        {/* <div>
                        <Icon icon="akar-icons:eye-slashed" /></div> */}
                        <div
                          id="errormessage"
                          className="passwordDanger"
                        >
                          {/* {errors.password && touched.password
                            ? <div>
                              {errors.password}
                            </div>
                            : null} */}
                        </div>
                      </Grid>
                    </Grid>

                    <div>
                      <Link to='/forgot-password' style={{ textDecoration: "none" }}>
                        <p className="forgetPasswordText">
                          Forgot password?</p></Link>
                    </div>
<div>
<span style={{color:"red"}}>{message}</span>
</div>
                    <Grid container spacing={2} >
                      <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                        {/* <span>{message}</span> */}
                        <button
                          className="loginBtn"
                          id="getButton"
                          name="Submit"
                          type="submit"
                        >
                          Login
                        </button>

                        <div className="notRegisterText">
                          Not register yet?
                          <Link to='/signup' style={{ textDecoration: "none" }}>
                            <span className="createText">
                              Create Account
                            </span>
                          </Link>
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                  {/* } */}
              {/* </Formik> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;