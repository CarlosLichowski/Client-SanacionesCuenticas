import React from 'react';
import './Servicios.css'; // Asegúrate de tener este archivo en la misma carpeta o ajusta la ruta.
import certificado from '../../assets/certificado.png'


const Servicios: React.FC = () => {

  

  const servicios = [
    {
      
      titulo: 'Sanaciones Cuánticas',
      descripcion:
        'Las sanaciones cuánticas son un conjunto de técnicas que buscan mejorar el bienestar de personas, mascotas y plantas, basándose en los principios de la física cuántica.',
    },
    
    {
      
      titulo: 'Apertura de Caminos',
      descripcion:
        'La apertura de caminos cuánticos es un término utilizado en contextos espirituales y holísticos para describir un proceso de transformación personal y vibracional.',
    },
        {
            
      titulo: 'Terapia Floral',
      descripcion:
        'La terapia floral es una forma de terapia alternativa que utiliza esencias florales para tratar problemas emocionales, mentales y fisicos',
    },
    {
      
      titulo: 'Cartas Natales Cuánticas',
      descripcion:
        'Las cartas natales cuánticas son una herramienta de astrologia cuantica que busca proporcionar la personalidad, el propósito de vida y el potencial espiritual de la persona.',
    },
  ];

  const cursos = [

    {
     
      titulo: 'Curso de Reiki Karuna y Reiki Usui',
      descripcion:
        'Cursos de Reiki Karuna  nivel 1,2 y maestría. Cursos de Reiki Usui nivel 1, 2, 3 y maestría. Conéctate con la energía universal para sanar y equilibrar cuerpo y mente.',
    },
    { 
     
      titulo: 'Sanaciones Cuánticas',
      descripcion:
        'Curso de sanaciones cuánticas nivel 1 ,2 y 3',
    },

    { 
      
      titulo: 'Técnica del Arca 1 y 2',
      descripcion:
        'La técnica del arca es una práctica espiritual y energética que busca proteger y equilibrar la energía personal, creando un espacio sagrado y seguro para la meditación, la reflexión y la conexión con la espiritualidad',
    },
  ];

  return (
    <div className="ServiciosMainContainer" id="ourOffers" >
      <div className='box1' >

      <h2>Servicios</h2>
      <div className="servicios-container">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio">
            
            <div className="titulo">{servicio.titulo}</div>
            <div className="descripcion">{servicio.descripcion}</div>
          </div>
        ))}
      </div>
        <p className='serviceinfo'>Le recordamos que esto no reemplaza la medicina , no abandonen su tratamiento. Para más información accede  a nuestro instagran, detallamos nuestros cursos y servicios, o comunicate a nuestro whatsapp</p>

        </div>

        <div className='box2' id='courses'>

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
        <div className="box2">
        <h2>Entregamos certificado de participación</h2>
        <img src={certificado} className='certificado'/>
      </div>
    </div>
  );
};

export default Servicios;