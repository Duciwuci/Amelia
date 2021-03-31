import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg4 from "./Am4.png";
import { Link } from "react-router-dom";

export const Step4 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step3" buttonName="BACK" />
      <ScrollPage>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <NormalHeaderLeft>Subproject 4</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg4}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Due to bad weather conditions, Amelia had to land and take a break
            in Northern Ireland since flying on to reach Paris was too
            dangerous. Let’s take a break together with Amelia and recharge our
            energy batteries in order to finish our quest.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Taking regular breaks when learning something new is very important
            and is not at all a sign of laziness! When deciding what to do
            during your study breaks, always keep in mind that different methods
            work for different people. It’s good to vary different break
            activities to find which is the most effective in refreshing you.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
            <FullButton
              style={{ width: "200px", float: "left" }}
              primary={false}
            >
              DO
            </FullButton>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>Take a walk</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Get outside and get some fresh air, no matter how short the walk may
            be. Moving your body helps blood flow, which is going to help
            reenergize you.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>Stretch</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Chances are, your body is tense from the anxiety of studying. Plus,
            you are more likely than not working in the same position for hours
            on end. Taking some time to stretch will help to alleviate your
            body’s tension.{" "}
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>Meditate</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            During one of your scheduled breaks, take a few mindful minutes to
            meditate in a calm and quiet setting. Focus on some breathing
            exercises, which can really revive and invigorate the mind so that
            it’s ready to absorb more information!{" "}
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
            <FullButton
              style={{ width: "200px", float: "left" }}
              primary={true}
            >
              DON'T
            </FullButton>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>Snacking Junk Food</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            When you eat junk food, which is typically high in fat, sugar and
            calories, your body digests the foods fairly quickly. Since junk
            food has been stripped of nutrients, your body is forced to use the
            sugar as energy for your body. That energy is spent quickly because
            of the refined nature of junk food, which means you experience a
            temporary "sugar high," or false feeling of energy, that is quickly
            followed by a "sugar crash," or a sensation of fatigue, once your
            metabolism has burned all of the possible energy. This can lead to
            bouts of focus loss, fatigue and a loss of concentration.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>Taking a nap</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Taking a nap can actually make you more tired, slow you down or
            stunt your productivity. If you must take a nap during your study
            break – a quick catnap (no longer than 20 minutes) is the best way
            to go.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step5">
            <FullButton primary={true}>NEXT SUBPROJECT</FullButton>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </ScrollPage>
    </div>
  );
};
