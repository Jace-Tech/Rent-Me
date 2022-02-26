import { createContext, useState } from "react"

export const MoreContext = createContext()


const MoreContextProvider = ({ children }) => {
    const [more, setMore] = useState(null)
    const [moreContent, setMoreContent] = useState(null)

    return (
        <MoreContext.Provider value={{more, setMore, moreContent, setMoreContent}}>
            { children }
        </MoreContext.Provider>
    )
}

export default MoreContextProvider