import React from 'react'

function LoginComponent() {
    return (
        <div>
            <div>
                <h1>Bienvenido al Sistema</h1>
                
                <h3>Ingresa tus datos para continuar</h3>
            </div>
            <form action="">
                <br />
                <label htmlFor="">Usuario</label> 
                <br />
                <input type="text" name="usuario" />
                <br />
                <label htmlFor="">Contraseña</label>
                <br />
                <input type="text" name="contrasena" />
                <br />
                <br />
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default LoginComponent
