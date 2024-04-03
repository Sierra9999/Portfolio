import React from "react";
import Image from "next/image";
import { Icon } from "./Icons";
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
      <Image src={imgPath} alt="" width={400} height={200} />
      <div className="card__information">
        <h1 className="card__title">{title}</h1>
        <p>{description}</p>
        <span className="card__buttons">
          <a
            href={liveDemoUrl}
            target="_blank"
            className="card__button gradient-bg-blue"
          >
            Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            className="card__button gradient-bg-red"
          >
            GitHub
          </a>
        </span>
      </div>
    </article>
  );
};

export default Card;
