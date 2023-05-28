import React from 'react'
import s from './WhatDeFiCard.module.scss'

const WhatDeFiCard = ({advantage}) => {
  return (
    <div className={s.container}>
        <div className={s.picture} style={{backgroundColor: advantage.color}}>
            <img src={advantage.img} alt={advantage.title} />
        </div>

        <div className={s.text}>
            <div className={s.title}>{advantage.title}</div>
            <div>{advantage.text}</div>
        </div>
    </div>
  )
}

export default WhatDeFiCard