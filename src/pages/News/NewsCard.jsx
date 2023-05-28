import React from 'react'
import s from './NewsCard.module.scss'

const NewsCard = ({newsBlock}) => {
  return (
    <div className={s.container}>

        {/* Иллюстрация */}
        <div className={s.containerImg}>
            <img src={newsBlock.img} alt={newsBlock.title} />
        </div>

        {/* Текстовый блок */}
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

export default NewsCard