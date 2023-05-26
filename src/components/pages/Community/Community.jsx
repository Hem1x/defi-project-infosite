import React from 'react'
import Title from '../Title/Title'
import s from './Community.module.scss'
import github from '../../../assets/community/github.svg'
import twitter from '../../../assets/community/twitter.svg'
import telegram from '../../../assets/community/telegram.svg'
import Card from './Card'

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

  return (
    <div>
      <Title name="Сообщество"/>
      <div className={s.communityList}>
        {
          socials.map(social => (<Card social={social}/>))
        }
      </div>
    </div>
  )
}

export default Community