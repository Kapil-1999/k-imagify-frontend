import {createContext,  useState} from 'react'

export const AppContext =  createContext(null);
const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token , setToken] = useState(localStorage.getItem("imagify_token"));
    const [credit, setCredit] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const value = {
        user,
        setUser ,
        showLogin, 
        setShowLogin ,
        backendUrl,
        token, setToken, 
        credit, setCredit
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;