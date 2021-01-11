import React,{createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, changeUser] = useState(false);
    // const [data, setData] = useState({});
    return (
        <UserContext.Provider value={[user, changeUser]}>
            {props.children}
        </UserContext.Provider>
    )
}