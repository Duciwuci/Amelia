import React, { Component, useRef } from "react";
import Xarrow from "react-xarrows";
import { useWindowSize } from "../shared/useWindowSize";

const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    marginTop: "100px",

};

export default function ProjectPage() {
    useWindowSize();
    const box1Ref = useRef(null); // nutzen, weil die Arrows erst am Ende gerendert werden --> das hier nutzen
    const box2Ref = useRef(null); 
    return (
        <div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div ref={box1Ref} style={boxStyle}>
                    hey
        </div>
                <p id="elem2" style={boxStyle}>
                    hey2
        </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={boxStyle}>
                    hey
      </div>
                <div ref={box2Ref} style={boxStyle}>
                    hey2
      </div>

            </div>
            <Xarrow
                start={box1Ref} //can be react ref
                end={box2Ref} //or an id
            />
        </div>

    );
}
