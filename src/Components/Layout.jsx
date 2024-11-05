/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import IndexPage from './IndexPage'


function Layout() {
  return (
    <div className='p-4 '>
        <Header/>
        <IndexPage/>
        <Outlet/>
    </div>
  )
}

export default Layout