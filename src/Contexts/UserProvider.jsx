import React, { useState, useContext, useEffect } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();
const userLogout = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function useLogOutContext() {
  return useContext(userLogout);
}

export function UserProvider(props) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const loadedUserData = localStorage.getItem('userData');
      if (loadedUserData) {
        setUserData(JSON.parse(loadedUserData));
        
      }
    }, []);

    const cambiaLogin = (userData) => {
      setUserData(userData);
      console.log('cambiaLogin:',userData);
      localStorage.setItem('userData', JSON.stringify(userData)); 

    }

    const logOut = () => {
      setUserData(null);
      localStorage.removeItem('userData');
      console.log('logOut');
    }

    return (
        <userContext.Provider value={userData}>
            <userToggleContext.Provider value={cambiaLogin}>
              <userLogout.Provider value={logOut}>
                {props.children}
              </userLogout.Provider>
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}