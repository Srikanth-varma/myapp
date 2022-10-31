import React, { useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
// import * as Yup from 'yup';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TravellerDetails from "./TravellerDetails";
import StartTrip from "./DestinationDetail";
import TripDetails from "./TripDetails";
import FullDetails from "./FullDetails";
import "./CreateTripNew.css";
import validation from "./Validation";
import axios from "axios";

// const API_URL =
//   "http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/create-trip/";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);


  function getSteps() {
    return [
      <b style={{ color: "darkgreen" }}>
        <CheckCircleIcon />
      </b>,
      <b style={{ color: "darkgreen" }}>
        <CheckCircleIcon />
      </b>,
      <b style={{ color: "darkgreen" }}>
        <CheckCircleIcon />
      </b>,
      <b style={{ color: "darkgreen" }}>
        <CheckCircleIcon />
      </b>,
      // <b style={{ color: "grey" }}>Step(5/5)</b>,
    ];
  }
  const stepsTovalidate = [
    {
      name: "",
      age_group: "",
      gender: "",
      category: "1",
      user_type: "1",
      tip_expected: "",
    },
  ];
  let validationSchema = validation(stepsTovalidate[activeStep], activeStep);

  // console.log(validationSchema,"validationSchema")
  const steps = getSteps();

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
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
    // defaultValues:{...finalIni}
  });
  const values = getValues();
  const watchFields = watch();

  console.log("errors", errors);
  console.log("values..", values);
  useEffect(() => {
    reset({
      photo: "",
      name: "",
      age_group: "",
      gender: "",
      category: "2",
      user_type: "2",
      tip_expected: "",
      booking_status: "2",
      date_range_from: "",
      date_range_to: "",
      flying_from: "",
      destination: "",
      airline: "Yet to Book",
      prefered_language: [],
      departing_on: "",
      airAndTrans: [
        {
          transit: "",
          airline: "",
        },
      ],
      trip_name: "",
      assistance_needed: "",
      meetup_location: "",
      short_description: "",
    });
  }, []);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 2;
  };

  const onSubmit = (values) => {
    console.log(values, "values");

    console.log(isLastStep(), "lastStepchecking");
    if (isLastStep()) {
      let finalVal = {};
      finalVal["user_id"] = 2;
      Object.entries(values).map((field, index) => {
        if (
          field[0] === "departing_on" ||
          field[0] === "date_range_from" ||
          field[0] == "date_range_to"
        ) {
          if (field[1] !== "" && field[1] !== null) {
            finalVal[`${field[0]}`] = field[1].format("DD-MM-YYYY");
          }
        } else if (field[0] === "airAndTrans") {
          field[1].map((innerfield, ind) => {
            Object.entries(innerfield).map((trValue, i) => {
              finalVal[`${trValue[0]}${ind + 1}`] = trValue[1];
            });
          });
        } else if (field[0] === "prefered_language") {
          let language = [];
          field[1].map((innerfield, index) => {
            language.push(innerfield.label);
          });
          const afterJoin = language.join(",");
          finalVal[`${field[0]}`] = afterJoin;
        } else {
          finalVal[`${field[0]}`] = field[1];
        }
      });
      const newdata = new FormData();
      Object.entries(finalVal).forEach(([key, value]) =>
        newdata.append(key, value)
      );
      // newdata.append("")

      console.log(finalVal, "finalVal");
      axios
        .post(
          "http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/create-trip/",
          newdata
        )
        .then((response) => {
          console.log(response, "response");
        })
        .catch((error) => {
          console.log(error.values);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
    // console.log(data,"data")
  };

  // Define the function that fetches the data from API
  // const fetchData = async () => {
  //   try {
  //     const { values } = await axios.get(API_URL);
  //     setValue(values);
  //     console.log(values);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // // Trigger the fetchData after the initial render by using the useEffect hook
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ width: "100%", marginTop: "2rem" }}
        >
          {steps.map((label) => (
            //  <Step key={label}></Step>
            <Step>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div>
        <div>
          {/* <div className="">Step{`(${activeStep+1}/4)`}</div> */}
          {/* <div className="">Traveller Details</div>
      <div className="travellerhrlines"></div> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
            {activeStep === 0 ? (
              <TravellerDetails
                control={control}
                Controller={Controller}
                values={values}
                setValue={setValue}
                errors={errors}
                register={register}
              />
            ) : activeStep === 1 ? (
              <StartTrip
                control={control}
                Controller={Controller}
                values={values}
                setValue={setValue}
                errors={errors}
                register={register}
              />
            ) : activeStep === 2 ? (
              <TripDetails
                control={control}
                Controller={Controller}
                values={values}
                setValue={setValue}
                errors={errors}
                register={register}
              />
            ) : activeStep === 3 ? (
              <FullDetails
                control={control}
                Controller={Controller}
                values={values}
                setValue={setValue}
                errors={errors}
                register={register}
              />
            ) : null}
          </div>
          {activeStep !== steps.length - 1 && (
            <div>
              <Button
                type="submit"
                disabled={
                  values.Declaration !== true && activeStep === steps.length - 2
                }
                className="stepperNextBtn"
                variant="contained"
                color="primary"
              >
                {activeStep === steps.length - 2 ? "Submit" : "Next"}
              </Button>
              {/* {activeStep !== 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(activeStep - 1);
                  }}
                >
                  Back
                </button>
              )} */}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerticalStepper;
