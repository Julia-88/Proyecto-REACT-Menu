import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserProvider";

function AuthRoute({ component }) {
  const userDataContext = useUserContext();
  if (userDataContext !== null) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthRoute;
