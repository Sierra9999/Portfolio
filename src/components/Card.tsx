import React from 'react'

const Card = () => {
  return (
    <section className='projects'>
      <article className='card'>
        <h1 className='card__title'>Activos Gym</h1>
        <p className='card__description'>Website for a gym, pricing and BMI calculator included</p>
        <a href="#" target='_blank' className='button'>live demo</a>
        <a href="#" target='_blank' className='button'>repo</a>
      </article>
    </section>
  )
}

export default Card