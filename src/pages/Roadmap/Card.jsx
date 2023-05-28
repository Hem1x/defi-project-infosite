import React from 'react'
import s from './Card.module.scss'

const Card = ({card}) => {
    const willElements = Array.from({ length: card.status.will }, (_, index) => index + 1);
    const beElements = Array.from({ length: card.status.be }, (_, index) => index + 1);
    const wasElements = Array.from({ length: card.status.was }, (_, index) => index + 1);

    return (
        <div className={s.container}>
            <div className={s.containerItem}>
                <img src={card.img} alt={card.name} />
            </div>

            <div className={s.containerItem}>
                <div className={s.title}>{card.name}</div>
                <div className={s.text}>{card.text}</div>

                <div className={s.statusLine}>
                    <div className={s.statusItem}>
                        <div className={s.statusType}>Предстоящие</div>
                        <div className={s.indicators}>
                            {willElements.map((el, index) => <div className={s.statusWill} key={index}></div>)}
                        </div>
                        
                    </div>

                    <div className={s.statusItem}>
                        <div className={s.statusType}>В процессе</div>
                        <div className={s.indicators}>
                            {beElements.map((el, index) => <div className={s.statusBe} key={index}></div>)}
                        </div>
                    </div>

                    <div className={s.statusItem}>
                        <div className={s.statusType}>Выполнено</div>
                        <div className={s.indicators}>
                            {wasElements.map((el, index) => <div className={s.statusWas} key={index}></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card