import React,{useEffect} from 'react'
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
import { useForm,FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TravellerDetails from './TravellerDetails';
import StartTrip from './DestinationDetail';
import TripDetails from './TripDetails';
import FullDetails from './FullDetails';
import "./CreateTripNew.css"
import validation from './Validation';



const CreateTripEdit = () => {

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
 
  let validationSchema = validation(stepsTovalidate[activeStep],activeStep)
  
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
    formState: { errors,isDirty },
  
  } = useForm({
    resolver: yupResolver(validationSchema),
    // defaultValues:{...finalIni}
  });
  const values=getValues()
  const watchFields = watch(); 
  
// console.log("errors",errors)
console.log("values..",values)
  useEffect(() => {
  
    reset({ 
      name: "",
      age_group: "",
      gender: "",
      category:"1",
      user_type:"1",
      tip_expected:"",
      booking_status:"1",
      date_range_from:"",
      date_range_to:"",
      flying_from:"",
      destination:"",
      airline:"Yet to Book",
      prefered_language:[],
      departing_on:"",
      airAndTrans:[
        {
          transit:"",
          airline:""
        }
      ],
      trip_name:"",
      assistance_needed:"",
      meetup_location:"",
      short_description:"",
     });
 
}, [])

const totalSteps = () => {
  return steps.length;
};

const isLastStep = () => {
  return activeStep === totalSteps() - 1;
};

const onSubmit=(data)=>{
  if(isLastStep()){

  }else{
    setActiveStep(activeStep + 1);
  }
  // console.log(data,"data")
}

  return (
    <div>
     <div>
     <Stepper activeStep={activeStep} alternativeLabel sx={{width:"100%", marginTop:"2rem"}}>
        {steps.map((label) => (
          //  <Step key={label}></Step>
          <Step >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     </div>

     <div>
      <div>
      <div className="">Step{`(${activeStep+1}/4)`}</div>
      <div className="">Traveller Details</div>
      <div className="travellerhrlines"></div>
      </div>
    
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          {
           activeStep===0?<TravellerDetails
                            control={control}
                            Controller={Controller}
                            values={values}
                            setValue={setValue}
                            errors={errors}
                            register={register}
           />
           :activeStep===1?<StartTrip
                           control={control}
                           Controller={Controller}
                           values={values}
                           setValue={setValue}
                           errors={errors}
                           register={register}                
           />
           :activeStep===2?<TripDetails
                          control={control}
                          Controller={Controller}
                          values={values}
                          setValue={setValue}
                          errors={errors}
                          register={register} 
           />
           :activeStep===3?<FullDetails
                          control={control}
                          Controller={Controller}
                          values={values}
                          setValue={setValue}
                          errors={errors}
                          register={register} />
           :null
          }
        </div>
       {activeStep!==steps.length-1&& <div>
          <button type="submit" disabled={(values.Declaration!==true&&activeStep===steps.length-2)}>{activeStep===steps.length-1?"Submit":"Next"}</button>
          {activeStep!==0&&<button type="button" onClick={()=>{
            setActiveStep(activeStep-1)
          }}>Back</button>}
         </div>}
      </form>
     </div>
    </div>
  )
}

export default CreateTripEdit