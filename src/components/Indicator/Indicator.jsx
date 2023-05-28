import React from 'react'
import s from './Indicator.module.scss'

const Indicator = ({name, type, arr}) => {
    let style = ''

    switch (type) {
        case "willDo":
            style = s.statusWill
            break
        case "doing":
            style = s.statusBe
            break
        case "done":
            style = s.statusWas
            break
        default:
            break
    }

    return (
    <div>
        <div className={s.statusItem}>
            <div className={s.statusType}>{name}</div>
            <div className={s.indicators}>
                {arr.map((_, index) => <div className={style} key={index}></div>)}
            </div>
        </div>
    </div>
    )
}

export default Indicator