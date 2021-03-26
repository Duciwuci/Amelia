import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  InoCarousel,
  InoCarouselSlide,
  InoPopover,
} from "@inovex.de/elements-react";
import carusselelem1 from "./LandingPageImages/carussel1.jpeg";
import carusselelem2 from "./LandingPageImages/carussel2.jpeg";
import carusselelem3 from "./LandingPageImages/carussel3.jpeg";
import trump from "./LandingPageImages/trump.jpeg";
import YouTube from "react-youtube";
import "./LandingPage.css";
import { Button } from "@material-ui/core";
import amelia from "../../amelia.png";

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
        <div className="video">
          <YouTube videoId="jRKF83_INB8" />
        </div>

        <div className="citate-div">
          <p className="citate">
            {" "}
            "Ich werde für immer glücklich und klug sein." - Duc Viet Mai{" "}
          </p>
        </div>

        <div className="video">
          <InoPopover inoInteractive={true}>{examplePopover()}</InoPopover>
          <button className="sign-in-button">LogIn</button>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export const Header = () => {
  return (
    <div className="Header">
      <div className="header-div">
        <span className="header-title">Amelia</span>
        <br />
        <span className="header-text">Telling Stories to Learn ...</span>
      </div>
      <div className="button-div">
        <Link to="/login">
          <Button
            variant="contained"
            color="secondary"
            className="sign-in-button"
          >
            LogIn
          </Button>
        </Link>
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
      <img alt="" src={props.img} className="img-class" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

const examplePopover = (): JSX.Element => {
  return (
    <div>
      <img alt="" src={amelia} />
      <p>
        Amelia Earhart was an us-american pilot. Borned in 1897, she was the
        first women who fly over the atlantic ocean.
      </p>
      <Button variant="contained" color="secondary">
        Click here for more!
      </Button>
    </div>
  );
};

export default LandingPage;
