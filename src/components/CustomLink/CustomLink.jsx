import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CustomLink.module.scss'

const CustomLink = ({children, to}) => {
    const setActive = ({isActive}) => isActive ? s.activeLink : s.link
    
    return (
        <NavLink to={to} className={setActive}>
            {children}
        </NavLink>
    )
}

export default CustomLink