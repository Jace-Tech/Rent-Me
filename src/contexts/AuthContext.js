import { useEffect } from "react"
import { createContext, useContext } from "react"
import {firebaseAuth} from "../../firebase"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {

    const emailSignUp = (user) => {
        
    }

    useEffect(() => {
        console.log({firebaseAuth})
    }, [])

    return (
        <AuthContext.Provider value={}>
            { children }
        </AuthContext.Provider>
    )
}