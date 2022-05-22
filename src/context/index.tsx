import React from 'react'

import { StoreContextProvider } from './store'

export const GlobalContext = ({ children }) => {
  return <StoreContextProvider> {children} </StoreContextProvider>
}
