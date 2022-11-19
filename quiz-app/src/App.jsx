import { ConfigProvider, Result, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { fetchRefreshToken } from './auth/fetchRefreshToken'
import MainLayout from './components/MainLayout'
import { AppStateContext, defaultAppState } from './state/AppState'

const App = () => {
  const [appState, setAppState] = useState({
    ...defaultAppState
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let storageData = null
    try {
      storageData = localStorage.getItem('quiz-appState')
      if (storageData) {
        storageData = JSON.parse(storageData)
      }
    } catch (error) {
      console.log(error)
    }
    if (storageData) {
      if (
        storageData.isLoggedIn &&
        storageData.userId &&
        storageData.role &&
        storageData.email &&
        storageData.fullname &&
        storageData.accessToken &&
        storageData.refreshToken &&
        storageData.issuedAt &&
        storageData.expiresAt &&
        storageData.expiresAt > Date.now()
      ) {
        const {
          userId,
          role,
          email,
          fullname,
          accessToken,
          refreshToken,
          issuedAt,
          expiresAt
        } = storageData
        setAppState({
          isLoggedIn: true,
          userId,
          role,
          email,
          fullname,
          profileImg: '',
          accessToken,
          refreshToken,
          issuedAt,
          expiresAt
        })
        setLoading(false)
      } else {
        fetchRefreshToken(storageData.refreshToken)
          .then(response => {
            if (response && response.refreshToken) {
              const {
                userId,
                role,
                email,
                fullname,
                accessToken,
                refreshToken,
                issuedAt,
                expiresAt
              } = response
              let obj = {
                isLoggedIn: true,
                userId,
                role,
                profileImg: '',
                email,
                fullname,
                accessToken,
                refreshToken,
                issuedAt,
                expiresAt: expiresAt * 1000
              }
              setAppState(obj)
              localStorage.setItem('quiz-appState', JSON.stringify(obj))
            }
          })
          .catch(error => {
            setError(true)
            console.error('failed to load refresh token', error)
          })
          .finally(() => {
            setLoading(false)
          })
      }
    } else {
      setLoading(false)
    }
  }, [])
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Spin />
      </div>
    )
  }
  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Result
          status="error"
          title="error loading app"
          subTitle="oops unable to access server at this time please try again later
          "
        />
      </div>
    )
  }

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ef78b9',
            colorInfo: '#ce69a0'
          }
        }}
      >
        <AppStateContext.Provider
          value={{
            appState,
            setAppState
          }}
        >
          <MainLayout />
        </AppStateContext.Provider>
      </ConfigProvider>
    </div>
  )
}

export default App
