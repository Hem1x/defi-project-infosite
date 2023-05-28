import React from 'react'
import s from './Team.module.scss'
import Title from '../../components/Title/Title'
import team from '../../assets/team/team.svg'
import Card from './Card'
import {motion} from 'framer-motion'

const Team = () => {
  const teammates = [
    {
      id: 1,
      name: 'Уилл Смит',
      position: 'CEO',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/',
      img: team
    },
    {
      id: 2,
      name: 'Уилл Смит',
      position: 'CIO',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/',
      img: team
    },
    {
      id: 3,
      name: 'Уилл Смит',
      position: 'InfoSec',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/',
      img: team
    },
    {
      id: 4,
      name: 'Уилл Смит',
      position: 'Project Manager',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/', 
      img: team
    },
    {
      id: 5,
      name: 'Уилл Смит',
      position: 'UX/UI designer',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/',
      img: team
    },
    {
      id: 6,
      name: 'Уилл Смит',
      position: 'Актёр',
      twitter: 'https://twitter.com/?lang=ru',
      linkedin: 'https://ru.linkedin.com/',
      telegram: 'https://web.telegram.org/',
      img: team
    },
  ]

  const transition = {duration: 1}

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Title name="Команда"/>
      <div className={s.cardsCointainer}>
        {teammates.map(teammate => <Card key={teammate.id} teammate={teammate}/>)}
      </div>
    </motion.div>
  )
}

export default Team