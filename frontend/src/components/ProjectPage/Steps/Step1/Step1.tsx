import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg1 from "./Am1.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export const Step1 = (): JSX.Element => {
  return (
    <div>
      <Header to="/project" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 1</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg1}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Let's begin our journey with Amelia while getting to know
            mathematical functions! Watch the following animation to complete
            this subprojects!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="lpqahDAy7Cs" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then:
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step2">
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
