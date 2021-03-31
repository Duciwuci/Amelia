import React from "react";
import {
  FullButton,
  NormalHeaderLeft,
  ScrollPage,
} from "../../../shared/styles";
import { Header } from "../../../shared/components";
import amg5 from "./Am5.png";
import { Link } from "react-router-dom";

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

        <div style={{ margin: "auto", marginTop: "2rem" }}>
          <Link to="/step6">
            <FullButton primary={true}>NEXT SUBPROJECT</FullButton>
          </Link>
        </div>
      </ScrollPage>
    </div>
  );
};
