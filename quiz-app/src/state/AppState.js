import { createContext, useContext } from 'react'

export const defaultAppState = {
  isLoggidIn: false,
  userId: '',
  role: '',
  email: '',
  fullname: '',
  profileImg: '',
  accessToken: '',
  refreshToken: '',
  issuedAt: 0,
  expiresAt: 0
}

export const AppStateContext = createContext({
  appState: { ...defaultAppState },
  setAppState: obj => console.log(obj)
})

export const useAppState = () => useContext(AppStateContext)
