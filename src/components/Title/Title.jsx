import React from 'react'
import s from "./Title.module.scss"

const Title = ({name}) => {
  return (
    <div className={s.title}>{name}</div>
  )
}

export default Title