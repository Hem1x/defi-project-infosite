import React from 'react'
import s from './Card.module.scss'

const Card = ({social}) => {
  return (
    <div className={s.card}>
        <div className={s.cardImg}>
            <img src={social.img} alt={social.name} />
        </div>

        <a href={social.url} target='_blank' className={s.name} rel="noopener noreferrer">{social.name}</a>
    </div>
  )
}

export default Card