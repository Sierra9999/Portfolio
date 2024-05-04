import React from 'react'
import { Icon } from '../Icons'

const BentoCard : React.FC<{IconName : string}>  = ({IconName}) => {
  return (
    <div className='bento-card'>
        <Icon iconName='github' size={65}></Icon>
        <h1>{IconName}</h1>
    </div>
  )
}

export default BentoCard