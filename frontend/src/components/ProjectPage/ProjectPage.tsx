import React, { Component, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";
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
                    <div ref={box1Ref} className="box-style box-style-left">
                        Step1
                </div>
                </div>
                <div className="motherBox">
                    <div className="box-style box-style-right" ref={box2Ref}>
                        Step3
                    </div>

                </div>
                <div className="motherBox">
                    <div ref={box3Ref} className="box-style box-style-left" >
                        Step4
                    </div>
                </div>
                <div className="motherBox">
                    <div ref={box4Ref} className="box-style box-style-right" >
                        Step6
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
                    headSize= {0}
                    strokeWidth= {14}
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
