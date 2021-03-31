import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
  Text,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg7 from "./Am7.png";
import route from "./route.png"
import { Link } from "react-router-dom";
import task7 from "./Am7_task.png";
import YouTube from "react-youtube";

export const Step7 = (): JSX.Element => {
  return (
    <div>
      <Header to="/step6" buttonName="BACK" />
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
          <NormalHeaderLeft>Subproject 7</NormalHeaderLeft>
          <img
            style={{ marginLeft: "auto", marginRight: "1rem" }}
            alt=""
            height={150}
            src={amg7}
          />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            So what happened to Amelia? It’s both tragic and shrouded in myth:
            Amelia planned to layover on Howland Island, however, she never made
            it there. The radio contact to her got lost and neither she nor her
            plane was ever found. For many years she was lost to be found until
            the search eventually had to be stopped
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            On Howland Island, a lighthouse was named after her and until this
            day, there exist various theories as to what might have happened to
            her and that she might have survived.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={task7} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Amelia was a widely known international celebrity during her
            lifetime. Her shyly charismatic appeal, independence, persistence,
            coolness under pressure, courage and goal-oriented career along with
            the circumstances of her disappearance at a comparatively early age
            have driven her lasting fame in popular culture. Hundreds of
            articles and scores of books have been written about her life, which
            is often cited as a motivational tale, especially for girls.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <img width="350px" alt="" src={route} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <NormalHeaderLeft>What next?</NormalHeaderLeft>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Feel free to google Amelia Earhart and her story and find out more
            about the myths that surround her disappearance.
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Also: You now have seen a couple of applications where mathematical
            functions are essential. However, there are many more amazingly cool
            applications. This is slightly advanced, but I believe that you can
            handle it! Have you ever heard of Bitcoin and Cryptocurrencies or
            the Blockchain? You might ask yourself now what these have to do
            with functions? I have selected a couple of further interesting
            things where functions are essential. Have a look!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="nqdv6Ad9Nt4" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <YouTube videoId="jI-HeXhsUIg" opts={{ width: "350px" }} />
        </div>

        <div style={{ margin: "auto", marginTop: "2rem", width: "350px" }}>
          <Text>
            Have you finished? Let's move on to the next subproject then!
          </Text>
        </div>

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/project">
            <FullButton primary={true}>Back to Project</FullButton>
          </Link>
        </div>

        <br />
        <br />
        <br />
      </ScrollPage>
    </div>
  );
};
