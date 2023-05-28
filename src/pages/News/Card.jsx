import React from 'react'
import s from './Card.module.scss'

const Card = ({newsBlock}) => {
  return (
    <div className={s.container}>
        <div className={s.containerImg}>
            <img src={newsBlock.img} alt={newsBlock.title} />
        </div>

        <div className={s.containerText}>
            <div className={s.header}>
                <div className={s.title}>{newsBlock.title}</div>
                <div className={s.date}>{newsBlock.date}</div>
            </div>

            <div className={s.text}>{newsBlock.text}</div>
        </div>
    </div>
  )
}

export default Card