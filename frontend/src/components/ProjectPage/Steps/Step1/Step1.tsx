import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg1 from "./Am1.png";
import { Link } from "react-router-dom";

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

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step2">
            <FullButton primary={true}>NEXT SUBPROJECT</FullButton>
          </Link>
        </div>
      </ScrollPage>
    </div>
  );
};
