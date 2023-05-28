import React from 'react'
import Title from '../../Title/Title'
import s from './About.module.scss'
import project from '../../../assets/about/project.svg'
import mission from '../../../assets/about/mission.svg'
import {motion} from 'framer-motion'

const About = () => {
  const transition = {duration: 1}

  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0, transition }}
    exit={{ opacity: 0, y: 100 }}
    >
      <Title name="О проекте"/>

      <div className={s.container}>
        <div className={s.containerItem}>
          <div className={s.title}>В чём суть?.</div>

          <div className={s.text}>
            Наш DeFi-проект - это инновационная платформа, предоставляющая широкий спектр финансовых услуг на базе технологии блокчейн.
          </div>
          
          <div className={s.text}>
            Мы стремимся предоставить пользователям максимальную свободу и контроль над их финансами, несмотря на географические ограничения или финансовый статус.
          </div>
        </div>

        <div className={s.containerItem}>
          <img src={project} alt='project'/>
        </div>
      </div>

      <div className={s.missionContainer}>
        <div className={s.missionText}>
          “Мы верим, что DeFi - это будущее финансовой системы, и мы стремимся быть лидерами в этой области. Присоединяйтесь к нам сегодня и начните опыт финансовой свободы и инноваций с нашим DeFi-проектом. Будущее финансовых услуг уже здесь!”
        </div>

        <div className={s.missionImg}>
          <img src={mission} alt='Esotera logo'/>
        </div>

        <button className={s.missionBtn}>
          <a href='https://web.telegram.org/k/' target='_blank' rel="noreferrer noopener">Присоединиться</a>
        </button>
      </div>
    </motion.div>
  )
}

export default About