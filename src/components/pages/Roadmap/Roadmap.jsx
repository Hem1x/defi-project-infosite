import React from 'react'
import Title from '../../Title/Title'
import Card from './Card'
import img1 from '../../../assets/roadmap/img1.svg'
import img2 from '../../../assets/roadmap/img2.svg'
import img3 from '../../../assets/roadmap/img3.svg'
import s from './Roadmap.module.scss' 
import {motion} from 'framer-motion'

const Roadmap = () => {
  const cards = [
    {
      id: 1,
      img: img1,
      name: 'Обновление провокола',
      text: 'Примерно 43 процента технического вклада группы исследований и разработок в DFINITY Foundation связаны с тем, чтобы сделать протокол Интернет-компьютер проверяемо децентрализованным, эффективным, масштабируемым и совместимым с другими блокчейнами. Основной протокол включает все реплики, включая систему, сетевой уровень, консенсус, среду выполнения и криптобиблиотеки.',
      status: {
        will: 4,
        be: 1,
        was: 2
      }
    },
    {
      id: 2,
      img: img2,
      name: 'Обновление провокола',
      text: 'Примерно 43 процента технического вклада группы исследований и разработок в DFINITY Foundation связаны с тем, чтобы сделать протокол Интернет-компьютер проверяемо децентрализованным, эффективным, масштабируемым и совместимым с другими блокчейнами. Основной протокол включает все реплики, включая систему, сетевой уровень, консенсус, среду выполнения и криптобиблиотеки.',
      status: {
        will: 1,
        be: 2,
        was: 4
      }
    },
    {
      id: 3,
      img: img3,
      name: 'Обновление провокола',
      text: 'Примерно 43 процента технического вклада группы исследований и разработок в DFINITY Foundation связаны с тем, чтобы сделать протокол Интернет-компьютер проверяемо децентрализованным, эффективным, масштабируемым и совместимым с другими блокчейнами. Основной протокол включает все реплики, включая систему, сетевой уровень, консенсус, среду выполнения и криптобиблиотеки.',
      status: {
        will: 6,
        be: 1,
        was: 2
      }
    }
  ]

  const transition = {duration: 1}

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className={s.roadmapBlock}>
        <Title name="Roadmap"/>

        <div className={s.cardList}>
          {cards.map(card => <Card key={card.id} card={card}/>)}
        </div>
      </div>
    </motion.div>
  )
}

export default Roadmap