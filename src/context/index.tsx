import React from 'react'

import { StoreContextProvider } from './store'

export const GlobalContext: React.FC = ({ children }) => {
  return <StoreContextProvider> {children} </StoreContextProvider>
}
