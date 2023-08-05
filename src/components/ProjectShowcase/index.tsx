import React from "react";
import styles from "./styles.module.css";

const projects: {
  name: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
} = [
  {
    name: "Country App",
    codeUrl : 'https://github.com/Sierra9999/country-app',
    description : "An app which shows country data, made in React & Typescript using Sass",
    liveUrl : 'https://sierra9999.github.io/country-app/'
  },
];

const ProjectShowcase = () => {
  return (
    <>
      <h1 className={styles["portfolio-title"]}>Portfolio</h1>
      <section className={styles["projects"]}>
        <div className={styles["projects__card"]}></div>
        <div className={styles["projects__card"]}></div>
        <div className={styles["projects__card"]}></div>
        <div className={styles["projects__card"]}></div>
      </section>
    </>
  );
};

export default ProjectShowcase;
