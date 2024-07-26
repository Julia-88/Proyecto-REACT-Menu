// Establecer la conexión con la API
const getDataFromApi = (user) => {
    user.expiresInMins = 30;
    return fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  };
  
  const getDataUser = (token) => {
    return fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((response) => response.json());
  };
  
  export { getDataFromApi, getDataUser };
  /*
  "username" : "emilys",
  "password": "emilyspass"*/
  