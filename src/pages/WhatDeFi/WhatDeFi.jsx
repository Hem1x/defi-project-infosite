import React from 'react'
import s from './WhatDeFi.module.scss'
import Title from '../../components/Title/Title'
import WhatDeFiCard from './WhatDeFiCard'
import whatDeFi from '../../assets/whatDefi/whatDeFi.svg'
import decentral from '../../assets/whatDefi/decentral.svg'
import inclusion from '../../assets/whatDefi/inclusion.svg'
import opasity from '../../assets/whatDefi/opasity.svg'
import humanFactor from '../../assets/whatDefi/humanFactor.svg'
import without3 from '../../assets/whatDefi/without3.svg'
import {motion} from 'framer-motion'

const WhatDeFi = () => {
  const advantages = [ 
    {
      id: 1, 
      title: "Децентрализованы", 
      text: "DeFi пользователи могут заключать сделки друг с другом при помощи множества компьютеров других участников",
      img: decentral,
      color: "#BF91FA"
    },
    {
      id: 2, 
      title: "Отсутствие человеческого фактора", 
      text: "смарт-контракты, на которых основаны децентрализованные финансы (DeFi) , исключают возможность ошибок и мошенничества",
      img: humanFactor,
      color: "#FF6F6F"
    },
    {
      id: 3, 
      title: "Прозрачность", 
      text: "прозрачность DeFi-рынка, созданного на базе открытого кода, и доступность информации о всех транзакциях для любого пользователя. Это позволяет легко пройти аудит и создать честный рынок",
      img: opasity,
      color: "#A4FFDE"
    },
    {
      id: 4, 
      title: "Инклюзивность", 
      text: "возможность запуска DeFi-продукта для любого проекта без необходимости получения разрешения от банков и регуляторов",
      img: inclusion,
      color: "#85AEFF"
    },
    {
      id: 5, 
      title: "Без посредников", 
      text: "DeFi-система трансгранична и не требует посредников для использования финансовых услуг. Кредиты оформляются в несколько кликов прямо из дома, без бюрократических трудностей и завышенных процентов",
      img: without3,
      color: "#FFC289"
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
      <Title name="Что такое DeFi ?"/>

      <div className={s.container}>

        {/* Текствый блок */}
        <div className={s.containerItem}>
          <div className={s.title}>DeFi - это...</div>
          <div className={s.text}>финансовые инструменты, которые функционируют в виде приложений и сервисов, созданных на блокчейне.</div>
          <div className={s.text}>
            <span className={s.selectedText}>Главная цель</span> децентрализованных финансовых инструментов заключается в том, чтобы стать альтернативой банковскому сектору и <span className={s.selectedText}>заменить традиционные технологии финансовой системы</span> протоколами с открытым исходным кодом.
          </div>
        </div>

        {/* Иллюстрация */}
        <div className={s.containerItem}>
          <img src={whatDeFi} alt='Esotera logo'/>
        </div>
      </div>

      <div className={s.line}></div>
      
      {/* Блок преимуществ */}
      <div className={s.advantages}>
          <div className={s.title}>Преимущества DeFi</div>
          {advantages.map(advantage => <WhatDeFiCard key={advantage.id} advantage={advantage}/>)}
      </div>
    </motion.div>
  )
}

export default WhatDeFi