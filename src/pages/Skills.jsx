import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div className="all">
      <h2>SKILLS</h2>
      <div className="skills">
        <h1>
          <i class="fa-brands fa-html5" id="html"></i>
        </h1>
        <h1>
          <i class="fa-brands fa-css3-alt" id="css"></i>
        </h1>
        <h1>
          <i class="fa-brands fa-react" id="react"></i>
        </h1>
        <h1>
          <i class="fa-brands fa-square-js" id="js"></i>
        </h1>
        <h1>
          <i class="fa-brands fa-bootstrap" id="bootstrap"></i>
        </h1>
        <h1>
          <i class="fa-brands fa-node-js" id="node"></i>
        </h1>
      </div>
    </div>
  );
};

export default Skills;
