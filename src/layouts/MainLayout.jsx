import React from 'react'
import Menu from '../components/Menu/Menu'
import { Outlet } from 'react-router'
import s from './MainLayout.module.scss'

const MainLayout = () => {
  return (
    <div className={s.container}>
        <Menu />
        <Outlet />
    </div>
  )
}

export default MainLayout