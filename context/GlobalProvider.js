import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext); 

export const GlobalProvider = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((user) => {
            if(user) {
                setIsLoggedIn(true);
                setUser(user);
            }
            else{
                setIsLoggedIn(false);
                setUser(null);  
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });

    }, [])

    return (
        <globalContext.Provider 
            value={{isLoggedIn, setIsLoggedIn, user, setUser, isLoading}}
        >
            {children}
        </globalContext.Provider>
    )
}