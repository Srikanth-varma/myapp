import React from "react";
import * as Yup from "yup";
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { Field, Form, Formik } from "formik";
import { Button, Container, Grid } from "@mui/material";
import "../../CSS/forgetPassword.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {
  const ContactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  
  // const navigate = useNavigate();
  return (
    <div >
      <div className="imageDiv">
        <img
          src="./assests/images/TravelCompanion Logo PNG.png"
          alt="first"
          className="forgotImage"
        />
      </div>
      <div className="forgotContainer" >
        <hr className="forgotHr"></hr>
        <Container >
          <div>
            <div className="forgotOuterContainer">
              <Link to='/login' style={{ textDecoration: "none", color: "black" }}>
                <div className="backIcon">
                  <KeyboardBackspaceSharpIcon ></KeyboardBackspaceSharpIcon>
                  <span className="backLoginText">Back to Login</span>
                </div></Link>

              <div className="forgotInnerContainer">
                <h1 className="forgetPasswordHeading">Forget Password!!!</h1>
                <div className="pleaseText"   >
                  Please enter your registerd email to reset the password....
                </div>
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { resetForm, setSubmitting }) => {
                    setSubmitting(false);
                    console.log(JSON.stringify(values, null, 2));
                    // navigate("/ResetPassword")
                    resetForm({ values: "" });
                  }}
                >
                  {({ errors, touched, isValid, isSubmitting }) => (
                    <Form>
                      <Grid container spacing={2} className="formMainGrid">
                        <Grid item xl={6} lg={12} md={6} sm={12} xs={12} className="itemMainGrid">
                          <label className="forgetEmailLabel">
                            Email<span style={{ color: "red" }}>*</span>
                          </label>
                          <div >
                            <Field
                              className="inputEmail"
                              type="email"
                              data-testid="email"
                              name="email"
                              margin="normal"
                              placeholder="Enter your mail id"
                            />
                          </div>
                          <div
                            id="errormessage"
                            className="emailError"
                          >
                            {errors.email && touched.email ? (
                              <div>{errors.email}</div>
                            ) : null}
                          </div>
                          {/* <Link to='/ResetPassword'> */}
                          <div>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <button
                                  className="resetButton"
                                  name="submit"
                                  type="submit"
                                >
                                  Request reset link
                                </button>
                              </Grid>
                              <div />
                            </Grid>
                          </div>
                          {/* </Link> */}
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ForgetPassword;
