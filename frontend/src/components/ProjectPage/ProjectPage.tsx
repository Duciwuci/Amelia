import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";
import am1 from "./ProjectPageImages/Am1.png";
import am2 from "./ProjectPageImages/Am2.png";
import am3 from "./ProjectPageImages/Am3.png";
import am4 from "./ProjectPageImages/Am4.png";
import am5 from "./ProjectPageImages/Am5.png";
import am6 from "./ProjectPageImages/Am6.png";
import am7 from "./ProjectPageImages/Am7.png";
import "./ProjectPage.css";
import {
  BACKGROUND,
  ScrollPage,
  SmallTextfield,
  SmallTextWrapper,
} from "../shared/styles";
import { Header } from "../shared/components";
import { Curtain } from "./curtain/curtain";
import { Link } from "react-router-dom";

export const ProjectPage = () => {
  useWindowSize();
  const [curtinIsOpen, setCurtinIsOpen] = useState(true);
  const box1Ref = useRef(null); // nutzen, weil die Arrows erst am Ende gerendert werden --> das hier nutzen
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  const box7Ref = useRef(null);
  return (
    <div style={{ backgroundColor: BACKGROUND }}>
      <Header to="/projectoverview" buttonName="BACK" />
      {curtinIsOpen && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            zIndex: 9998,
          }}
        >
          <Curtain update={setCurtinIsOpen} />
        </div>
      )}
      <ScrollPage>
        <div className="flex-column">
          <div className="motherBox">
            <ImgTxtItem
              src={am1}
              text="Animation"
              imgLeft={true}
              reference={box1Ref}
              to="/step1"
            ></ImgTxtItem>
          </div>
          <div className="motherBox">
            <ImgTxtItem
              src={am2}
              text="Pen + Paper"
              imgLeft={false}
              reference={box2Ref}
              to="/step2"
            ></ImgTxtItem>
          </div>
          <div className="motherBox">
            <ImgTxtItem
              src={am3}
              text="Video"
              imgLeft={true}
              reference={box3Ref}
              to="/step3"
            ></ImgTxtItem>
          </div>
          <div className="motherBox">
            <ImgTxtItem
              src={am4}
              text="Break"
              imgLeft={false}
              reference={box4Ref}
              to="/step4"
            ></ImgTxtItem>
          </div>

          <div className="motherBox">
            <ImgTxtItem
              src={am5}
              text="Discussion"
              imgLeft={true}
              reference={box5Ref}
              to="/step5"
            ></ImgTxtItem>
          </div>

          <div className="motherBox">
            <ImgTxtItem
              src={am6}
              text="Game"
              imgLeft={false}
              reference={box6Ref}
              to="/step6"
            ></ImgTxtItem>
          </div>

          <div className="motherBox">
            <ImgTxtItem
              src={am7}
              text="Outlook"
              imgLeft={true}
              reference={box7Ref}
              to="/step7"
            ></ImgTxtItem>
          </div>

          <Xarrow
            startAnchor="bottom"
            start={box1Ref} //can be react ref
            end={box2Ref} //or an id
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />
          <Xarrow
            startAnchor="bottom"
            start={box2Ref}
            end={box3Ref}
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />
          <Xarrow
            startAnchor="bottom"
            start={box3Ref}
            end={box4Ref}
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />

          <Xarrow
            startAnchor="bottom"
            start={box4Ref} //can be react ref
            end={box5Ref} //or an id
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />
          <Xarrow
            startAnchor="bottom"
            start={box5Ref}
            end={box6Ref}
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />
          <Xarrow
            startAnchor="bottom"
            start={box6Ref}
            end={box7Ref}
            endAnchor="top"
            headSize={0}
            strokeWidth={8}
            color="rgba(75, 109, 70, 0.5)"
          />
        </div>
      </ScrollPage>
    </div>
  );
};

interface ImgTxtProps {
  src: string;
  text: string;
  imgLeft: boolean;
  reference: any;
  to: string;
}

const ImgTxtItem = (props: ImgTxtProps) => {
  return (
    <div className={`imgTxtBox ${props.imgLeft ? "img-left" : "img-right"}`}>
      {props.imgLeft && (
        <img
          className="proj-img"
          src={props.src}
          ref={props.reference}
          alt=""
          style={{ width: "100%", height: "auto" }}
        ></img>
      )}
      <SmallTextWrapper>
        <Link to={props.to}>
          <SmallTextfield>{props.text}</SmallTextfield>
        </Link>
      </SmallTextWrapper>
      {!props.imgLeft && (
        <img
          className="proj-img"
          src={props.src}
          ref={props.reference}
          alt=""
          style={{ width: "100%", height: "auto" }}
        ></img>
      )}
    </div>
  );
};
