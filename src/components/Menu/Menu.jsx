import React, { useEffect, useState } from 'react'
import LogoSVG from '../../assets/Logo.svg'
import s from './Menu.module.scss'
import DropDown from '../DropDown/DropDown'
import CustomLink from '../CustomLink/CustomLink'
import { NavLink, useLocation } from 'react-router-dom'
import useChangeDropdown from '../../hooks/useChangeDropdown'

const Menu = () => {
    const location = useLocation()

    // Состояния роутов
    const [url1, setUrl1] = useState('about')
    const [url2, setUrl2] = useState('community')

    // Состояние надписи дропдауна (при смене роута надпись меняется на текущее название страницы)
    const dropdownName1 = useChangeDropdown("Esotera", 0, location)
    const dropdownName2 = useChangeDropdown("О нас", 1, location)

    // Оставляю дропдаун выделенным даже при смене url
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
            <NavLink to=''>
                <img src={LogoSVG} alt='Esotera logo'/>
            </NavLink>
        </div>
        
        <div className={s.navBar}>
            <CustomLink to='what-is-defi'>Что такое DeFi ?</CustomLink>

            <DropDown name={dropdownName1} url={url1}>
                <NavLink to='about'>О проекте</NavLink>
                <NavLink to='team'>Команда</NavLink>
                <NavLink to='roadmap'>Roadmap</NavLink>
            </DropDown>

            <CustomLink to='news'>Новости</CustomLink>
            <CustomLink to='faq'>FAQ</CustomLink>

            <DropDown name={dropdownName2} url={url2}>
                <NavLink to='community'>Сообщество</NavLink>
                <NavLink to='partners'>Инвесторы</NavLink>
                <NavLink to='vacancies'>Вакансии</NavLink>
            </DropDown>
        </div>

    </nav>
    )
}

export default Menu