import React, {createContext, useState} from 'react'

export const StateContext =createContext()

const ContextProvider =({children}) =>{
    const [menu, setMenu] = useState(true)

    return (
        <StateContext.Provider value={{menu, setMenu}}>
          {children}
        </StateContext.Provider>
    )
}
export default ContextProvider