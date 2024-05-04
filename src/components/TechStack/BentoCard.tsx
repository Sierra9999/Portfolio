import React from 'react'
import { Icon,IconProps } from '../Icons'

const BentoCard : React.FC<{IconName : string}>  = ({IconName}) => {
  return (
    <div className='bento-card'>
        <Icon iconName={IconName.toLowerCase() as IconProps['iconName']} size={65}></Icon>
        <p className='bento-card__title'>{IconName}</p>
    </div>
  )
}

export default BentoCard