import React, {Component} from "react";
// @ts-ignore
import {InoImg, InoList, InoListItem } from "@inovex.de/elements-react";
import './DashboardPage.css'
// @ts-ignore
import chartImg from '../DashboardPage/DashboardPageImages/charts.png';
// @ts-ignore
import studensImg from '../DashboardPage/DashboardPageImages/studensWalk.jpg';
// @ts-ignore
import { InoIconButton } from '@inovex.de/elements-react';
import styled from 'styled-components';
import { TextField } from "@material-ui/core";

export default class Dashboard extends Component {
    state = {
        welcomeMsg: "Welcome Sexy!",
        progressMsg: "Current progress",
        projectMsg: "Projects",
        motivationalMsg: "",
        mentorMsg: "Buddy & Mentor portal",
        pathMsg: "Path finder",
        miniButtonMsg: "Jump to top",
        encloseLabel: true,
    };

    handleClick = (e: any) => {
        alert("Wanna jump to the top")
    }

    public render() {
        return (
            <div className="flex-column">
                <Header/>
                <div className="text-boxes">
                    <InoList inoAvatar>
                        <InoListItem inoText={this.state.welcomeMsg}>
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                        <InoListItem inoText={this.state.progressMsg}>
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                    </InoList>
                </div>
                <div className="image-box">
                    <img src={chartImg}></img>
                </div>
                <div className="text-boxes">
                    <InoList inoAvatar>
                        <InoListItem inoText="No one can stop you from being yourself">
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                    </InoList>
                </div>
                <div className="small-image-box">
                    <img src={studensImg}></img>
                </div>
                <div className="text-boxes">
                    <InoList inoAvatar>
                        <InoListItem inoText= {this.state.projectMsg}>
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                    </InoList>
                </div>
                <div className="button-boxes">
                    <div className="button-class">
                        <Button>{this.state.pathMsg}</Button>
                    </div>
                        <Wrapper>
                        <Title>{dummytext}</Title>
                    </Wrapper>
                </div>
                <div className="button-boxes">
                    <div className="button-class">
                        <Button>{this.state.pathMsg}</Button>
                    </div>
                        <Wrapper>
                        <Title>{dummytext}</Title>
                    </Wrapper>
                </div>
                <div className="button-boxes">
                    <div className="button-class">
                        <Button>{this.state.pathMsg}</Button>
                    </div>
                        <Wrapper>
                        <Title>{dummytext}</Title>
                    </Wrapper>
                </div>
                <div className="icon-button">
                     <InoIconButton inoIcon="arrow_up" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

const dummytext = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0 auto;
  left: 50%;
  display: block;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;

`;

const Textfield = styled.text`
    color: palevioletred;
    padding: 0.25em 1em;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2vw;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  @media screen and (max-width:1166px){
      padding:50px;
  }
  @media screen and (max-width:1024px){
    padding:40px;
}
@media screen and (max-width:767px){
    padding:20px;
}
`;

export const Header = () => {
  return (
    <div className="Header">
        <div></div>
      <div className="header-div">
        <span className="header-title">Amelia</span>
        <br />
        <span className="header-text">Telling Stories to Learn ...</span>
      </div>
      <div className="button-div">
        <button className="sign-in-button">LogIn</button>
      </div>
    </div>
  );


};