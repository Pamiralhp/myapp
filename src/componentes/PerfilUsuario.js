import React, { useState } from 'react';


const PerfilUsuario = (props) => {
    const [edad, setEdad] = useState(27);
  const IncrementoEdad = () => {
    setEdad(edad + 1);
  };

  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Edad: {edad}</p>
      <img src={props.foto} alt="Foto de perfil" />
      <button onClick={IncrementoEdad}>Actualizar edad</button>
    </div>
  );};

export default PerfilUsuario;
