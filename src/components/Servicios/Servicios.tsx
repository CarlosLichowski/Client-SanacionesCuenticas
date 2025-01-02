import React from 'react';
import './Servicios.css'; // Asegúrate de tener este archivo en la misma carpeta o ajusta la ruta.

const Servicios: React.FC = () => {
  const servicios = [
    {
      titulo: 'Sanaciones Cuánticas',
      descripcion:
        'Las sanaciones cuánticas son un conjunto de técnicas que buscan mejorar la salud y el bienestar de una persona, basándose en los principios de la física cuántica.',
    },
    {
      titulo: 'Apertura de Caminos',
      descripcion:
        'La "apertura de caminos cuánticos" es un término utilizado en contextos espirituales y holísticos para describir un proceso de transformación personal y energética.',
    },
    {
      titulo: 'Meditación Guiada',
      descripcion:
        'Una práctica de meditación donde una voz guía al oyente a través de técnicas de relajación y visualización.',
    },
  ];

  const cursos = [
    {
      titulo: 'Curso de Mindfulness',
      descripcion:
        'Aprende técnicas para vivir el presente y manejar el estrés con prácticas de mindfulness.',
    },
    {
      titulo: 'Curso de Reiki',
      descripcion:
        'Conéctate con la energía universal para sanar y equilibrar cuerpo y mente.',
    },
    {
      titulo: 'Introducción a la Física Cuántica',
      descripcion:
        'Explora los principios básicos de la física cuántica en un lenguaje sencillo y accesible.',
    },
  ];

  return (
    <div className="ServiciosMainContainer" id='courses'>
      <div className='box1'>

      <h2>Servicios</h2>
      <div className="servicios-container">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio">
            <div className="titulo">{servicio.titulo}</div>
            <div className="descripcion">{servicio.descripcion}</div>
          </div>
        ))}
      </div>

        </div>

        <div className='box2' >

      <h2>Cursos</h2>
      <div className="cursos-container" >
        {cursos.map((curso, index) => (
          <div key={index} className="curso">
            <div className="titulo">{curso.titulo}</div>
            <div className="descripcion">{curso.descripcion}</div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Servicios;
