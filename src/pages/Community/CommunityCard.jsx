import React from 'react'
import s from './CommunityCard.module.scss'

const CommunityCard = ({social}) => {
  return (
    <div className={s.card}>
        {/* Изображение соцсети */}
        <div>
            <img src={social.img} alt={social.name} />
        </div>

        {/* Ссылка на community-соцсеть */}
        <a 
          href={social.url} 
          target='_blank' 
          className={s.name} 
          rel="noopener noreferrer"
        >
          {social.name}
        </a>
    </div>
  )
}

export default CommunityCard