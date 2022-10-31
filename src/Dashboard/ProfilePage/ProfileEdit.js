import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "../../CSS/dashboardpage.css";
import "../../CSS/ProfileEdit.css";
import { Button, FormControl, Grid, IconButton, MenuItem, Select, TextField } from "@mui/material";
import SidebarLink from "../SidebarLink";
import EditProfile from "../EditProfile";
import DashboardHeader from "../DashboardHeader";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Formik,Form } from "formik";
import * as Yup from "yup";
import CountryJson from "../../json/Country-State-City.json"
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";


const ProfileEdit = () => {
    const [age, setAge] = React.useState('');
    const [phonecode,setPhonecode]=React.useState("");




    const { isLoggedIn,user } = useSelector(state => state.auth);
    const userId=user.user_id;
    console.log("user_id",user.user_id)
    const [profileData,setProfileData]=useState({});
    const [change,setchange]=useState(0);
    const [initial_values,setInitial_values]=useState({});
    const [file, setFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);

    
    




    const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = Yup.object({
      full_name: Yup
          .string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
          
    gender: Yup.string().required("Required"),
    age_group: Yup.string().required("Required"),
      country:  Yup.string().required("Required"),
      state:  Yup.string().required("Required"),
      mobile_number: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .min(10)
          .max(12)
          .required("Required"),    
          email_id: Yup.string().email("Invalid email").required("Required"), 
      about: Yup.string().max(80),  
         
      });  
    
 
      // const formik = useFormik({
        
      //   initialValues:
         
      //   final_initialvalues
      //   ,
      //   validationSchema: validationSchema,
      //   onSubmit: (values) => {
      //     // alert(values);
      //     // const beginDate = moment(values.FromDate).format('YYYY-MM-DD')
      //     // console.log(beginDate);
      //   //   const mydate=new Date(values.FromDate)
      //   //   const thisdate=mydate.getDate()+'-'+(mydate.getMonth()+1)+'-'+mydate.getFullYear()
      //   //   console.log(thisdate)
      //     console.log(values,"edit submit data")
      //     // console.log(JSON.stringify(values))
      //     // dispatch(login(values.email, values.password))
      //   },
      // });
      console.log("country state",CountryJson
      )
      const mycountry=CountryJson;
     
                                
    
      // const handleChange=()=>{
      //   formik.setFieldValue('Name',profileData.full_name)
      // }
      useEffect(
        ()=>{
           axios
             .get(`http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/user/profile/${user.user_id}/`)
             .then((response) => {
               console.log(response,"profile response")
              
                 if (response.data) {
              
                  console.log(response.data,"profile response data in edit profile");
                  setProfileData(response.data[0]);
                  setInitial_values(response.data[0]);
                  // formik.setFieldValue("Name",profileData.full_name)
                 }
           
               
             }) .catch((error) => {
               // Error
               if (error.response.status===400) {
                   // The request was made and the server responded with a status code
                   // that falls out of the range of 2xx
                   console.log(error.response.data);
                   console.log(error.response.status);
                   console.log(error.response.headers);
                 
               }
           })
           // formik.setFieldValue("Name",profileData.full_name)
         
         }
           
           ,[])
       
        // console.log(formik, "form values");
      const onSubmit=(values)=>{
        console.log(values,"values")
        console.log(file,"image data")
        const formData = new FormData();
        formData.append("profile_picture",file);
        formData.append("full_name",values.full_name);
        formData.append("age_group",values.age_group);
        formData.append("gender",values.gender);
        formData.append("country",values.country);
        formData.append("mobile_number",values.mobile_number);
        formData.append("country_code",values.country_code);
        formData.append("state",values.state);
        formData.append("email_id",values.email_id);
         formData.append("about",values.about);
        //  formData.append("_method","PATCH");
        
console.log(formData,"formdata")

        axios
        .patch(`http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/user/profile/${user.user_id}/`,
      //   {
      //     profile_picture: {formData},
      //     full_name: values.full_name,
      //     age_group: values.age_group,
      //     gender:values.gender,
      //     country: values.country,
      //     mobile_number: values.mobile_number,
      //     country_code: values.country_code,
      //     state: values.state,
      //     email_id: values.email_id,
      //     about:values.about
        
      // }
      (file !=null)?formData:  
          {
            
            full_name: values.full_name,
            age_group: values.age_group,
            gender:values.gender,
            country: values.country,
            mobile_number: values.mobile_number,
            country_code: values.country_code,
            state: values.state,
            email_id: values.email_id,
            about:values.about
          
        }
      
      // ,{header:{
      //   "Content-Type":"multipart/form-data"
      // }}
  
        )
        .then((response) => {
          console.log(response,"update profile response")
         
            if (response.data) {
         
             console.log(response.data," response update profile");
            //  setProfileData(response.data[0]);
            //  setInitial_values(response.data[0]);
             // formik.setFieldValue("Name",profileData.full_name)
             setResponseMessage(response.data.message)
            }
      
          
        }) .catch((error) => {
          // Error
          if (error.response.status===400) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data,"error");
              console.log(error.response.status);
              console.log(error.response.headers);
              setResponseMessage(null)
          }
      })
     
      }

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main">
    
        <div>
          <Box
            sx={{
              width: 350,
              height: 600,
              backgroundColor: "",
              "&:hover": {
                backgroundColor: "aliceblue",
              },
            }}
          >
            <div>
                {/* <div>Dashboard</div>
                <div>Setting</div>
                <div>Logout</div> */}
                <SidebarLink></SidebarLink>
            </div>
          </Box>
        </div>
        <div>
          {
           Object.entries( initial_values).length>0?
           <Formik
           initialValues={ initial_values}
                       validationSchema={validationSchema}
                       enableReinitialize={true}
                       onSubmit={onSubmit}>
                          {(formik) => {
                            // if(formik.errors.length>0){
                            // setResponseMessage(null)
                            // }
                         console.log("formik val", formik);
                         const countrycode=()=>{ mycountry.map(item => {
                          // console.log("country")
                          
                        if(item.name===formik.values.country){
                        
                           
                                //  setPhonecode(item.phone_code) 
                                 formik.setFieldValue('country_code',item.phone_code)
                                 
                                  formik.setFieldValue("state","")
                                
                                return true
                          
                          
                        }}
                                                
                                               )}
   
                         return (
                           <Form onSubmit={formik.handleSubmit}>
                       <Box className="profileEditbox">
                           <h3 className='myProfileHeading'>Edit My Profile</h3>
                           <Grid className="profileEditContainer" >
                               <div lg={6} className="profileEditInner">
                                   <img
                                       className="profileEditImg"
                                       variant="top"
                                      //  src="./Assets/Images/I2.png"
                                      src={file !=null?URL.createObjectURL(file):formik.values.profile_picture==null?"./Assets/Images/human_dummy_image.jpg":formik.values.profile_picture}
                                       alt="..."
                                   />
                               </div>
                      
                           </Grid>
   
                           <Grid  >
                           
                               <div lg={6} className='changePhoto'>
                               {/* <input accept="image/*" id="icon-button-file"
           type="file" style={{ display: 'none' }} />
         <label htmlFor="icon-button-file">
           <IconButton  aria-label="upload picture"
           component="span">
             {/* <PhotoCamera /> */}
            {/* <AddCircleIcon className='plusIcon'></AddCircleIcon> 
                                 Change Photo
           </IconButton>
         </label> */}
                            {/* <input
                                 style={{ display: 'none' }}
                                 id="icon-button-photo"
        type="file"
         accept='image/*'
        name="profile_picture"
        onChange={(event) => {
          console.log(event.target.files[0],"data of file");
         formik.setFieldValue('profile_picture',event.target.files[0])
          setFile(event.target.files[0]);
        }}
      />       <label htmlFor="icon-button-photo">
                                 <Button variant="text"> 
                                 <AddCircleIcon className='plusIcon'></AddCircleIcon> 
                                 Change Photo
                                
                                 </Button>
                                 </label> */}






                                 {/* <Fragment> */}
        <input
         
          style={{ display: 'none' }}
          id="icon-button-photo"
type="file"
accept='image/*'
name="profile_picture"
onChange={(event) => {
console.log(event.target.files[0],"data of file");
formik.setFieldValue('profile_picture',event.target.files[0])
setFile(event.target.files[0]);
}}
/>     
       
        <label htmlFor="icon-button-photo">
          <Button
            variant="text"
            component="span"
            // className={classes.button}
            // size="large"
            // color="primary"
          >
            <AddCircleIcon className='plusIcon'></AddCircleIcon> 
                                 Change Photo
          </Button>
        </label>
      {/* </Fragment> */}









                                 {/* <input
          type='file'
          name='profile_picture'
          accept='image/*'
          onChange={(e) =>
            formik.setFieldValue('profile_picture', e.currentTarget.files[0])
          }
        /> */}


{/* {file && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(file)} />
        <br />
        <button onClick={()=>setFile(null)}>Remove</button>
        </div>
      )}
      <br /> */}
     
      {/* <br />  */}
      {/* <input
        type="file"
         accept='image/*'
        name="profile_picture"
        onChange={(event) => {
          console.log(event.target.files[0],"data of file");
         formik.setFieldValue('profile_picture',event.target.files[0])
          setFile(event.target.files[0]);
        }}
      /> */}
                                 </div>
                        
                           </Grid>
                           <Grid container spacing={2} className="fieldsOuterContainer" >
                               <div className='fieldsInnerContainer'>
                                   {/* <Grid item lg={12} xs={12} >
                                       <div><label className='labelNameProfile'>Name</label></div>
                                       <TextField id="standard-basic" variant="standard" className='Name' />
                                   </Grid > */}
                                   {/* <Grid item lg={12} xs={12} className="dobOuterContainer"> */}
                                       {/* <div><label className='labelDOBProfile'>Date of Birth</label></div>
                                       <TextField type="date" variant="standard" className='dobProfileEdit' defaultValue="1994-08-31" /> */}
                <div className="emailIdMain">
                       <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                         <label className="labelNameProfile">
                         Name<span style={{ color: "#ff0000" }}>*</span>
                         </label>
                         <div>
                           <TextField
                             className="Name"
                             // onChange={handleChange}
                             style={{borderColor: "#1ec28b"}}
                             sx={{
                               "&.MuiOutlinedInput-root": {
                                 "& fieldset": {
                                   borderColor: "#1ec28b",
                                 },
                                 "&:hover fieldset": {
                                   borderColor: "#1ec28b",
                                 },
                                 "&.Mui-focused fieldset": {
                                   borderColor: "#1ec28b",
                                 },
                                 
                               },
                             }}
                             // defaultValue={formik.setFieldValue("Name",profileData.full_name)}
                             name="full_name"
                             margin="normal"
                             onBlur={formik.handleBlur}
                             touched={formik.touched}
                             value={formik.values.full_name}
                             onChange={formik.handleChange}
                             error={
                               formik.touched.full_name && Boolean(formik.errors.full_name)
                             }
                             helperText={
                               formik.touched.full_name && formik.errors.full_name
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
   <div className="ageGroup">
                       <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                         <label className="labelageGroupLabel">
                           Age Group <span style={{ color: "#ff0000" }}>*</span>
                         </label>
                       </Grid>
                       <Grid item xs={12}>
                         <Select
                           // label=" Select a Gender"
                           className="Age_Group_input"
                           name="age_group"
                           onBlur={formik.handleBlur}
                           touched={formik.touched}
                           value={formik.values.age_group}
                           onChange={formik.handleChange}
                           error={formik.touched.age_group && Boolean(formik.errors.age_group)}
                           helperText={formik.touched.age_group && formik.errors.age_group}
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
                           {/* {formik.touched.Age_Group && formik.errors.Age_Group && (
                             <span
                               className="gender_error"
                               style={{ color: "#d32f2f" }}
                             >
                               {formik.errors.Age_Group}
                             </span>
                           )} */}
   
                           {/* {errors.gender && touched.gender
                                 ? <div>
                                   {errors.gender}
                                 </div>
                                 : null} */}
                         </div>
                       </Grid>
                     </div>                                
                     {/* </Grid> */}
                                   <Grid item lg={12} xs={12} className="gendercontainer">
                                       <div><label className='labelSelectProfile'>Gender</label></div>
                                       <FormControl lg={12} xs={12} className="formControl" >
                                           <Select 
                                           type="select"  
                                           className='selectInput' 
                                           name="gender"
                                           onBlur={formik.handleBlur}
                                           touched={formik.touched}
                                           value={formik.values.gender}
                                           onChange={formik.handleChange}
                                           error={formik.touched.Age_Group && Boolean(formik.errors.gender)}
                                           helperText={formik.touched.gender && formik.errors.gender}
                                           >
                                               <MenuItem value="Male">Male</MenuItem>
                                               <MenuItem value="Female">Female</MenuItem>
                                               <MenuItem value="Others">Others</MenuItem></Select>
                                       </FormControl>
                                   </Grid>
                                   <div className="emailIdContainer">
                       <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                         <label className="emailIdLabel">
                           Email ID<span style={{ color: "#ff0000" }}>*</span>
                         </label>
                         <div>
                           <TextField
                             className="emailinputField"
                             // onChange={handleChange}
                             type="text"
                             name="email_id"
                             margin="normal"
                             onBlur={formik.handleBlur}
                             touched={formik.touched}
                             value={formik.values.email_id}
                             onChange={formik.handleChange}
                             error={
                               formik.touched.email_id && Boolean(formik.errors.email_id)
                             }
                             helperText={
                               formik.touched.email_id && formik.errors.email_id
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
                                   <div className="mobileContainer">
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
                           value=  {formik.values.country_code}
                           onChange={formik.handleChange}
                           error={
                             formik.touched.country_code && Boolean(formik.errors.country_code)
                           }
                           helperText={
                             formik.touched.country_code && formik.errors.country_code
                           }
                         >
                            {/* <MenuItem value="" label="Select a Gender">
                             Select a country{" "}
                           </MenuItem>
                           { mycountry.map(item => {
                       return   ( <MenuItem value={item.phone_code} label="">
                             
                             {item.phone_code}
                           </MenuItem> )
                         })} */}
                           </TextField>
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
                         {/* </TextField> */}
                         {/* <div id="errormessage" className="">
                       {
                             formik.touched.country_code && formik.errors.country_code
                           }
                           </div> */}
                         {/* </div> */}
                           <TextField
                           contr
                             className="mobileinputField"
                             name="mobile_number"
                             onBlur={formik.handleBlur}
                             touched={formik.touched}
                             value={formik.values.mobile_number}
                             onChange={formik.handleChange}
                             error={
                               formik.touched.mobile_number &&
                               Boolean(formik.errors.mobile_number)
                             }
                             helperText={
                               formik.touched.mobile_number &&
                               formik.errors.mobile_number
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
                       <Grid item xl={6} lg={12} md={6} sm={12} xs={12} className="countyContainer">
                         <label className="countryLabel">
                           Country <span style={{ color: "#ff0000" }}>*</span>
                         </label>
                         <Select
                           // label=" Select a Gender"
                           className="countryInputField"
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
                        <Grid item xl={6} lg={12} md={6} sm={12} xs={12} className="stateContainer">
                         <label className="stateLabel">
                           State <span style={{ color: "#ff0000" }}>*</span>
                         </label>
                         <Select
                           // label=" Select a Gender"
                           className="stateInputField"
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
                                   {/* <Grid item lg={12} xs={12} className="locationOuterContainer">
                                       <div><label className='labelLocationProfile'>Location</label></div>
                                       <TextField id="standard-basic" variant="standard" className='locationInputProfile' />
                                   </Grid> */}
                                   {/* <Box className='aboutEdit'>
                                       <div>
                                           <p className='aboutHeading'>About</p>
                                       </div>
                                       <div> */}
                                           {/* <p className='aboutContent'> I am outgoing, dedicated, and open-minded. I get across to people and
                                               adjust to change.</p> */}
                     
                                       {/* </div>
                                   </Box> */}
                                                               <div className="emailIdMain">
                       <Grid item xl={6} lg={12} md={6} sm={12} xs={12}>
                         <label className="labelNameProfile">
                         About<span style={{ color: "#ff0000" }}>*</span>
                         </label>
                         <div>
                           <TextField
                             className="about_profile"
                             // onChange={handleChange}
                            
                             // defaultValue={profileData.about}
                             name="about"
                             margin="normal"
                             onBlur={formik.handleBlur}
                             touched={formik.touched}
                             value={formik.values.about}
                             onChange={formik.handleChange}
                             error={
                               formik.touched.about && Boolean(formik.errors.about)
                             }
                             helperText={
                               formik.touched.about && formik.errors.about
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
                     
                     <Grid style={{textAlign: "center"}}>
                     <span style={{color:"green",marginRight: "60px"}}>{responseMessage}</span>
                     </Grid>
                                   <div className='buttonContainer'>
                                  
                                       <button className='saveButton'>SAVE</button></div>
                               </div>
                           </Grid>
   
   
                       </Box>
                       </Form>
                         )}}
           
                   </Formik >
           
           :null
          }
        </div>
       
                
{/* <EditProfile></EditProfile> */}
      </div>
    </>
  );
};

export default ProfileEdit;