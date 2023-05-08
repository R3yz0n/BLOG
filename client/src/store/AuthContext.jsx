import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from "react-router-dom";



const Context = createContext();
export const UserContext = () => useContext(Context)


const AuthContext = ({ children }) => {
    const navigate = useNavigate()
    const storedToken = JSON.parse(localStorage.getItem('token'));
    const location = useLocation()

    const [currUser, setCurrUser] = useState({});
    const [token, setToken] = useState(storedToken || null);
    // console.log(token);
    // console.log(currUser);


    const login = async (inputs) => {

        setToken(inputs.token)
        console.log(inputs.token);

        // if i set currUser with decodedtoken when i reload the page my currUser state becomes empty obj again

    }

    const logout = async () => {
        console.log('------');
        const res = await axios.post('/auth/logout');
        console.log(res);
        setCurrUser(null);
        setToken(null)
        // navigate('/login')
        navigate('/')




    }


    // useEffect(() => {
    //     localStorage.setItem("token", JSON.stringify(token))

    //     const userHandler = async () => {

    //         try {
    //             const decoded = await jwt_decode(token)
    //             setCurrUser(decoded)

    //         }
    //         catch (error) {
    //             console.log(error);
    //         }


    //     }

    //     userHandler()



    //     console.log(currUser);

    // }, [token])

    useEffect(() => {
        // Check if the token is expired
        const isTokenExpired = () => {
            if (token) {
                const decoded = jwt_decode(token);
                console.log(decoded.exp);
                return decoded.exp < Date.now() / 1000;
            }
            return false;
        }

        if (isTokenExpired()) {
            logout();
        } else {
            localStorage.setItem("token", JSON.stringify(token));

            const userHandler = async () => {
                try {
                    const decoded = await jwt_decode(token);
                    setCurrUser(decoded);
                } catch (error) {
                    console.log(error);
                }
            }
            userHandler();
        }
    }, [token, location.search, location.pathname]);



    // console.log(currUser);




    return (
        <Context.Provider value={{ currUser, token, login, logout }}>
            {children}
        </Context.Provider>

    )
}

export default AuthContext;