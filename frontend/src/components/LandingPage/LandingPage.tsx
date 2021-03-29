import React, { Component } from "react";
import { Link } from "react-router-dom";
import carusselelem1 from "./LandingPageImages/carussel1.jpeg";
import carusselelem2 from "./LandingPageImages/carussel2.jpeg";
import carusselelem3 from "./LandingPageImages/carussel3.jpeg";
import help1 from "./LandingPageImages/help1.png";

import trump from "./LandingPageImages/trump.jpeg";
import YouTube from "react-youtube";
import "./LandingPage.css";
import { Button } from "@material-ui/core";
import { ScrollPage, BACKGROUND, MainHeaderBackground, MainHeader, Text, NormalHeader } from "../shared/styles";
import {ACarousel} from "../Carousel/Carousel";
class LandingPage extends Component {
  public render() {
    return (
      <div style={{width:"100%", backgroundColor: BACKGROUND }}>
        <Header />
        <ScrollPage>
          <div className="carousel">
            <ACarousel src1={carusselelem1} src2={carusselelem2} src3={carusselelem3}/>
          </div>
          <div className="info-block">
            <MainHeaderBackground><MainHeader>Why use Anyola? </MainHeader></MainHeaderBackground>
            <br/>
            <Text>Anyola is a one-of-a-kind learning platform which offers diverse and bite-sized learning experiences which are embedded into storytelling projects. The platform focuses on teaching fundamentals, giving everyone a chance to thrive and leave no one behind.</Text>
          </div>

          <div className="info-block">
            <img src={help1} alt="" style={{marginBottom:"2rem"}}/>
            <br/>
            <NormalHeader>Leave No One Behind</NormalHeader>
            <br/>
            <Text>Anyola aims to ensure that no one is left behind during one’s educational process, no matter the age, gender, heritage or the social background. The reasons why students fall behind are various such as lack of teachers, cancelled school lessons or lack of support. Also, parents who give up too soon on their underperforming children, teachers who never tried to reach the underperforming students and the student’s own shyness to speak up accelerate the falling behind.  We aim to compensate for these numerous pitfalls and erode the linkage between social background and educational success.</Text>
          </div>
          <Card
            title="We did it!"
            description="It's an awesome App! Use it, download it, but more, enjoy it! - Donald Trump"
            img={trump}
          />
          <div className="video">
            <YouTube videoId="jRKF83_INB8"  opts={{ width:"350px"}}/>
          </div>

          <div className="citate-div">
            <p className="citate">
              {" "}
              "Ich werde für immer glücklich und klug sein." - Duc Viet Mai{" "}
            </p>
          </div>

          <div className="video">
            <Link to="project">
              <Button
                variant="contained"
                color="secondary"
                className="sign-in-button"
              >
                LogIn
              </Button>
            </Link>
          </div>
          <br />
          <br />
        </ScrollPage>
      </div>
    );
  }
}

export const Header = () => {
  return (
    <div className="Header">
      <div className="header-div">
        <img alt="" src="../../../public/logo.svg" />
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

export default LandingPage;
