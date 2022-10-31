import { Box, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import "../../CSS/settings.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditProfile from '../EditProfile';
import SidebarLink from '../SidebarLink';
import DashboardHeader from '../DashboardHeader';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";

function Settings() {


  const { isLoggedIn,user } = useSelector(state => state.auth);

  console.log("user_id",user.user_id)
  const [passwordMessage,setPasswordMessage]=React.useState(null)
  const [passwordError,setPasswordError]=React.useState(null)

    const validationSchema = Yup.object({
        OldPassword: Yup
          .string()
          .required('Please Enter OldPassword'),
          NewPassword: Yup
          .string()
          // .notOneOf([Yup.ref("OldPassword"), null], "Old and New Password are same")
          .required('Please Enter NewPassword'),
          confirmNewpassword: Yup
          .string()
          .oneOf([Yup.ref("NewPassword"), null], "Passwords must match")
          .required("Passwords must match"),
      });  
    
    
      const formik = useFormik({
        initialValues: {
            OldPassword: '',
            NewPassword:'',
            confirmNewpassword:'',
        
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // alert(values);
          // const beginDate = moment(values.FromDate).format('YYYY-MM-DD')
          // console.log(beginDate);
        //   const mydate=new Date(values.FromDate)
        //   const thisdate=mydate.getDate()+'-'+(mydate.getMonth()+1)+'-'+mydate.getFullYear()
        //   console.log(thisdate)
          console.log(values)
          
          // console.log(JSON.stringify(values))
          // dispatch(login(values.email, values.password))
          axios
             .put(` http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/change-password/${user.user_id}/`
             ,  {
              old_password: values.OldPassword,
              new_password: values.NewPassword
                    }
          )
             .then((response) => {
               console.log(response,"change password response")
              
                 if (response.data) {
                  formik.resetForm()
                  console.log(response.data.message,"change password response message");
                  setPasswordMessage(response.data.message)
                  setPasswordError(null)
                 }
           
               
             }) .catch((error) => {
               // Error
               if (error.response.status) {
                   // The request was made and the server responded with a status code
                   // that falls out of the range of 2xx
                   console.log(error.response.data,"error message");
                  //  console.log(error.response.status);
                  //  console.log(error.response.headers);
                  setPasswordError(error.response.data.message)
                  setPasswordMessage(null)
               }
           })
          
        },
      });




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
            <Box className="settingBox">
                <h3 className='mySettingHeading'>Settings</h3>

                <Grid container spacing={2} className="settingFieldsOuterContainer" >
               
                    <div className='settingsFieldsInnerContainer'>
                        {/* <Grid item lg={12} xs={12} >
                            <div><label className='labelNameSetting'>Email Update</label></div>
                            <TextField id="standard-basic" variant="standard" className='settingName' InputProps={{ endAdornment: <button className='updateButton'>UPDATE</button> }} />
                        </Grid >
                        <Grid item lg={12} xs={12} className="">
                            <div><label className='labelDOBSetting'>Mobile Number Update</label></div>
                            <TextField variant="standard" className='dobSettingEdit' InputProps={{ endAdornment: <button className='updateButton'>UPDATE</button> }} />
                        </Grid> */}

                        <Box className='changePasswordOuterContainer'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='changePasswordFields'>
                                <div><p>Change Password</p></div>
                                <Grid item lg={12} xs={12} >
                                    <div><label className='enterOldPasswordLabel'>Enter Old Password</label></div>
                                    <TextField 
                                     type="password"
                                    id="standard-basic" 
                                    variant="standard"
                                     className='oldpasswordInput'
                                     name='OldPassword'
                                     onBlur={formik.handleBlur}
                                     touched={formik.touched}
                                     value={formik.values.OldPassword}
                                     onChange={formik.handleChange}
                                     error={
                                       formik.touched.OldPassword && Boolean(formik.errors.OldPassword)
                                     }
                                     helperText={formik.touched.OldPassword && formik.errors.OldPassword}
                                      />
                                </Grid >
                                <Grid item lg={12} xs={12} >
                                    <div><label className='enterNewPasswordLabel'>Enter New Password</label></div>
                                    <TextField
                                     type="password"
                                     variant="standard" 
                                    className='NewpasswordInput' 
                                    name='NewPassword'
                                    onBlur={formik.handleBlur}
                                    touched={formik.touched}
                                    value={formik.values.NewPassword}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.NewPassword && Boolean(formik.errors.NewPassword)
                                    }
                                    helperText={formik.touched.NewPassword && formik.errors.NewPassword}
                                    />
                                </Grid>
                                <Grid item lg={12} xs={12} >
                                    <div><label className='confirmNewPasswordLabel'>Confirm New Password</label></div>
                                    <TextField
                                     type="password"
                                     variant="standard"
                                     className='confirmNewpasswordInput'
                                     name='confirmNewpassword'
                                     onBlur={formik.handleBlur}
                                     touched={formik.touched}
                                     value={formik.values.confirmNewpassword}
                                     onChange={formik.handleChange}
                                     error={
                                       formik.touched.confirmNewpassword && Boolean(formik.errors.confirmNewpassword)
                                     }
                                     helperText={formik.touched.confirmNewpassword && formik.errors.confirmNewpassword} />
                                </Grid>
                            </div>
                            <Grid style={{textAlign: "center"}}>
                            <span style={{color:"green"}}>{passwordMessage}</span>
                              <span style={{color:"red"}}>{passwordError}</span>
                            </Grid>
                            <Grid className='buttonContainer'>
                             
                                <button name='Submit' className='saveSetting' type='submit'>SAVE</button>
                            </Grid>
                            </form>
                        </Box>



                    </div>
                </Grid>
                <div className='deleteOuterContainer'>
                    <Grid className="deleteAccountCointainer" >
                        <p lg={6} className="deleteAccountText">
                            Delete Account
                        </p>
                    </Grid>
                    <Grid className='deleteButtonContainer'>
                        <button lg={6} className='deleteAccountButton'> DELETE</button>
                    </Grid>
                </div>
            </Box>
        </div >
        <EditProfile></EditProfile>
      </div>
    </>
    )
}


export default Settings