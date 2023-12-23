import React from 'react'

function LoginComponent() {
  return (
    <div>
      <form action=""> 
      <br />
        <label htmlFor="">Usuario</label>
        <input type="text" name="usuario"/>
        <br />
        <label htmlFor="">Contraseña</label>
        <input type="text" name="contrasena" />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default LoginComponent
