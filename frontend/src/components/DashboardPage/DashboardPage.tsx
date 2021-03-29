import React, { Component } from "react";
// @ts-ignore
import { InoImg, InoList, InoListItem } from "@inovex.de/elements-react";
import "./DashboardPage.css";
// @ts-ignore
// @ts-ignore
import citat from "../DashboardPage/DashboardPageImages/zitat.png";
// @ts-ignore
import { InoIconButton } from "@inovex.de/elements-react";
import { Link } from "react-router-dom";
import {
  Text,
  WideButton,
  Wrapper,
  Title,
  ScrollPage,
  BACKGROUND,
  MainHeaderBackground,
  NormalHugeHeader,
  FullButton,
} from "../shared/styles";

import { Button } from "@material-ui/core";
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
        <Header />
        <ScrollPage>
          <div className="headline-block">
              <NormalHugeHeader>Welcome {this.props.username}!</NormalHugeHeader>
              <NormalHugeHeader>My Progress</NormalHugeHeader>
          </div>
          <div className="chart-block">
            <ApexChart />
          </div>
          <div className="info-block">
            <img src={citat} alt="" style={{ marginBottom: "2rem", height: "100px" }} />
          </div>
          <div className="citate-div">
            <p className="citate">
            Amazing that you started this educational journey, you’re doing great! “Education is the most powerful weapon which you can use to change the world”
            </p>
            <p className="citate">Nelson Mandela</p>
          </div>

          <div className="info-block">
            <FullButton primary={false}>Projects</FullButton>
          </div>

          <div className="info-block">
            <Text>Build your knowledge with projects and experiment with different topics and media! You choose your pace and what interests you!</Text>
          </div>
          <div className="info-block">
            <FullButton primary>Tutor + Buddy Portal</FullButton>
          </div>
          
         
          <div className="button-boxes">
            <div className="button-class">
              <WideButton>{this.state.pathMsg}</WideButton>
            </div>
            <Wrapper>
              <Title>{dummytext}</Title>
            </Wrapper>
          </div>
          <div className="button-boxes">
            <div className="button-class">
              <WideButton>{this.state.pathMsg}</WideButton>
            </div>
            <Wrapper>
              <Title>{dummytext}</Title>
            </Wrapper>
          </div>
          <div className="button-boxes">
            <div className="button-class">
              <WideButton>{this.state.pathMsg}</WideButton>
            </div>
            <Wrapper>
              <Title>{dummytext}</Title>
            </Wrapper>
          </div>
          <div className="icon-button">
            <InoIconButton inoIcon="arrow_up" onClick={this.handleClick} />
          </div>
        </ScrollPage>
      </div>
    );
  }
}

const dummytext =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam";

export const Header = () => {
  return (
    <div className="Header">
      <div></div>
      <div className="header-div">
        <img alt="" src="../../../public/logo.svg" />
      </div>
      <div className="button-div">
        <Link to="/">
          <Button
            className="sign-in-button"
            variant="contained"
            color="secondary"
          >
            Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
};
