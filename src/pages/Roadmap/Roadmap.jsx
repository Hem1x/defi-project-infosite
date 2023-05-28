import React from 'react'
import s from './Roadmap.module.scss' 
import Title from '../../components/Title/Title'
import RoadmapCard from './RoadmapCard'
import img1 from '../../assets/roadmap/img1.svg'
import img2 from '../../assets/roadmap/img2.svg'
import img3 from '../../assets/roadmap/img3.svg'
import {motion} from 'framer-motion'

const Roadmap = () => {
  const cards = [
    {
      id: 1,
      img: img1,
      name: 'Обновление провокола',
      text: 'Примерно 43 процента технического вклада группы исследований и разработок в Esotera связаны с тем, чтобы сделать протокол Интернет-компьютер проверяемо децентрализованным, эффективным, масштабируемым и совместимым с другими блокчейнами. Основной протокол включает все реплики, включая систему, сетевой уровень, консенсус, среду выполнения и криптобиблиотеки.',
      status: {
        willDo: 4,
        doing: 1,
        done: 2
      }
    },
    {
      id: 2,
      img: img2,
      name: 'Добавить поддержку новых криптовалют',
      text: 'Реализовать интеграцию с дополнительными блокчейнами и протоколами, чтобы расширить список поддерживаемых криптовалют. Это позволит пользователям выбирать из более широкого спектра активов и диверсифицировать свои инвестиции.',
      status: {
        willDo: 1,
        doing: 2,
        done: 4
      }
    },
    {
      id: 3,
      img: img3,
      name: 'Внедрение ликвидности и стейкинга для новых токенов',
      text: 'Разработать инфраструктуру и интерфейс для добавления новых токенов в пулы ликвидности и создания стейкинг-программ. Это позволит пользователям вкладывать свои средства в новые проекты и получать вознаграждения за участие в экосистеме.',
      status: {
        willDo: 6,
        doing: 1,
        done: 2
      }
    }
  ]

  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className={s.roadmapBlock}>
        <Title name="Roadmap"/>

        <div className={s.cardList}>

          {/* Рендер компонентов для страницы "Roadmap" */}
          {cards.map(card => <RoadmapCard key={card.id} card={card}/>)}

        </div>
      </div>
    </motion.div>
  )
}

export default Roadmap