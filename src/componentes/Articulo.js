import Boton from "./Boton";
import React from 'react';


const Articulo = (props) => {
    return (
    <article className="article">
    <h3>{props.titulo}</h3>
    <p>{props.contenido}</p>
<Boton/>
    </article>
    );
    }
    export default Articulo;