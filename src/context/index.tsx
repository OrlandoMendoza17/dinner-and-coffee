import { initialStateCtxt } from 'hooks/useInitialState'
import React from 'react'
import { AppContextType, DTOsaveState } from '../../types'



const AppContext = React.createContext<AppContextType>({
  state: initialStateCtxt,
  saveState: (newState: DTOsaveState) => {}
})

export default AppContext
