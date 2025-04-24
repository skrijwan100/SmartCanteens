import React, { createContext, useContext, useState } from 'react'

export const TopLoderContext = createContext()

const TopLoderProvider = ({ children }) => {
    const [progress, setProgress] = useState(0);

    return (
        <TopLoderContext.Provider value={[[progress, setProgress]]}>
            {children}
        </TopLoderContext.Provider>
    )
}

export default TopLoderProvider

export function useTopLoader() {
    return useContext(TopLoderContext)
} 
