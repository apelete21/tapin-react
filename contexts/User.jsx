const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    // const token = JSON.parse()

    const [userdata, setUserdata] = useState({})
    const [token, setToken] = useState({})

    useEffect(() => {
        const dataToken = localStorage.getItem("user")
        if (token) {
            console.log(token)
            return
        }
    }, [])

    useEffect(() => {
        if (token) {
            console.log(token)
            return
        }
        localStorage.setItem("user", JSON.stringify(userdata.token))
    }, [userdata])

    return (
        <UserContext.Provider value={{
            userdata, setUserdata
        }} >
            {children}
        </UserContext.Provider>
    )
}