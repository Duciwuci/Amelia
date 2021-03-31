import React, { Component } from "react";
import "./DashboardPage.css";
// @ts-ignore
import citat from "../DashboardPage/DashboardPageImages/zitat.png";
import { Link } from "react-router-dom";
import {
  Text,
  ScrollPage,
  BACKGROUND,
  NormalHugeHeader,
  FullButton,
} from "../shared/styles";
import { Header } from "../shared/components";
import { ApexChart } from "./DashboardGraphs/ProgressChart";


interface DashboardProps {
  username: string;
}
export default class Dashboard extends Component<DashboardProps> {
  state = {
    welcomeMsg: `Welcome ${this.props.username}!`,
    progressMsg: "Current progress",
    projectMsg: "Projects",
    motivationalMsg: "",
    mentorMsg: "Buddy & Mentor portal",
    pathMsg: "Path finder",
    miniButtonMsg: "Jump to top",
    encloseLabel: true,
  };

  handleClick = (e: any) => {
    alert("Wanna jump to the top");
  };

  public render() {
    return (
      <div style={{ backgroundColor: BACKGROUND }}>
        <Header to="/" buttonName="LOG OUT" />
        <ScrollPage>
          <div className="headline-block">
            <NormalHugeHeader>Welcome {this.props.username}!</NormalHugeHeader>
            <NormalHugeHeader>My Progress</NormalHugeHeader>
          </div>
          <div className="chart-block">
            <ApexChart />
          </div>
          <div className="info-block">
            <img
              src={citat}
              alt=""
              style={{ marginBottom: "2rem", height: "100px" }}
            />
          </div>
          <div className="citate-div">
            <p className="citate">
              Amazing that you started this educational journey, you’re doing
              great! “Education is the most powerful weapon which you can use to
              change the world”
            </p>
            <p className="citate">- Nelson Mandela</p>
          </div>

          <div className="info-block">
            <Link to="/projectoverview">
              <FullButton primary={true}>Projects</FullButton>
            </Link>
          </div>

          <div className="info-block">
            <Text>
              Build your knowledge with projects and experiment with different
              topics and media! You choose your pace and what interests you!
            </Text>
          </div>
          <div className="info-block">
            <FullButton primary={false}>Tutor + Buddy Portal</FullButton>
          </div>
          <div className="info-block">
            <Text>
              Need a helping hand? No problem! Find a tutor for a quick question
              via chat or even find yourself a mentoring buddy to give you
              further advice. Choose your buddy based on interests you have in
              common and get a tutor based on the subject you have questions
              for.
            </Text>
          </div>
          <div className="info-block">
            <FullButton primary={false}>Path Finder</FullButton>
          </div>
          <div style={{ marginBottom: "3rem" }} className="info-block">
            <Text>
              {" "}
              No idea what career path you would like to pursue after school? No
              problem, we got you covered! Check out the paths we suggest to you
              based on your strengths and interests.
            </Text>
          </div>
        </ScrollPage>
      </div>
    );
  }
}