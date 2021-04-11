import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg6 from "./Am6.png";
import { Link } from "react-router-dom";
import game from "./Auswahl_781.png";

export const Step6 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step5" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 6</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg6}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Let’s see how Amelia has been doing in the meantime! Shortly before
            her 40th birthday, Amelia focused on taking on a new challenge: To
            circle the equator by plane as the first person ever! After
            stopovers in Brazil, Western Africa, Calcutta, and Rangun (which is
            nowadays is called Yangon), Amelia started the last chapter of her
            tour in New Guinea to cross the Pacific. She decided to have a short
            layover on Howland Island.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Play the game and help Amelia to avoid the thunderstorm and land
            safely. You adjust Amelia’s flight path by adjusting the function
            which maps her flight path. Try it and you will see how the slope of
            a function adjusts our flight path!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={game} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
            <FullButton primary={true}>PLAY!</FullButton>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step7">
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
