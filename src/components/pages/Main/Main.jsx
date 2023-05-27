import React from 'react'
import ArrowRight from '../../../assets/ArrowRight.svg'
import MainIllustration from '../../../assets/MainIllustration.svg'
import s from './Main.module.scss'

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <div className={s.textTitle}>Esotera - самый быстрый и безопасный DeFi </div>
        <div className={s.textSubTitle}>Покупайте и продавайте криптовалюту, нам доверили 10M кошельков с транзакциями на сумму более 30 миллиардов долларов.</div>
        
        <button className={s.textBtn}>
          <span>О проекте </span>
          <img src={ArrowRight} alt="right" />
        </button>
      </div>
      <div className={s.img}>
        <img src={MainIllustration} alt="about project" />
      </div>
    </div>
  )
}

export default Main