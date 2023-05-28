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
      answer: "Esotera - это децентрализованная финансовая платформа (DeFi), которая предлагает ряд инновационных возможностей для управления активами, заемных операций, обмена и других финансовых операций.", 
    },
    {
      id: 3,
      text: "Как я могу начать использовать Esotera?",
      answer: "Esotera - это децентрализованная финансовая платформа (DeFi), которая предлагает ряд инновационных возможностей для управления активами, заемных операций, обмена и других финансовых операций.", 
    },
    {
      id: 4,
      text: "Каковы комиссии на платформе Esotera?",
      answer: "Esotera - это децентрализованная финансовая платформа (DeFi), которая предлагает ряд инновационных возможностей для управления активами, заемных операций, обмена и других финансовых операций.", 
    },
    {
      id: 5,
      text: "Есть ли какие-либо ограничения или требования для использования Esotera?",
      answer: "Esotera - это децентрализованная финансовая платформа (DeFi), которая предлагает ряд инновационных возможностей для управления активами, заемных операций, обмена и других финансовых операций.", 
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