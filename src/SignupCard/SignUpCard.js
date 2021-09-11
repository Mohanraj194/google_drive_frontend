import React, { useState } from "react";
import "./SignUpCard.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const SignupCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    buttonText: "Sign Up",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setUserDetails((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserDetails((prevState) => ({
      ...prevState,
      buttonText: "Submitting...",
    }));
    if(userDetails.password !== userDetails.confirmPassword){
      toast.error("Password mismatch")
      setUserDetails((prevState) => ({
        ...prevState,
        buttonText: "Sign Up",
      }));
    }
    else{
      try{
       // console.log("a")
      //  console.log(process.env.REACT_APP_MY_ENV)
        let res = await axios.post(`${process.env.REACT_APP_MY_ENV}/signup`,{name : userDetails.name, email : userDetails.email, password : userDetails.password})
       // console.log("b")
        let data = res.data
      //  console.log(data)
        setUserDetails((prevState) => ({
          ...prevState,
          name : "",
          email : "",
          password : "",
          confirmPassword : "",
          buttonText : "Sign Up"
        }));
        toast.success(data.message)
      }
      catch(error){
        console.log('Signup error', error.response.data.error)
        setUserDetails((prevState) => ({
          ...prevState,
          buttonText: "Sign Up",
        }));
        toast.error(error.response.data.error)
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className="form">
        <div className="user-details">
          <small className="text-success">Name</small>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <small className="text-success">Email</small>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <small className="text-success">Password (minimum 6 characters)</small>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <small className="text-success">Confirm Password</small>
          <input
            type="password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </div>
        <button
          className="btn-outline-success btn-block p-2"
          name="signup"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {userDetails.buttonText}
        </button>
      </form>
    </div>
  );
};

export default SignupCard;
