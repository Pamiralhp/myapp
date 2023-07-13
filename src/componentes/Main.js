import React from 'react';
import PerfilUsuario from './PerfilUsuario.js';
import Calculator from './Calculator.js';

function Main() {
    const nombre = 'Pavel';
    return (
    <div className="Main">
    <h3>Contenido principal</h3>
    <p>Este es el contenido de la applicacion</p>
    <PerfilUsuario nombre={nombre}/>
    <br/>
    <Calculator/>
    </div>
    );
    }
    export default Main;