import React from 'react'
import Title from '../Title/Title'
import s from './Partners.module.scss'
import fund1 from '../../../assets/fund1.svg'
import fund2 from '../../../assets/fund2.svg'
import fund3 from '../../../assets/fund3.svg'
import fund4 from '../../../assets/fund4.svg'
import fund5 from '../../../assets/fund5.svg'
import fund6 from '../../../assets/fund6.svg'
import fund7 from '../../../assets/fund7.svg'

const Partners = () => {
  const funds = [fund1, fund2, fund3, fund4, fund5, fund6, fund7]

  return (
    <div>
      <Title name="Инвесторы"/>
      <div className={s.funds}>
        {
          funds.map((fund, index) => (
            <div key={index} className={s.fund}>
              <img src={fund} alt={index} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Partners