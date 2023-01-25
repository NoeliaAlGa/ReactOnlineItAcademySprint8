

function GuardarLogIn(nombreUsuario, contraseñaUsuario) {
    const logedUser =
    window.localStorage.getItem("LogedUser") === null
      ? []
      : alert("Already logged in");

     
        const usuario = {
            nombre: nombreUsuario,
            contraseña: contraseñaUsuario,
          };
        
          logedUser.push(usuario);
          window.localStorage.setItem("LogedUser", JSON.stringify(logedUser));
        
}

export default GuardarLogIn