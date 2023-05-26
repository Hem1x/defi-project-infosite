import React, { useEffect, useState } from 'react'
import LogoSVG from '../../assets/Logo.svg'
import s from './Menu.module.scss'
import DropDown from '../DropDown/DropDown'
import CustomLink from '../CustomLink/CustomLink'
import { NavLink, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation()

    // Оставляю дропдаун выделенным даже при смене url
    const [url1, setUrl1] = useState('about')
    const [url2, setUrl2] = useState('community')

    useEffect(() => {
        const url = location.pathname.slice(1)

        if (['about', 'team', 'roadmap'].indexOf(url) !== -1) {
            setUrl1(url)
        } else if (['community', 'partners', 'vacancies'].indexOf(url) !== -1) {
            setUrl2(url)
        } 

    }, [location])

    return (
    <nav className={s.nav}>
        <div className={s.navLogo}>
            <NavLink to='main'>
                <img src={LogoSVG} alt='Esotera logo'/>
            </NavLink>
        </div>
        
        <div className={s.navBar}>
            <CustomLink to='what-is-defi'>Что такое DeFi ?</CustomLink>

            <DropDown name='Esotera' url={url1}>
                <NavLink to='about'>О проекте</NavLink>
                <NavLink to='team'>Команда</NavLink>
                <NavLink to='roadmap'>Roadmap</NavLink>
            </DropDown>

            <CustomLink to='news'>Новости</CustomLink>
            <CustomLink to='faq'>FAQ</CustomLink>

            <DropDown name='О нас' url={url2}>
                <NavLink to='community'>Сообщество</NavLink>
                <NavLink to='partners'>Партнёры</NavLink>
                <NavLink to='vacancies'>Вакансии</NavLink>
            </DropDown>
        </div>

    </nav>
    )
}

export default Menu