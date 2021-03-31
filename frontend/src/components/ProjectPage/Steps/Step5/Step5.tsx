import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg5 from "./Am5.png";
import task5 from "./task5.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export const Step5 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step4" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 5</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg5}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Amelia did it, she traversed the Atlantic! While she is being
            honored with a gold medal by the National Geographic Society for her
            achievement, let’s enjoy and solve a riddle together before we can
            rejoin her! There exist numerous solutions and approaches to it, so
            feel free to try out different ideas. What do you see? Do you happen
            to see a pattern? If so, why? Do you think it has a meaning? Think
            about it and afterward let’s have a discussion together with other
            students to talk about our ideas together!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Remember: there are no wrong ideas. A door can be opened with a key.
            The key at your hand might not fit. But maybe we can open the door
            using a paperclip? Or call our friend inside to open us up. Or
            numerous other approaches. You just have to get creative! Let’s give
            it a try!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={task5} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Are you ready to discuss with a couple of fellow students? Let's
            discuss together our thoughts
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="LWQNnSK8tXc" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step6">
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
