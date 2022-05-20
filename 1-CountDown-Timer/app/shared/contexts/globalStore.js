import { useState, createContext } from 'react'

export const GlobalStoreContext = new createContext()

const initialState = {
  eventos: [],
}

const GlobalStoreProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <GlobalStoreContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStoreContext.Provider>
  )
}
export default GlobalStoreProvider
