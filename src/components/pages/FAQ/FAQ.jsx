import React, {useState} from 'react'
import Title from '../../Title/Title'
import Question from './Question'
import s from './FAQ.module.scss'
import Search from './Search'

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

  return (
    <div>
      <Title name="FAQ"/>
      <div className={s.FAQList}>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} className={s.search}/>
          {filteredFAQ.map(question => <Question key={question.id} question={question}/>)}
      </div>

    </div>
  )
}

export default FAQ