import React from 'react'
import Title from '../Title/Title'
import Vacance from './Vacance'
import s from './Vacancies.module.scss'

const Vacancies = () => {
  const vacancies = [
    {
      id: 1,
      name: 'Solidity developer',
      experience: 5,
      stack: ['Solidity', 'web3.js', 'HardHat', 'Remix', 'Truffle']
    },
    {
      id: 2,
      name: 'Front-End developer',
      experience: 1,
      stack: ['HTML/CSS/JS', 'React', 'SASS', 'Webpack', 'Git']
    },
    {
      id: 3,
      name: 'Backend developer',
      experience: 3,
      stack: ['Python', 'Django/Flask', 'Docker', 'Node.js']
    },
  ]

  return (
    <div>
      <Title name="Вакансии"/>

      <div className={s.vacList}>
        {vacancies.map(vac => <Vacance key={vac.name} vacance={vac} />)}
      </div>
    </div>
  )
}

export default Vacancies