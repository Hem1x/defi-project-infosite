import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './DropDown.module.scss'
import CustomLink from '../CustomLink/CustomLink'

const DropDown = ({name, children, url}) => {
    const [isDropDown , setIsDropDown] = useState(false)
    const menuRef = useRef()

    // Меняю состояние дропдауна
    const handleDropDownToggle = (e) => {
        setIsDropDown(!isDropDown)
    }

    // Отслеживаю клики вне элемента (если клик вне элемента, дропдаун закроется)
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsDropDown(false)
          }
        };

        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={s.container} onClick={handleDropDownToggle} ref={menuRef}>

            {/* Кнопка дропдауна */}
            <div className={s.dropdownRun}>
                <CustomLink to={url}>
                    {name}
                    <FontAwesomeIcon 
                        icon={isDropDown ? faChevronUp : faChevronDown}
                        className={s.dropdownIcon}
                    />
                </CustomLink>
            </div>

            {/* Отображение дропдауна */}
            {isDropDown && 
                <div className={s.dropdownContent} onMouseLeave={handleDropDownToggle}>
                    {children}
                </div>
            } 
        </div>
    )
}

export default DropDown