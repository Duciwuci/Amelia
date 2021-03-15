import React, { Component } from "react";
import { InoCarousel, InoCarouselSlide } from "@inovex.de/elements-react";
import carusselelem1 from "./LandingPageImages/carussel1.jpeg";
import carusselelem2 from "./LandingPageImages/carussel2.jpeg";
import carusselelem3 from "./LandingPageImages/carussel3.jpeg";
import "./LandingPage.css";

class LandingPage extends Component {
  public render() {
    return (
      <div className="flex-column">
        <Header />
        <div className="carousel">
          <InoCarousel inoAutoplay={true}>
            <InoCarouselSlide value={"1"} src={carusselelem1} />
            <InoCarouselSlide value={"2"} src={carusselelem2} />
            <InoCarouselSlide value={"3"} src={carusselelem3} />
          </InoCarousel>
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
        <button className="sign-in-button">LogIn</button>
      </div>
    </div>
  );
};

interface CardProps {
  className: string;
  title: string;
  img: string;
  description: string;
}
const Card = (props: CardProps) => {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
      </div>

      <div className="big-div">
        <span className="div-title">{props.title}</span>
        <br />
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default LandingPage;
