import React, { createContext, useContext, useState } from 'react'

export const EmailContext = createContext()

const EmailContextProvider = ({ children }) => {
    const [emailV, setEmailV] = useState("")
    return (
        <EmailContext.Provider value={[emailV, setEmailV]}>
            {children}
        </EmailContext.Provider>
    )
}
export default EmailContextProvider

export function useEmail() {
    return useContext(EmailContext)
} 