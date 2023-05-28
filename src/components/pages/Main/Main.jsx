import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../../../assets/main//ArrowRight.svg'
import MainIllustration from '../../../assets/main//MainIllustration.svg'
import s from './Main.module.scss'
import {motion} from 'framer-motion'

const Main = () => {
  const transition = {duration: 1}

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className={s.container}>
        <div className={s.text}>
          <div className={s.textTitle}>Esotera - самый быстрый и безопасный DeFi </div>
          <div className={s.textSubTitle}>Покупайте и продавайте криптовалюту, нам доверили 10M кошельков с транзакциями на сумму более 30 миллиардов долларов.</div>
          
          <NavLink to="/about">
            <button className={s.textBtn}>
              <span>О проекте</span>
              <img src={ArrowRight} alt="right" />
            </button>
          </NavLink>

        </div>
        <div className={s.img}>
          <img src={MainIllustration} alt="about project" />
        </div>
      </div>
    </motion.div>

  )
}

export default Main 