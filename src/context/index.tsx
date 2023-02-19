import React from 'react'

import { StoreContextProvider } from './search/store'
import { AuthContextProvider } from './auth/store'

export const GlobalContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <StoreContextProvider> 
        {children} 
      </StoreContextProvider>
    </AuthContextProvider>
  )
}
