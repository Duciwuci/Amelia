import React, { Component } from "react";

import carusselelem3 from "../LandingPage/LandingPageImages/carussel3.jpeg";
import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";
import "../SignUpPage/SignUpPage.css";
import "../LandingPage/LandingPage.css";

interface Properties {
  update(name: string): void;
}

export default class Login extends Component<Properties, {}> {
  render() {
    return (
      <div className="flex-column">
        <Header />
        <img src={carusselelem3} className="first" />
        <div className="flex-child">
          <form className="form-class">
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>

        <div className="flex-child">
          <GoogleLogin
            clientId="your-google-app-client-id.apps.googleusercontent.com"
            render={(renderProps) => (
              <GoogleButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign in with Google
              </GoogleButton>
            )}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="flex-child">
          <button className="sign-in-button">Sign Up</button>
        </div>
      </div>
    );
  }
}

const Header = () => {
  return (
    <div className="Header">
      <div className="header-div">
        <span className="header-title">Amelia</span>
        <br />
        <span className="header-text">Telling Stories to Learn ...</span>
      </div>
      <div className="button-div">
        <button className="sign-in-button">Home</button>
      </div>
    </div>
  );
};
