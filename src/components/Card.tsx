import React from 'react'

export interface CardProps {
  title : string
  description : string
  imgPath : string
  repoUrl : string
  liveDemoUrl : string
}

export const Card : React.FC<CardProps> = ({
  description,
  imgPath,
  liveDemoUrl,
  repoUrl,
  title
}) => {
  return (
      <article className='card'>
        <h1 className='card__title'>{title}</h1>
        <img src={imgPath} alt="" />
        <p className='card__description'>{description}</p>
        <a href={liveDemoUrl} target='_blank' className='button'>live demo</a>
        <a href={repoUrl} target='_blank' className='button'>repo</a>
      </article>
  )
}

export default Card