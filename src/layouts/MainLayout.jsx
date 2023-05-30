import React from 'react'
import Menu from '../components/Menu/Menu'
import { Outlet, useLocation } from 'react-router'
import Main from '../pages/Main/Main'

const MainLayout = () => {
  const location = useLocation()

  return (
    <div>
        {/* Компонент панели управления */}
        <Menu />

        {/* Страницы сайта */}
        <Outlet />

        {/* Условное отображение страницы "Главная" при пустом роуте */}
        {(location.pathname === '/') && <Main />}
    </div>
  )
}

export default MainLayout