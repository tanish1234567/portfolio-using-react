import React from "react";
import ProjCard from "./ProjCard";
import logo from "../../public/pic.jpg";
const Projects = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <ProjCard
        key="1"
        name="Canteen Online counter"
        img={logo}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com"
      />
      <ProjCard
        key="2"
        name="Canteen Online counter"
        img={logo}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com"
      />
      <ProjCard
        key="3"
        name="Canteen Online counter"
        img={logo}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com"
      />
    </div>
  );
};

export default Projects;
