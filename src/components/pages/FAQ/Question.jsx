import React, { useState } from 'react'
import s from './Question.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Question = ({question}) => {
    const [isActive, setIsActive] = useState(false)

    return (

            <div className={s.container}>

                    <div className={isActive ? s.questionActive : s.question} onClick={() => setIsActive(!isActive)}>
                        {question.text}
                        <FontAwesomeIcon 
                            className={s.questionIcon}
                            icon={isActive ? faChevronUp: faChevronDown}
                        />
                    </div>
                    
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

export default Question