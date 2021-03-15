import React, { Component } from "react";
import {
  InoCarousel,
  InoCarouselSlide,
  InoCard,
} from "@inovex.de/elements-react";
import carusselelem1 from "./LandingPageImages/carussel1.jpeg";
import carusselelem2 from "./LandingPageImages/carussel2.jpeg";
import carusselelem3 from "./LandingPageImages/carussel3.jpeg";
import trump from "./LandingPageImages/trump.jpeg";
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
        <MainHeader />

        <Card
          title="We did it!"
          description="It's an awesome App! Use it, download it, but more, enjoy it! - Donald Trump"
          img={trump}
          />
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

const MainHeader = () => {
  return (
    <div className="main-header">
      <h2>Why use this Platform</h2>
      <p>
        This platform offers you an effective way to learn with real stories and
        catching tasks!
      </p>
    </div>
  );
};

interface CardProps {
  title: string;
  img: string;
  description: string;
}
const Card = (props: CardProps) => {
  return (
    <div className="main-header">
      <img src={props.img} className="img-class" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default LandingPage;
