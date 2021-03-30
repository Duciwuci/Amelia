import React from "react";
import { ScrollPage } from "../shared/styles";
import { Header } from "../shared/components";
import { SmallCarousel } from "../Carousel/Carousel";
import p0 from "./OverviewImages/P0.png";
import p1 from "./OverviewImages/P1.png";
import p2 from "./OverviewImages/P2.png";

export default class ProjectOverview extends React.Component {
  public render() {
    return (
      <div>
        <Header to="/dashboard" buttonName="HOME" />
        <ScrollPage>
          <SmallCarousel src1={p1} src2={p2} src3={p0} />
        </ScrollPage>
      </div>
    );
  }
}
