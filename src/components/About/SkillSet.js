import React from "react";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";

const SkillSet = () => {
  return (
    <div>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />
    </div>
  );
};

export default SkillSet;
