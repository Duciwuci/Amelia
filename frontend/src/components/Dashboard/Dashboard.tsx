import React from "react";

import "./Dashboard.css";
import "../LandingPage/LandingPage.css";

export class Dashboard extends React.Component {

    public render() {
        return <div className="flex-column">
            <Header />
            <MainHeader />
        </div>
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
          <button className="sign-in-button">Log Out</button>
        </div>
      </div>
    );
  };

  const MainHeader = () => {
      return <div className="main-header first">
      <h2>Welcome, Amelia!</h2>
      <h4>
        Your progress: 
      </h4>
    </div>
  }
