import React from 'react'
import Layout from './Layout/Layout'
import Signup from './Signup/Signup'
import Login from './Login/Login';
//import logo from "./images/google-drive-logo.png";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import AccountActivation from './AccountActivation/AccountActivation';
import HomePage from './HomePage/HomePage';
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPasswordCard from './ResetPasswordCard/ResetPasswordCard';

const App = () => {
  {console.log(process.env.BACK_END_SERVER)}
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Layout}/>
        <Route exact path = "/signup" component = {Signup}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/activate/:token" component = {AccountActivation} />
        <Route exact path = "/forgot-password" component = {ForgotPassword} />
        <Route exact path = "/reset-password/:token" component = {ResetPasswordCard} />
        <PrivateRoute exact path = "/homepage" component = {HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
