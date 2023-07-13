import React from 'react';
import PerfilUsuario from './PerfilUsuario.js';

function Main() {
    const nombre = 'Pavel';
    const foto = 'https://th.bing.com/th/id/R.0f094545d92e9879f17e6ef424a2d06f?rik=1qjnaeygK8KoAw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YxN9Qmff8ig%2fUrWcyYIkvjI%2fAAAAAAAAZpU%2fHoeIPa_Ob9k%2fs1600%2ffoto-de-europa.jpg&ehk=qnO2%2fhs9yT2eU7P9IglCltyRhiq03RmNorngsaskPto%3d&risl=&pid=ImgRaw&r=0';
   
    return (
    <div className="Main">
    <h3>Contenido principal</h3>
    <p>Este es el contenido de la applicacion</p>
    <PerfilUsuario nombre={nombre} foto={foto}/>
    </div>
    );
    }
    export default Main;