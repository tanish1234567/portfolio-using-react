import React from "react";
import ProjCard from "./ProjCard";
const Projects = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <ProjCard
        key="1"
        id="a"
        name="Youtube Clone"
        description = {`Developed a YouTube clone using React, featuring essential functionalities such as video playback, live chat,
        and commenting.Implemented client-side routing with React Router for seamless navigation between different views like the
        homepage, watch page, and demo pages.Utilized Redux for state management, ensuring efficient handling of application-wide states including menu
        toggling.Integrated with the YouTube API to fetch video data, displaying thumbnails, titles, and view counts
        dynamically`}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com/tanish1234567/youtube-clone-using-youtube-apis"
      />
      <ProjCard
        key="2"
        id="b"
        name="Namaste Foods"
        description = {`Employed React, a leading frontend library, to craft a modern web application.Integrated Swiggy APIs seamlessly, ensuring access to a vast repository of restaurant data, enriching user
        experience.Leveraged advanced React concepts such as lazy loading to optimize performance, ensuring swift load times
        and smooth navigation`}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com/tanish1234567/swiggy-like-project-using-swiggy-api"
      />
      <ProjCard
        key="3"
        id="c"
        name="Portfolio website"
        description = {`Web app showcasing my skills and projects`}
        techstack={["Html", "CSS", "JavaScript", "ReactJs"]}
        linktogitrepo="https://github.com/tanish1234567/portfolio-using-react"
      />
    </div>
  );
};

export default Projects;
