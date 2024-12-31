import React from "react";
import FrameImage from "../images/Frame.png";

function Skills() {

    return (
        <section id="skills">
            <h2>Main Skills</h2>
            <img
                src={FrameImage}
                style={{ width: "82%",  marginTop: "20px" }}
            />
        </section>
    );
}

export default Skills;
