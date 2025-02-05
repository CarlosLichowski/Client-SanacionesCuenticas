import React from 'react';
import './Servicios.css';
import certificado from '../../assets/certificado.png';
import { Sparkles, Shell, Atom, Move } from 'lucide-react';

const Servicios: React.FC = () => {
  const servicios = [
    {
      titulo: 'Sanaciones Cuánticas',
      icon: <Atom style={{ width: '100px', height: '100px' }} />,
      descripcion:
        'Las sanaciones cuánticas son un conjunto de técnicas que buscan mejorar el bienestar de personas, mascotas y plantas, basándose en los principios de la física cuántica.',
    },
    {
      titulo: 'Apertura de Caminos',
      icon: <Move style={{ width: '100px', height: '100px' }} />,
      descripcion:
        'La apertura de caminos cuánticos es un término utilizado en contextos espirituales y holísticos para describir un proceso de transformación personal y vibracional.',
    },
    {
      titulo: 'Terapia Floral',
      icon: <Shell style={{ width: '100px', height: '100px' }} />,
      descripcion:
        'La terapia floral es una forma de terapia alternativa que utiliza esencias florales para tratar problemas emocionales, mentales y físicos.',
    },
    {
      titulo: 'Cartas Natales Cuánticas',
      icon: <Sparkles style={{ width: '100px', height: '100px' }} />,
      descripcion:
        'Las cartas natales cuánticas son una herramienta de astrología cuántica que busca proporcionar información sobre la personalidad, el propósito de vida y el potencial espiritual de la persona.',
    },
  ];

  const cursos = [
    {
      titulo: 'Curso de Reiki Karuna y Reiki Usui',
      
      descripcion: [
        'Reiki Karuna nivel 1, 2 y maestría.',
        'Reiki Usui nivel 1, 2, 3 y maestría.',
        'Conéctate con la energía universal para sanar y equilibrar cuerpo y mente.',
      ],
    },
    {
      titulo: 'Sanaciones Cuánticas',
      
      descripcion: ['Sanaciones cuánticas nivel 1, 2 y 3',
                    'Mejora el bienestar de personas, mascotas y plantas, basándose en los principios de la física cuántica.'
                    
      ],
    },
    {
      titulo: 'Técnica del Arca 1 y 2',
    
      descripcion: [
        'Técnica del Arca 1 y 2',
        'Práctica espiritual y energética que busca proteger y equilibrar la energía personal.',
        
      ],
    },
  ];

  return (
    <div className="ServiciosMainContainer" id="ourOffers">
      <div className="box1">
        <h2>Servicios</h2>
        <div className="servicios-container">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio">
              <div className="titulo">{servicio.titulo}</div>
              {servicio.icon}
              <div className="descripcion">{servicio.descripcion}</div>
            </div>
          ))}
        </div>
        <p className="serviceinfo">
          Le recordamos que esto no reemplaza la medicina, no abandonen su tratamiento.
          Para más información accede a nuestro Instagram, detallamos nuestros cursos y servicios, o comunícate a nuestro WhatsApp.
        </p>
      </div>

      <div className="box2" id="courses">
        <h2>Cursos</h2>
        <div className="cursos-container">
          {cursos.map((curso, index) => (
            <div key={index} className="curso">
            
              <div className="titulo">{curso.titulo}</div>
              {Array.isArray(curso.descripcion) ? (
                <div className="descripcion">
                  {curso.descripcion.map((punto, i) => (
                    <p key={i} className="description">{punto}</p>
                  ))}
                </div>
              ) : (
                <div className="descripcion">{curso.descripcion}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="box2">
        <h2>Entregamos certificado de participación</h2>
        <img src={certificado} className="certificado" />
      </div>
    </div>
  );
};

export default Servicios;
