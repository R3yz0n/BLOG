import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



const Context = createContext();
export const UserContext = () => useContext(Context)


const AuthContext = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [currUser, setCurrUser] = useState(user || null);
    const login = (inputs) => {

        setCurrUser(inputs)
        // console.log(currUser);


    }

    const logout = async () => {
        console.log('------');
        const res = await axios.post('auth/logout');
        // console.log(res);
        setCurrUser(null);



    }


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currUser))
        // console.log(currUser);
    }, [currUser])

    // console.log(currUser);




    return (
        <Context.Provider value={{ currUser, login, logout }}>
            {children}
        </Context.Provider>

    )
}

export default AuthContext;