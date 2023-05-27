import React from 'react'
import Title from '../../Title/Title'
import s from './Team.module.scss'
import team from '../../../assets/team.svg'
import Card from './Card'

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

  return (
    <div>
      <Title name="Команда"/>
      <div className={s.cardsCointainer}>
        {teammates.map(teammate => <Card key={teammate.id} teammate={teammate}/>)}
      </div>
    </div>
  )
}

export default Team