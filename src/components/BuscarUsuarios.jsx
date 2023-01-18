import BuscarUsuario from "./BuscarUsuario";

function BuscarUsuarios(nombreUsuario, contraseñaUsuario) {
    const encontrarUsuario = BuscarUsuario(nombreUsuario, contraseñaUsuario);
    return encontrarUsuario ? alert(`Registered user: ${nombreUsuario}`) 
                            : alert(`Unregistered user: ${nombreUsuario}`);
  }

  export default BuscarUsuarios;