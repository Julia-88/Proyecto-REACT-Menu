import React, { useState } from "react";
import { getDataFromApi } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

import { useUserContext, useUserToggleContext } from "../../Contexts/UserProvider";


const INITIAL_STATE = {
  username: "",
  password: "",
};

function Auth() {
  const [user, setUser] = useState(INITIAL_STATE);

  const userDataContext = useUserContext();
  const userToggleContext = useUserToggleContext();

  const navigate = useNavigate();

  const handleInput = (ev) => {
    setUser({ ...user, [ev.target.id]: ev.target.value });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    getDataFromApi(user).then((data) => {
      if(data.id !== undefined){
        console.log('data',data);
        userToggleContext(data);
        console.log('userContext:',userDataContext);
      navigate("/platos");
      }
    });
  };
  return (
    <div>
      <form onChange={handleInput} onSubmit={handleForm}>
        <label htmlFor="username">Nombre de usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>


      <div className="note-card">
        <h3>Credentials</h3>
        <p>username: emilys</p>
        <p>password: emilyspass</p>
        </div>

    </div>
    
  );
}

export default Auth;
/*
"username" : "emilys",
"password": "emilyspass"*/
