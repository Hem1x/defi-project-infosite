import React from 'react'
import Menu from '../components/Menu/Menu'
import { Outlet, useLocation } from 'react-router'
import Main from '../pages/Main/Main'

const MainLayout = () => {
  const location = useLocation()

  return (
    <div>
        <Menu />
        <Outlet />
        {(location.pathname === '/') && <Main />}
    </div>
  )
}

export default MainLayout