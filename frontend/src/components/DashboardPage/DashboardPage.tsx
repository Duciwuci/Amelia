// @ts-ignore
import {InoImg, InoList, InoListItem } from "@inovex.de/elements-react";
import React, {Component} from "react";
import './DashboardPage.css'
// @ts-ignore
import chartImg from '../DashboardPage/DashboardPageImages/charts.png';
// @ts-ignore
import studensImg from '../DashboardPage/DashboardPageImages/studensWalk.jpg';
// @ts-ignore
import { InoIconButton } from '@inovex.de/elements-react';

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
                    <InoImg src={chartImg} ino-ratio-width="1280" ino-ratio-height="941" ino-img-list-item></InoImg>
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
                    <InoImg src={studensImg} ino-ratio-width="1920" ino-ratio-height="1280" ino-rounded={true} ino-img-list-item> </InoImg>
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

                <div className="text-boxes">
                    <InoList inoAvatar>
                        <InoListItem inoText= {this.state.mentorMsg}>
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                    </InoList>
                </div>
                <div className="text-boxes">
                    <InoList inoAvatar>
                        <InoListItem inoText={this.state.pathMsg}>
                            <InoImg
                                slot="ino-leading"
                                src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                                ino-ratio-width="1"
                                ino-ratio-height="1"
                              />
                        </InoListItem>
                    </InoList>
                </div>
                <div className="icon-button">
                     <InoIconButton inoIcon="search" onClick={this.handleClick} />;
                </div>
            </div>
        );
    }
}
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