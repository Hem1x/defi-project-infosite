import React from 'react'
import s from './Vacance.module.scss'

const Vacance = ({vacance}) => {

    const validPostfix = vacance.experience === 1 ? 'года' : 'лет'

    return (
        <div className={s.container}>
            <div className={s.containerItem}>
                <div className={s.vacName}>{vacance.name}</div>
                <div className={s.vacInfo}>
                    <span>Опыт работы: от {vacance.experience} {validPostfix}</span>
                    <span>Стек технологий: {vacance.stack.join(', ')}</span>
                </div>
            </div>

            <div className={s.containerItem}>
                <button>Откликнуться</button>
            </div>
        </div>
    )
}

export default Vacance