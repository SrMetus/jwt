// src/components/Login.js
import React, { useState } from 'react';

export const Login = () => {
  
  return (
    <>
        <div>
        <h2>Iniciar Sesión</h2>
        <form>
            <div>
            <label>Correo Electrónico:</label>
            <input
                type="email"
                value=""                
                required
            />
            </div>
            <div>
            <label>Contraseña:</label>
            <input
                type="password"
                value=""
                required
            />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
        </div>
    </>
  );
}

export default Login;
