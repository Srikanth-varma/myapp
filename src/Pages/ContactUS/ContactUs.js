import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../CSS/contactUs.css";
import DashboardHeader from "../../Dashboard/DashboardHeader";
import ContactForm from "./ContactForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";


function ContactUs() {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Name is required"),
      country: yup.string().required("Country is required"),
      feedback: yup.string().required("Feedback is required"),
      // captcha: yup.string().required(),
      state: yup.string().required("State is required"),
      // acceptTerms: yup.bool().oneOf([true], "Captcha is required"),
      phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required")
        .min(10)
        .max(12),
    })
    // .required();s
  




  const {
    register,
    control,
    Controller,
    reset,
    handleSubmit,
    getValues,
    setValue,
    watch,
    methods,
    onBlur,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    //   // defaultValues:{...finalIni}
  });
  const watchFields = watch();
  const values = getValues();
  console.log("errors", errors);
  console.log("values..", values);
  useEffect(() => {
    reset({
      name: "",
      country: "",
      state: "",
      country_code: "",
      phone_number: "",
      feedback: "",
      // captcha: "",
    });
  }, []);

  const onSubmit = (values) => {
    console.log(values, "values");
    if (values)
      Swal.fire({
        title: "Thanks for your feedback",
        // text: "Thanks for your feedback",
        icon: "success",
        buttons: {
          ok: {
            text: "Yes",
            value: "yes",
          },
          cancel: "No",
        },
      });
    else Swal.fire("Hi", "Please enter values", "error");

    let finalVal = {};
    finalVal["user_id"] = 2;
    const newdata = new FormData();

    Object.entries(finalVal).forEach(([key, value]) =>
      newdata.append(key, value)
    );
    console.log(finalVal, "finalVal");

    axios
      .post(
        " http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/contact-us/",
        newdata
      )
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error.values);
      });
  };

  return (
    <div>
      <div>
        {" "}
        <DashboardHeader />
      </div>
      <div className="contactUS-heading">
        <b>
          <h1>
            <span className="contactUS-headingText ">
              Let's <span style={{ color: "#1ec28b" }}>Talk!!</span>
            </span>
          </h1>
        </b>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} align="center">
          <div>
            <img
              src="./Assets/Images/contactus.jpg"
              alt="logo"
              className="contactUS-Image"
            />
          </div>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Container>
          <ContactForm
            control={control}
            Controller={Controller}
            values={values}
            setValue={setValue}
            errors={errors}
            register={register}
            onBlur={onBlur}
          />
        </Container>
        <div>
          <Button
            type="submit"
            className="contactUS-Btn"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ContactUs;
