import React from 'react'
import Title from '../../Title/Title'
import whatDeFi from '../../../assets/whatDeFi.svg'
import s from './WhatDeFi.module.scss'
import decentral from '../../../assets/decentral.svg'
import inclusion from '../../../assets/inclusion.svg'
import opasity from '../../../assets/opasity.svg'
import humanFactor from '../../../assets/humanFactor.svg'
import without3 from '../../../assets/without3.svg'
import Advantage from './Advantage'
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

  return (
    <div>
      <Title name="Что такое DeFi ?"/>

      <div className={s.container}>
        <div className={s.containerItem}>
          <div className={s.title}>DeFi - это...</div>
          <div className={s.text}>финансовые инструменты, которые функционируют в виде приложений и сервисов, созданных на блокчейне.</div>
          <div className={s.text}>
            <span className={s.selectedText}>Главная цель</span> децентрализованных финансовых инструментов заключается в том, чтобы стать альтернативой банковскому сектору и <span className={s.selectedText}>заменить традиционные технологии финансовой системы</span> протоколами с открытым исходным кодом.
          </div>
        </div>

        <div className={s.containerItem}>
          <img src={whatDeFi} alt='Esotera logo'/>
        </div>
      </div>

      <div className={s.line}></div>
      
      <div className={s.advantages}>
          <div className={s.title}>Преимущества DeFi</div>
          {advantages.map(advantage => <Advantage key={advantage.id} advantage={advantage}/>)}
      </div>
    </div>
  )
}

export default WhatDeFi