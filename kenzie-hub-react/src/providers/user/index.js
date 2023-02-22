import { createContext, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState("");
    const [datauser, setdatause] = useState({});

    return(
        <UserContext.Provider value={{
            userId, setUserId,
            datauser, setdatause
        }}>
            {children}
        </UserContext.Provider>
    )

}