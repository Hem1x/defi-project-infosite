import React from 'react'
import s from './TeamCard.module.scss'
import tg from '../../assets/team/tg.svg'
import linkedin from '../../assets/team/linkedin.svg'
import twitter from '../../assets/team/twitter.svg'
import Social from '../../components/Social/Social'

const TeamCard = ({teammate}) => {
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
            <Social name={teammate.telegram} src={tg} />
            <Social name={teammate.twitter} src={twitter} />
            <Social name={teammate.linkedin} src={linkedin} />
        </div>

    </div>
  )
}

export default TeamCard