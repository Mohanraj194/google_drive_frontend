import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../images/google-drive-logo.png";
import GoogleDriveVector from "../images/google-drive-vector.png";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="landing-page">
      <nav className="navbar navbar-light bg-white">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
            alt=""
          />
          <span className="text-primary ">Google</span> Drive
        </Link>
        <form className="form-inline">
          <Link to="/signup" className = "mr-3">
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="button">
              Sign Up
            </button>
          </Link>
          <Link to="/login" className = "mr-3">
            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-3"
              type="button"
            >
              Login
            </button>
          </Link>
        </form>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 landing-page-description">
            <main className="landing-page-main mb-3">
              Easy and secure access to all your content
            </main>
            <div className="text-muted">
              Store, share, and collaborate on files and images from any mobile
              device, tablet, or computer
            </div>
            <Link to="/signup">
              <button className="btn btn-lg btn-outline-success mr-3 mb-3 mt-3">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-lg btn-outline-success mb-3 mt-3">
                Login
              </button>
            </Link>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-7 col-sm-12">
            <img
              src={GoogleDriveVector}
              alt="Landing Page Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

