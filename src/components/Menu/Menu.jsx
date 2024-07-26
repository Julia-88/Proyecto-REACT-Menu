import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useUserContext, useLogOutContext } from "../../Contexts/UserProvider";
import "./Menu.scss";

const Menu = () => {
    //const user = localStorage.getItem('user')
    const logOutContext = useLogOutContext();

    const userDataContext = useUserContext();
    const navigate = useNavigate();
    const handleLogout = () => {
        
        logOutContext();

        navigate("/login");

    };
    return (
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to="/" >Inicio</NavLink>
                </li>
                {userDataContext !== null && (
                    <li>
                        <NavLink to="/platos">Añadir Platos</NavLink>
                    </li>
                )}

                <li>
                    <NavLink to="/menu" >Menu</NavLink>
                </li>
                {userDataContext === null ? (
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                ) : (
                    <li>
                        <div className="logout myDiv"  onClick={handleLogout}>Logout</div>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Menu;