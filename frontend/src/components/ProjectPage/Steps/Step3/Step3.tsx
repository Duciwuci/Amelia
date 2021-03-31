import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg3 from "./Am3.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export const Step3 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step2" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 3</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg3}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Amelia thought to herself: “It is astonishing how mathematics is all
            around us while oftentimes we don’t even realize that!” See for
            yourself and watch one video of your own choosing in order to
            complete this stage. Of course, feel free to watch as many as you
            like!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="zAxT0mRGuoY" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="dzrwnwOx0fw" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="yr1xnYUmmWE" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="ZQElzjCsl9o" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="PMerSm2ToFY" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step4">
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
