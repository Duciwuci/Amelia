import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg7 from "./Am7.png";
import { Link } from "react-router-dom";

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

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/project">
            <FullButton primary={true}>Back to Project</FullButton>
          </Link>
        </div>
      </ScrollPage>
    </div>
  );
};
