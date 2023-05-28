import React from 'react'
import s from './Card.module.scss'
import tg from '../../../assets/team/tg.svg'
import linkedin from '../../../assets/team/linkedin.svg'
import twitter from '../../../assets/team/twitter.svg'

const Card = ({teammate}) => {
  return (
    <div className={s.container}>
        {/* Image */}
        <div className={s.containerImg}>
            <img src={teammate.img} alt={teammate.name}/>
        </div>
        
        {/* Info */}
        <div className={s.containerInfo}>
            <p className={s.InfoName}>{teammate.name}</p>
            <p>{teammate.position}</p>
        </div>

        {/* Socials */}
        <div className={s.conteinerSocials}>
            <a href={teammate.telegram} target="_blank" rel="noopener noreferrer">
                <img src={tg} alt='telegram' />
            </a>

            <a href={teammate.twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt='twitter' />
            </a>

            <a href={teammate.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt='linkedin' />
            </a>
        </div>

    </div>
  )
}

export default Card