import React from 'react'
import Title from '../../components/Title/Title'
import VacanciesCard from './VacanciesCard'
import s from './Vacancies.module.scss'
import {motion} from 'framer-motion'

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

  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Title name="Вакансии"/>

      <div className={s.vacList}>

        {/* Рендер карточек вакансий */}
        {vacancies.map(vac => <VacanciesCard key={vac.name} vacance={vac} />)}
        
      </div>
    </motion.div>
  )
}

export default Vacancies