import React from "react";
import "./styles.css";
import Image from "next/image";

export interface Project {
  name: string;
  imagePath: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
}

export const ProjectCard = ({
  name,
  imagePath,
  description,
  codeUrl,
  liveUrl,
}: React.PropsWithChildren<Project>) => {
  return (
    <section
      className="card"
      style={{ backgroundImage: ` url("${imagePath}")` }}
    >
      <div className="card__holder">
        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
        <section className="card__links">
          <a target="_blank" href={codeUrl} className="card__code">
            Code
          </a>
          <a target="_blank" href={liveUrl} className="card__live-demo">
            Demo
          </a>
        </section>
      </div>
    </section>
  );
};

export default ProjectCard;
