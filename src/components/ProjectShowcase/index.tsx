import React from "react";
import styles from "./styles.module.css";
import { Project, ProjectCard } from "../ProjectCard";

const projects: Project[]  = [
  {
    name: "Country App",
    imagePath : '/project-countries-app.png',
    description:
      "An app which shows country data, made in React & Typescript using Sass",
    liveUrl: "https://sierra9999.github.io/country-app/",
    codeUrl: "https://github.com/Sierra9999/country-app",
  },
  {
    name: "Country App",
    imagePath : '/project-countries-app.png',
    description:
      "An app which shows country data, made in React & Typescript using Sass",
    liveUrl: "https://sierra9999.github.io/country-app/",
    codeUrl: "https://github.com/Sierra9999/country-app",
  },
  {
    name: "Country App",
    imagePath : '/project-countries-app.png',
    description:
      "An app which shows country data, made in React & Typescript using Sass",
    liveUrl: "https://sierra9999.github.io/country-app/",
    codeUrl: "https://github.com/Sierra9999/country-app",
  },
  {
    name: "Country App",
    imagePath : '/project-countries-app.png',
    description:
      "An app which shows country data, made in React & Typescript using Sass",
    liveUrl: "https://sierra9999.github.io/country-app/",
    codeUrl: "https://github.com/Sierra9999/country-app",
  },
];

const ProjectShowcase = () => {
  return (
    <>
      <h1 className={styles["portfolio-title"]}>Portfolio</h1>
      <section className={styles["projects"]}>
        {projects.map(project => <ProjectCard {...project}/>)}
      </section>
    </>
  );
};

export default ProjectShowcase;
