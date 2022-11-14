import { Layout } from 'antd'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import { AppSidebarContext } from '../state/AppSidebar'
import { useAppState } from '../state/AppState'

const MainLayout = () => {
  const [sidebarKey, setSidebarKey] = useState('1')
  const { appState } = useAppState()

  console.log(appState)

  // if (!appState.isLoggidIn) return <Login />
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
        <AppSidebarContext.Provider
          value={{
            sidebarKey,
            setSidebarKey
          }}
        >
          {/* <Routes /> */}
          <Login />
        </AppSidebarContext.Provider>
      </Layout>
    </BrowserRouter>
  )
}

export default MainLayout
