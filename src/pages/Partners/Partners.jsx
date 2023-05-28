import React from 'react'
import s from './Partners.module.scss'
import Title from '../../components/Title/Title'
import fund1 from '../../assets/partners/fund1.svg'
import fund2 from '../../assets/partners/fund2.svg'
import fund3 from '../../assets/partners/fund3.svg'
import fund4 from '../../assets/partners/fund4.svg' 
import fund5 from '../../assets/partners/fund5.svg'
import fund6 from '../../assets/partners/fund6.svg'
import fund7 from '../../assets/partners/fund7.svg'
import {motion} from 'framer-motion'

const Partners = () => {
  const funds = [fund1, fund2, fund3, fund4, fund5, fund6, fund7]
  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Title name="Инвесторы"/>
      <div className={s.funds}>

        {/* Рендер фотографий Инвесторов */}
        {
          funds.map((fund, index) => (
            <div key={index} className={s.fund}>
              <img src={fund} alt={index} />
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Partners