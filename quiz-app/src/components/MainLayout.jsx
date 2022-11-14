import { Layout } from 'antd'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import { AppSidebarContext } from '../state/AppSidebar'
import { useAppState } from '../state/AppState'
import { Routes } from './Routes'

const MainLayout = () => {
  const [sidebarKey, setSidebarKey] = useState('1')
  const { appState } = useAppState()

  if (!appState.isLoggidIn) return <Login />
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
        <AppSidebarContext.Provider
          value={{
            sidebarKey,
            setSidebarKey
          }}
        >
          <Routes />
        </AppSidebarContext.Provider>
      </Layout>
    </BrowserRouter>
  )
}

export default MainLayout
