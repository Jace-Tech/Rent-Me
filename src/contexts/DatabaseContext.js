import { createContext, useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'
import { useContext } from 'react'

export const DatabaseContext = createContext()

export const useDatabase = () => useContext(DatabaseContext);


const DatabaseProvider = ({ children }) => {
    const [DB, setDB] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        setDB(SQLite.openDatabase('iRent'))
    }, [])

    useEffect(() => {
        DB?.transaction(tx => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id VARCHAR(50), username VARCHAR(50), email VARCHAR(100), password VARCHAR(255))")
        })
    }, [DB])

    useEffect(() => {
        DB?.transaction(tx => {
            tx.executeSql("SELECT * FROM users", null, (obj, res) => {
                setUsers(res.rows['_array'])
            })
        })
    }, [DB])

    return (
        <DatabaseContext.Provider value={{ DB, users }}>
            {children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseProvider