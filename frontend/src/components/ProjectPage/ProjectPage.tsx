import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";
import {InoPopover} from "@inovex.de/elements-react";
import { Step1PopoverElement } from "./Steps";
import "./ProjectPage.css"


export const ProjectPage = () => {
    useWindowSize();
    const [curtinIsOpen, setCurtinIsOpen] = useState(true);
    const box1Ref = useRef(null); // nutzen, weil die Arrows erst am Ende gerendert werden --> das hier nutzen
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);
    return (
        <div>
            {curtinIsOpen && (<div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "white", zIndex: 9999}}><button onClick={() => setCurtinIsOpen(false)}>Click Me</button></div>)}
            <div className="flex-column">

            <div className="motherBox">
                <div className="imgLeft">
                    <InoPopover inoTrigger="click" inoInteractive={true}>{Step1PopoverElement()}</InoPopover>
                    <div ref={box1Ref} className="box-style box-style-left">Step1</div>
                </div>

            </div>


            <div className="motherBox">
                <div className="imgRight">
                    <div ref={box2Ref} className="box-style box-style-left">Step2</div>
                </div>
            </div>

            <div className="motherBox">
                <div className="imgLeft">
                    <div ref={box3Ref} className="box-style box-style-left">Step3</div>
                </div>

            </div>

            <div className="motherBox">
                <div className="imgRight">
                    <div ref={box4Ref} className="box-style box-style-left">Step4</div>
                </div>
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
