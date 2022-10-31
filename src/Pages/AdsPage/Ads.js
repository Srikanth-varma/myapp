import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../../CSS/ads.css";
import { Fragment } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import AdsForm from "./AdsForm";
import DashboardHeader from "../../Dashboard/DashboardHeader";
import axios from "axios";
import Swal from "sweetalert2";

const Ads = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    companyname: Yup.string().required("Company Name is required"),

    websiteName: Yup.string().required("Website Name is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    phone: Yup.string().required("Phone is required"),
    location: Yup.string().required("Location is required"),
    adDuration: Yup.string().required("AD is required"),
    adPrice: Yup.string().required("AD Price is required"),

    acceptTerms: Yup.bool().oneOf([true], "Captcha is required"),
  });

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const values = getValues();
  console.log("errors", errors);
  console.log("values..", values);
  // useEffect(() => {
  //   reset({
  //     name: "",
  //     country: "",
  //     state: "",
  //     code: "",
  //     phone: "",
  //     short_description: "",
  //     captcha: "",
  //   });
  // }, []);

  const onSubmit = (values) => {
    console.log(values, "values");
    if (values)
    Swal.fire({
        title: "Thanks for your enquiry",
        text: "We will get back to you soon",
        icon: "success",
        buttons: {
          ok: {
            text: "Yes",
            value: "yes",
          },
          cancel: "No",
        },
      })
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
        " http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/ads-enquiry/",
        newdata
      )
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error.values);
      });
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <div>
        {" "}
        <DashboardHeader />
      </div>
      <div>
        <AdsForm
          control={control}
          Controller={Controller}
          values={values}
          setValue={setValue}
          errors={errors}
          register={register}
          onBlur={onBlur}
        />
      </div>
      <Box mt={3}>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          className="ads-btn"
        >
         Submit
        </Button>
      </Box>
    </div>
  );
};

export default Ads;
