import React from 'react'
import s from './About.module.scss'
import Title from '../../components/Title/Title'
import project from '../../assets/about/project.svg'
import mission from '../../assets/about/mission.svg'

import {motion} from 'framer-motion'

const About = () => {
  const transition = {duration: 1}

  return (
    // Анимация перехода/выхода страницы
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0, transition }}
    exit={{ opacity: 0, y: 100 }}
    >
      <Title name="О проекте"/>

      {/* Секция 1 */}
      <div className={s.container}>

        {/* Текстовый блок */}
        <div className={s.container__item}>
          <div className={s.title}>В чём суть?.</div>

          <div className={s.text}>
            Наш DeFi-проект - это инновационная платформа, предоставляющая широкий спектр финансовых услуг на базе технологии блокчейн.
          </div>
          
          <div className={s.text}>
            Мы стремимся предоставить пользователям максимальную свободу и контроль над их финансами, несмотря на географические ограничения или финансовый статус.
          </div>
        </div>

        {/* Иллюстрация */}
        <div className={s.container__item}>
          <img src={project} alt='project'/>
        </div>
      </div>

      {/* Секция 2 */}
      <div className={s.missionContainer}>

        {/* Текстовый блок */}
        <div className={s.missionText}>
          “Мы верим, что DeFi - это будущее финансовой системы, и мы стремимся быть лидерами в этой области. Присоединяйтесь к нам сегодня и начните опыт финансовой свободы и инноваций с нашим DeFi-проектом. Будущее финансовых услуг уже здесь!”
        </div>

        {/* Иллюстрация */}
        <div className={s.missionImg}>
          <img src={mission} alt='Esotera logo'/>
        </div>

        {/* Кнопка "Присоединиться" */}
        <button className={s.missionBtn}>
          <a href='https://web.telegram.org/k/' target='_blank' rel="noreferrer noopener">Присоединиться</a>
        </button>
      </div>
    </motion.div>
  )
}

export default About