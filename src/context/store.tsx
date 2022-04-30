import React, { createContext, useState } from 'react'

type StoreType = {
  search: string
}

type PropsStoreContext = {
  state: StoreType
  setState: React.Dispatch<React.SetStateAction<StoreType>>
}

const DEFAULT_STORE = {
  state: {
    search: ""
  },
  setState: () => { }
}

const StoreContext = createContext<PropsStoreContext>(DEFAULT_STORE)

const StoreContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STORE.state);

  return (
    <StoreContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContextProvider }
export default StoreContext