import { createContext, useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

export const DatabaseContext = createContext()


const DatabaseProvider = ({ children }) => {
    const [DB, setDB] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        setDB(SQLite.openDatabase('iRent'))
    }, [])

    useEffect(() => {
        DB?.transaction(tx => {
            tx.executeSql("SELECT * FROM users", null, (obj, res) => {
                setUsers(res.rows['_array'])
            })
        })
    }, [])

    return (
        <DatabaseContext.Provider value={{ DB, users }}>
            {children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseProvider