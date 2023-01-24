import BuscarUsuario from "./BuscarUsuario";
import GuardarLogIn from "./GuardarLogIn";

function BuscarUsuarios(nombreUsuario, contraseñaUsuario) {
   
    const encontrarUsuario = BuscarUsuario(nombreUsuario, contraseñaUsuario);

    if(encontrarUsuario === true) {
        localStorage.removeItem("LogedUser");
        GuardarLogIn(nombreUsuario, contraseñaUsuario);
        alert(`Registered user: ${nombreUsuario}`) 
    }
    else {
        alert(`Unregistered user: ${nombreUsuario}`);
    }
    
    return encontrarUsuario 
  }

  export default BuscarUsuarios;