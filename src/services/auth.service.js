import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = (username, password) => {
  console.log("login called")
  return axios
    .post("http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/login/", {
      email_id:username,
      password:password
    })
    .then((response) => {
      console.log(response,"login response")
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }) 
  //   .catch((error) => {
  //     // Error
  //     if (error.response.status===400) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         // console.log(error.response.data);
  //         // console.log(error.response.status);
  //         // console.log(error.response.headers);
  //         // setRegisterResponseMsg("");
  //         // setRegisterErrorResponse(error.response.data.message)
  //         // alert(error.response.data.message)
  //     }
  // });
};
const logout = () => {

  console.log("login called")
  return axios
    .get("http://ec2-54-185-6-32.us-west-2.compute.amazonaws.com:81/logout/")
    .then((response) => {
      console.log(response,"log out")
      if (response.data) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.removeItem("user")
      }
      // return response.data;
    }) 


  // localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};