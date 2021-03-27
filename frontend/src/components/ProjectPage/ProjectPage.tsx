import React, {useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";
import filippo from "./ProjectPageImages/filippo.jpg";
import laurenz from "./ProjectPageImages/laurenz.jpg";
import nikola from "./ProjectPageImages/nikola.jpg";
import aleksandra from "./ProjectPageImages/aleksandra.jpg"
import "./ProjectPage.css"
import { Textfield } from "../shared/styles";

export const ProjectPage = () => {
    useWindowSize();
    const [curtinIsOpen, setCurtinIsOpen] = useState(true);
    const box1Ref = useRef(null); // nutzen, weil die Arrows erst am Ende gerendert werden --> das hier nutzen
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);
    return (
        <div>
            {curtinIsOpen && (<div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "white", zIndex: 9999 }}><button onClick={() => setCurtinIsOpen(false)}>Click Me</button></div>)}

            <div className="flex-column">

                <div className="motherBox">
                    <ImgTxtItem src={filippo} text="Intro Project Amelia" imgLeft={true} reference={box1Ref}  ></ImgTxtItem>
                </div>
                <div className="motherBox">
                    <ImgTxtItem src={laurenz} text="First steps: Linear functions" imgLeft={false} reference={box2Ref}  ></ImgTxtItem>
                </div>
                <div className="motherBox">
                    <ImgTxtItem src={nikola} text="Flappy Plane" imgLeft={true} reference={box3Ref}  ></ImgTxtItem>
                </div>
                <div className="motherBox">
                    <ImgTxtItem src={aleksandra} text="Test your knowledge" imgLeft={false} reference={box4Ref}  ></ImgTxtItem>
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
            </div>
        </div>
    );
}

interface ImgTxtProps {
    src: string;
    text: string;
    imgLeft: boolean;
    reference: any;
}

const ImgTxtItem = (props: ImgTxtProps) => {

    return (
        <div className={`imgTxtBox ${props.imgLeft ? "img-left" : "img-right"}`}>
            {props.imgLeft && <img className="proj-img" src={props.src} ref={props.reference} alt="" style={{width:"100%", height:"auto"}}></img>}
            <Textfield>{props.text}</Textfield>
            {!props.imgLeft && <img className="proj-img" src={props.src} ref={props.reference} alt="" style={{width:"100%", height:"auto"}}></img>}
        </div>
    );


}