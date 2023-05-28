import React from 'react'
import s from './RoadmapCard.module.scss'
import Indicator from '../../components/Indicator/Indicator';

const RoadmapCard = ({card}) => {
    const willDoElements = Array.from({ length: card.status.willDo }, (_, index) => index + 1);
    const doingElements = Array.from({ length: card.status.doing }, (_, index) => index + 1);
    const doneElements = Array.from({ length: card.status.done }, (_, index) => index + 1);

    return (
        <div className={s.container}>
            <div className={s.containerItem}>
                <img src={card.img} alt={card.name} />
            </div>

            <div className={s.containerItem}>
                <div className={s.title}>{card.name}</div>
                <div className={s.text}>{card.text}</div>

                <div className={s.statusLine}>
                    <Indicator name="Предстоящие" type="willDo" arr={willDoElements}/>
                    <Indicator name="В процессе" type="doing" arr={doingElements}/>
                    <Indicator name="Выполнено" type="done" arr={doneElements}/>
                </div>
            </div>
        </div>
    )
}

export default RoadmapCard