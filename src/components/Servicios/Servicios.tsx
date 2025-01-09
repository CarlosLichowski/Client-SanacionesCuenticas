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
      titulo: 'Terapia Floral',
      descripcion:
        'La terapia floral es una forma de medicina altenativa que utiliza esencias florales para tratar problemas emocionales, mentales y fisicos',
    },
    {
      titulo: 'Cartas Natales Cuanticas',
      descripcion:
        'Las cartas natales cuanticas son una herramienta de asteologia cuantica que busca proporcionar la personalidad, el proposito de cida y el potencial espiritual de la persona.',
    },
  ];

  const cursos = [

    {
      titulo: 'Curso de Reiki Karuna y Reiki Usui',
      descripcion:
        ' Ofrecemos cursos de Reiki Karuna  nivel 1,2 y maestria. Y tambien cursos de Reiki Usui nivel 1, 2, 3 y maestria. Conéctate con la energía universal para sanar y equilibrar cuerpo y mente.',
    },
    {
      titulo: 'Sanaciones Cuánticas',
      descripcion:
        'Curso de sanaciones cuanticas nivel 1 ,2 y 3',
    },

    {
      titulo: 'Tecnica del Arca 1 y 2',
      descripcion:
        'La tecnica del arca es una practica espiritual y energetica que busca proteger y equilibrar la energia personal, creando un espacio sagrado y seguro para la meditacion, la reflexión y la conexion con la espiritualidad',
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