
import React from "react";
import * as Yup from "yup";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { Field, Form, Formik } from "formik";
import { Container, Grid } from "@mui/material";
import "../../CSS/resetPassword.css";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

function ResetPassword() {
  // const history = useHistory();
  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });
  return (
    <div className="scrollBars">
      <div className="imageContainer">
        <img
          src="./assests/images/TravelCompanion Logo PNG.png"
          alt="first"
          className="resetImage"
        /></div>

      <div className="bodyBackground">
        <hr className="resetHr" />
        <Container className="containerClass">
          <div className="innerContainer">
            <Link to='/' style={{ textDecoration: "none", color: "black" }}>
              <div className="iconLeftAlignment">
                <KeyboardBackspaceSharpIcon></KeyboardBackspaceSharpIcon>
                <span className="backArrow">Back to Login</span>
              </div></Link>

            <div className="resetPasswordMain">
              <h1
                className="resetPasswordHeading"
              // style={{ marginRight: 225 }}
              >
                Reset Password
              </h1>
              <Formik
                initialValues={{
                  NewPassword: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  setSubmitting(false);
                  console.log(JSON.stringify(values, null, 2));
                  resetForm({ values: "" });
                  // history.push('/confirmmail')
                }}
              >
                {({ errors, touched, isValid, isSubmitting }) => (
                  <Form>
                    <Grid container spacing={2} className="formMain">
                      <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                        <label className="forgetPasswordLabel">
                          New Password<span style={{ color: "red" }}>*</span>
                        </label>
                        <div>
                          <Field
                            className="inputNewPassword"
                            type="NewPassword"
                            data-testid="NewPassword"
                            name="NewPassword"
                            margin="normal"
                            placeholder="Enter your mail id"

                          />
                        </div>
                        <div className="newPasswordError">
                          {errors.NewPassword && touched.NewPassword ? (
                            <div>{errors.NewPassword}</div>
                          ) : null}
                        </div>
                        <Grid
                          item
                          xl={6}
                          lg={12}
                          md={6}
                          sm={12}
                          xs={12}
                          className="confirmPasswordMainGrid"
                        // style={{ marginTop: 30 }}
                        >
                          <label
                            className="confirmPasswordLabel"
                          // style={{ marginRight: 336 }}
                          >
                            Confirm Password
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div>
                            <Field
                              className="inputPassword"
                              type="password"
                              // data-testid="email"
                              name="email"
                              margin="normal"
                              placeholder="Re-enter your password"

                            />
                          </div>
                          <div className="confirmPasswordError">
                            {errors.email && touched.email ? (
                              <div>{errors.email}</div>
                            ) : null}
                          </div>
                          <div>

                            <Grid container spacing={2} className='buttoMainContainer'>
                              <Grid item xs={12} className="buttonItemGrid">
                                <button
                                  className="requestBtn"
                                  name="submit"
                                  type="submit"

                                >
                                  Reset Password
                                </button>
                              </Grid>
                              <div />
                            </Grid>


                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
}

export default ResetPassword;
