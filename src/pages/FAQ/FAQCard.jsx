import React, { useState } from 'react'
import s from './FAQCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQCard = ({question}) => {
    // Состояние FAQ-блока
    const [isActive, setIsActive] = useState(false)

    return (
        // Компонент Card
            <div className={s.container}>
                    {/* Рендер вопроса */}
                    <div className={isActive ? s.questionActive : s.question} onClick={() => setIsActive(!isActive)}>
                        {question.text}
                        <FontAwesomeIcon 
                            className={s.questionIcon}
                            icon={isActive ? faChevronUp: faChevronDown}
                        />
                    </div>
                    
                    {/* Условный рендер ответа */}
                    {
                        isActive 
                        ? (
                        <div className={s.answerActive}>{question.answer}</div>
                        ) 
                        : <div className={s.answer}></div>
                    }

            </div>
    )
}

export default FAQCard