import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg2 from "./Am2.png";
import task1 from "./task.png";
import task2 from "./task2.2.png";
import { Link } from "react-router-dom";

export const Step2 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step1" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 2</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg2}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Help Amelia find out where she has to fly next on her quest to
            traverse the Atlantic in her little airplane. Decode the riddle and
            get the location’s name. Solve the functions by taking the variable
            which has a letter as a name and put the input into the respective
            function. Compute each result. Each result corresponds to a letter
            in the alphabet. So we have another function here! We input a
            number, which is the result of each function, and get a letter as
            the output. Try it and don’t be afraid:
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={task1} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={task2} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            You need to revisit the concept of functions? No problem! Let's
            revisit the previous subproject and rewatch the animation.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Link to="/step1">
            <FullButton primary={false}>PREVIOUS SUBPROJECT</FullButton>
          </Link>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Link to="/step3">
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
