import React, {useState} from 'react'
import s from './FAQ.module.scss'
import Title from '../../components/Title/Title'
import FAQCard from './FAQCard'
import SearchInput from '../../components/SearchInput/SearchInput'
import {motion} from 'framer-motion'

const FAQ = () => {
  const questions = [
    {
      id: 1,
      text: "Что такое Esotera?",
      answer: "Esotera - это децентрализованная финансовая платформа (DeFi), которая предлагает ряд инновационных возможностей для управления активами, заемных операций, обмена и других финансовых операций.", 
    },
    {
      id: 2,
      text: "Какие услуги предоставляет Esotera?",
      answer: "Esotera предоставляет широкий спектр финансовых услуг на базе технологии блокчейн. Включая стейкинг, ликвидность, фарминг, маржинальную торговлю и многое другое. Наша платформа предлагает возможности для финансового роста и диверсификации портфеля.", 
    },
    {
      id: 3,
      text: "Как я могу начать использовать Esotera?",
      answer: "Чтобы начать использовать Esotera, вам нужно создать аккаунт на нашей платформе. После регистрации вы сможете внести депозит в поддерживаемые активы и начать пользоваться доступными финансовыми услугами. Мы предоставляем простой и интуитивно понятный интерфейс, который поможет вам легко навигировать по платформе.", 
    },
    {
      id: 4,
      text: "Каковы комиссии на платформе Esotera?",
      answer: "Комиссии на платформе Esotera зависят от типа услуги, которую вы используете. Мы стремимся предлагать конкурентноспособные и прозрачные комиссии, чтобы обеспечить нашим пользователям максимальную ценность. Подробные информацию о комиссиях можно найти в соответствующих разделах нашей платформы.", 
    },
    {
      id: 5,
      text: "Есть ли какие-либо ограничения или требования для использования Esotera?",
      answer: "Для использования Esotera вы должны быть совершеннолетним пользователем, соответствующим правилам и законодательству вашей юрисдикции. Кроме того, некоторые услуги могут иметь дополнительные требования, такие как минимальная сумма депозита или уровень верификации. Подробную информацию о требованиях и ограничениях можно найти на нашей платформе или обратившись в нашу службу поддержки.", 
    },
  ]

  const [searchQuery, setSearchQuery] = useState('');
  const filteredFAQ = questions.filter(question => question.text.toLowerCase().includes(searchQuery.toLowerCase()))
  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Title name="FAQ"/>
      <div className={s.FAQList}>
          <SearchInput 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            className={s.search}
          />
          {/* Рендер компонетов Card на странице FAQ */}
          {filteredFAQ.map(question => <FAQCard key={question.id} question={question}/>)}
      </div>

    </motion.div>
  )
}

export default FAQ