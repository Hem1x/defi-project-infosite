import React from 'react'
import Menu from '../components/Menu/Menu'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
        <Menu />
        <Outlet />
    </>
  )
}

export default MainLayout