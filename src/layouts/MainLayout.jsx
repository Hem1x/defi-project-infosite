import React from 'react'
import Menu from '../components/Menu/Menu'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <Menu />
        <Outlet />
    </div>
  )
}

export default MainLayout