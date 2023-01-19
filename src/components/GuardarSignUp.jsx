
import BuscarUsuario from "./BuscarUsuario";
import GuardarLogIn from "./GuardarLogIn";

function GuardarSignUp(nombreUsuario, mailUsuario, contraseñaUsuario) {
    const usuarios =
    window.localStorage.getItem("usuarios") === null
      ? []
      : JSON.parse(window.localStorage.getItem("usuarios"));

      const busquedaUsuario= BuscarUsuario(nombreUsuario, contraseñaUsuario);

      if(busquedaUsuario === true) {
        alert("Already registered user");
      }
      else {
          localStorage.removeItem("LogedUser");
          GuardarLogIn(nombreUsuario, contraseñaUsuario);
        
        const usuario = {
            nombre: nombreUsuario,
            mail: mailUsuario,
            contraseña: contraseñaUsuario,
          };
        
          usuarios.push(usuario);
          alert("User successfully registered");
          console.log("User registred: ",usuario);
          console.log("Users registred: ",usuarios);
          window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
      }
  
}

export default GuardarSignUp