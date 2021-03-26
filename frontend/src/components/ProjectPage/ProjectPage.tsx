import React, { Component, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";
import aleksandra from "./ProjectPageImages/aleksandra.jpg";
import filippo from "./ProjectPageImages/filippo.jpg";
import laurenz from "./ProjectPageImages/laurenz.jpg";
import nikola from "./ProjectPageImages/nikola.jpg";
import "./ProjectPage.css"


export default function ProjectPage() {
    useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    const box1Ref = useRef(null); // nutzen, weil die Arrows erst am Ende gerendert werden --> das hier nutzen
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);
    return (

        <div className="flex-column">


            <div className="motherBox">
                <div className="imgLeft">
                    <img ref={box1Ref} src={filippo} alt="Avatar" className="image" style={{ "width": "100%" }}></img>
                    <div  className="box-style box-style-left">Step1</div>
                </div>

            </div>


            <div className="motherBox">
                <div className="imgRight">
                    <div  className="box-style box-style-left">Step2</div>
                    <img ref={box2Ref} src={laurenz} alt="Avatar" className="image" style={{ "width": "100%" }}></img>
                </div>
            </div>

            <div className="motherBox">
                <div className="imgLeft">
                    <img ref={box3Ref} src={aleksandra} alt="Avatar" className="image" style={{ "width": "100%" }}></img>
                    <div  className="box-style box-style-left">Step3</div>
                </div>

            </div>

            <div className="motherBox">
                <div className="imgRight">
                    <div  className="box-style box-style-left">Step4</div>
                    <img ref={box4Ref} src={nikola} alt="Avatar" className="image" style={{ "width": "100%" }}></img>
                </div>
            </div>
            
            <Xarrow
                startAnchor="bottom"
                start={box1Ref} //can be react ref
                end={box2Ref} //or an id
                endAnchor="top"
            />
            <Xarrow
                startAnchor="bottom"
                start={box2Ref}
                end={box3Ref}
                endAnchor="top"
                headSize={0}
                strokeWidth={14}
                color="rgba(75, 109, 70, 0.5)"
            />
            <Xarrow
                startAnchor="bottom"
                start={box3Ref}
                end={box4Ref}
                endAnchor="top"
                dashness={{ strokeLen: 1, nonStrokeLen: 8, animation: 10 }}

            />
        </div>



    );
}
