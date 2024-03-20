import React from "react";

export interface CardProps {
  title: string;
  description: string;
  imgPath: string;
  repoUrl: string;
  liveDemoUrl: string;
}

export const Card: React.FC<CardProps> = ({
  description,
  imgPath,
  liveDemoUrl,
  repoUrl,
  title,
}) => {
  return (
    <article className="card">
      <picture>
        <img
          className="card__media"
          src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=2528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="card__title">{title}</h1>
      </picture>

      <img
        className="card__media"
        src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="card__project-data">
        <span className="card__project-data__project-id ">001</span>
        <span className="card__project-data__project-source">
          <a href={liveDemoUrl} target="_blank" className="button">
            live demo
          </a>
          <a href={repoUrl} target="_blank" className="button">
            repo
          </a>
        </span>
        <span>
          <p className="card__project-data__description">{description}</p>
        </span>
      </div>
    </article>
  );
};

export default Card;
