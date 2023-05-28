import React from 'react'
import s from './Community.module.scss'
import Title from '../../components/Title/Title'
import CommunityCard from './CommunityCard'
import github from '../../assets/community/github.svg'
import twitter from '../../assets/community/twitter.svg'
import telegram from '../../assets/community/telegram.svg'
import {motion} from 'framer-motion'

const Community = () => {
  const socials = [
    {
      id: 1,
      name: 'GitHub',
      img: github,
      url: "https://github.com/Hem1x" 
    },
    {
      id: 2,
      name: 'Twitter',
      img: twitter,
      url: "https://twitter.com/?lang=ru" 
    },
    {
      id: 3,
      name: 'Telegram',
      img: telegram,
      url: "https://web.telegram.org/k/" 
    },
  ]

  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Title name="Сообщество"/>

      <div className={s.communityList}>
        {/* Рендер компонетов Card на странице Community */}
        {socials.map(social => (<CommunityCard key={social.id} social={social}/>))}
      </div>
      
    </motion.div>
  )
}

export default Community