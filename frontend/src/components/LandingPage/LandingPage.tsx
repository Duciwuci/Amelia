import React, { Component } from "react";
import { Link } from "react-router-dom";
import help1 from "./LandingPageImages/help1.png";
import fundamental from "./LandingPageImages/fundamental.png";
import gamification from "./LandingPageImages/gamification.png";
import nanolearn from "./LandingPageImages/nanolearn.png";
import mobile from "./LandingPageImages/mobile.png";
import buddy from "./LandingPageImages/buddy.png";
import selfpaced from "./LandingPageImages/selfpaced.png";
import bridge from "./LandingPageImages/bridge.png";
import ownership from "./LandingPageImages/ownership.png";
import diverse from "./LandingPageImages/diverse.png";
import individual from "./LandingPageImages/individual.png";
import passion from "./LandingPageImages/passion.png";
import citat from "../DashboardPage/DashboardPageImages/zitat.png";
import l1 from "./LandingPageImages/carousel/l1.png";
import l2 from "./LandingPageImages/carousel/l2.png";
import l3 from "./LandingPageImages/carousel/l3.png";
import l4 from "./LandingPageImages/carousel/l4.png";
import l5 from "./LandingPageImages/carousel/l5.png";
import l6 from "./LandingPageImages/carousel/l6.png";
import l7 from "./LandingPageImages/carousel/l7.png";



import YouTube from "react-youtube";
import "./LandingPage.css";
import { Button } from "@material-ui/core";
import {
  ScrollPage,
  BACKGROUND,
  MainHeaderBackground,
  MainHeader,
  Text,
  NormalHeader,
} from "../shared/styles";
import { ACarousel } from "../Carousel/Carousel";
import { Header } from "../shared/components";



class LandingPage extends Component {


  public render() {
    return (
      <div style={{ width: "100%", backgroundColor: BACKGROUND }}>
        <Header to="/dashboard" buttonName="LOG IN" />
        <ScrollPage>
          <div className="carousel">
            <ACarousel
              src1={l1}
              src2={l2}
              src3={l3}
              src4={l4}
              src5={l5}
              src6={l6}
              src7={l7}
            />
          </div>
          <div className="info-block">
            <MainHeaderBackground>
              <MainHeader>What is Anyola? </MainHeader>
            </MainHeaderBackground>
            <br />
            <Text>
              Anyola is a one-of-a-kind learning platform which offers diverse
              and bite-sized learning experiences which are embedded into
              storytelling projects. The platform focuses on teaching
              fundamentals, giving everyone a chance to thrive and leave no one
              behind.
            </Text>
          </div>

          <div className="info-block">
            <img src={help1} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Leave No One Behind</NormalHeader>
            <br />
            <Text>
              Anyola aims to ensure that no one is left behind during one’s
              educational process, no matter the age, gender, heritage or the
              social background. The reasons why students fall behind are
              various such as lack of teachers, cancelled school lessons or lack
              of support. Also, parents who give up too soon on their
              underperforming children, teachers who never tried to reach the
              underperforming students and the student’s own shyness to speak up
              accelerate the falling behind. We aim to compensate for these
              numerous pitfalls and erode the linkage between social background
              and educational success.
            </Text>
          </div>

          <div className="info-block">
            <img src={fundamental} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Strong Fundamentals</NormalHeader>
            <br />
            <Text>
              Anyola focuses specifically on the fundamentals of reading, writing
              and math in order to build a strong knowledge foundation. Similar to
              building a skyscraper, high levels can’t be reached without a strong
              foundation to build upon. Anyola helps to build this foundation
              collaboratively with the students.
            </Text>
          </div>

          <div className="info-block">
            <img src={gamification} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Gamification</NormalHeader>
            <br />
            <Text>
              We aim to convert the virtual classroom into a gaming zone and unlock
              students' creativity. What books are to reading, play is to mathematics.
              A home filled with puzzles, games and play is a home where creative and
              mathematical thinking can flourish.
            </Text>
          </div>

          <div className="info-block">
            <img src={nanolearn} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Bite-Sized & Project-Based Learning</NormalHeader>
            <br />
            <Text>
              Learning in short bursts is proven to increase our ability to take 
              in and retain information. By providing small bits of information, 
              Anyola aims to increase student’s productivity, capture their attention 
              and aid their ability to learn. By embedding the knowledge into a 
              project setting, Anyola aims to decouple enjoying and being good at 
              a subject from the performance and motivation of a teacher.
            </Text>
          </div>

          <div className="info-block">
            <img src={mobile} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Mobile First - Rest Second </NormalHeader>
            <br />
            <Text>
            Most children & teenagers have access to smartphones but merely a small percentage 
            has access to laptops or tablets. The Corona-Virus pandemic has forced numerous 
            students to learn online however most of them are not equipped for this and in turn
            fall behind. Anyola is a progressive web app which can be used both on mobile phones 
            and other devices and thus aims to offer its services to a much larger group of students.
            </Text>
          </div>

          <div className="info-block">
            <img src={buddy} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Buddy Mentoring + Tutoring</NormalHeader>
            <br />
            <Text>
            Studies have shown that both tutorings by students and regular contact with an 
            individual buddy have drastically improved student’s educational performance and 
            helped them discover their strengths and interests. Especially refugees and 
            students from socially deprived backgrounds may highly benefit from such a helping 
            hand and Anyola aims to offer it. 
            </Text>
          </div>

          <div className="info-block">
          <MainHeaderBackground>
              <MainHeader>Why use Amelia?</MainHeader>
            </MainHeaderBackground>
            <br />
            <img src={selfpaced} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Self-Paced</NormalHeader>
            <br />
            <Text>
            Everyone learns at their own pace and everyone learns differently. Anyola aims to 
            accommodate this individuality by offering self-paced and modular learning projects.   
            </Text>
          </div>

          <div className="info-block">
            <img src={bridge} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Connect The Dots</NormalHeader>
            <br />
            <Text>
            We can’t be interested in something if we don’t see its relevance to us. This relevance 
            oftentimes gets lost within school classes and students can’t understand why they 
            should learn a specific formula. By putting knowledge into a relevant and interesting 
            storyline context and showing specific applications, Anyola aims to fill this gap.
            </Text>
          </div>

          <div className="info-block">
            <img src={ownership} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Ownership</NormalHeader>
            <br />
            <Text>
            One of the most promising ways of encouraging students to study is to put them in charge of 
            their learning experience. Taking ownership of an activity fosters happiness and raises 
            motivation. With Anyola, students can create their own learning worlds that are intriguing 
            to them by shifting from compulsion to ownership
            </Text>
          </div>

          <div className="info-block">
            <img src={diverse} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Diverse Learning</NormalHeader>
            <br />
            <Text>
            Nobody enjoys doing the same thing over and over again. Anyola offers diverse learning by 
            mixing up numerous types of media such as videos, games, podcasts, offline tasks, AR/VR, 
            and many more.
            </Text>
          </div>

          <div className="info-block">
            <img src={individual} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Personalized Learning</NormalHeader>
            <br />
            <Text>
            What works well for one person to study something may not work for another and also interests 
            are hereby highly different.Anyola aims to learn over time the preferences of each student in 
            order to suggest relevant projects based on what works best for them. 
            </Text>
          </div>

          <div className="info-block">
            <img src={passion} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Find Your Strengths & Interests</NormalHeader>
            <br />
            <Text>
            There is no straightforward way to identify talent unless one is willing to spend a 
            lot of time doing what the education system should have been doing: giving people 
            enough chances to show what they are good at. Anyola aims to actually provide everyone 
            a chance to discover their own gifts by detecting and learning their strengths and 
            interests over time and recommend projects and job-paths accordingly. 
            </Text>
          </div>


          <div className="video">
            <YouTube videoId="6KvZ9v64pDQ" opts={{ width: "350px" }} />
          </div>


          <div className="info-block">
            <img src={citat} alt="" style={{ marginBottom: "2rem" }} />
            <br />
            <NormalHeader>Inspiration + Motivation</NormalHeader>
            <br />
            <Text>
            Dai Manju was a timid 13-year-old girl who lived in a shack on a hillside in central China. 
            Her parents, who earned low wages, didn't see the benefit of spending $13 a year educating a 
            girl whose future they expected to lay in farm chores and housework. Though Dai Manju was a 
            top student, her parents told her to drop out in sixth Grade. She obeyed, but still hung 
            around the school hoping to pick up scraps of learning. When journalists wrote about Dai 
            Manju in the New York Times in 1990, a reader, moved by her devotion to schooling, donated 
            $100 to pay for her tuition, but due to a bank error, Dai Manju and her school received $10,000. 
            This money provided scholarships for Dai Manju and other girls in her area and allowed them to 
            build a new school. The classmates were able to get jobs in various fields and by 2006, Dai 
            Manju was an executive for an electronics company, hoping to start her own business. All that 
            was possible due to her education - and a bank error. Fortune favors the ones who don’t give up. 
            </Text>
          </div>

          <div className="citate-div">
            <p className="citate">
              “You educate someone and they create a world around them. It's a
              virtuous cycle.”
            </p>
            <p className="citate">- Sheryl WuDunn</p>
          </div>

          <div className="video">
            <Link to="dashboard">
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

export default LandingPage;
