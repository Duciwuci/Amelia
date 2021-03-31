import React from "react";
import { BACKGROUND, NormalHeaderLeft, ScrollPage } from "../shared/styles";
import { DoubleButton, Header } from "../shared/components";
import { SmallCarousel } from "../Carousel/Carousel";
import amelia2 from "./OverviewImages/amelia2.png";
import qp1 from "./OverviewImages/qp1.png";
import qpng2 from "./OverviewImages/qpng2.png";
import qpng3 from "./OverviewImages/qpng3.png";
import qpng4 from "./OverviewImages/qpng4.png";
import qpng6 from "./OverviewImages/qpng6.png";

export default class ProjectOverview extends React.Component {
  public render() {
    return (
      <div style={{ width: "100%", backgroundColor: BACKGROUND }}>
        <Header to="/dashboard" buttonName="BACK" />
        <ScrollPage>
          <div
            style={{
              position: "fixed",
              height: "4rem",
              zIndex: 9999,
              width: "100%",
              backgroundColor: BACKGROUND,
            }}
          >
            <NormalHeaderLeft>Project Portal</NormalHeaderLeft>
          </div>
          <div className="info-block">
            <img
              src={amelia2}
              alt=""
              style={{ width: "320px", marginBottom: "2rem" }}
            />
          </div>

          <div className="info-block">
            <NormalHeaderLeft>Project Amelia</NormalHeaderLeft>
            <br />
            <DoubleButton
              textLeft="ADD"
              toLeft="/projectoverview"
              textRight="START"
              toRight="/project"
            />
            <br />
          </div>

          <div className="info-block">
            <NormalHeaderLeft>My List:</NormalHeaderLeft>
            <SmallCarousel
              src1={qp1}
              src2={qpng2}
              src3={qpng3}
              src4={qpng4}
              src5={qpng6}
            />
          </div>

          <div className="info-block">
            <NormalHeaderLeft>Currently Popular Projects:</NormalHeaderLeft>
            <SmallCarousel
              src1={qpng4}
              src2={qp1}
              src3={qpng3}
              src4={qpng2}
              src5={qpng6}
            />
          </div>

          <div className="info-block">
            <NormalHeaderLeft>Projects you might like:</NormalHeaderLeft>
            <SmallCarousel
              src1={qpng6}
              src2={qp1}
              src3={qpng3}
              src4={qpng2}
              src5={qpng4}
            />
          </div>
        </ScrollPage>
      </div>
    );
  }
}
