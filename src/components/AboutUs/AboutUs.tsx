
import "./AboutUs.css";
import persona1 from '../../assets/img/persona1.png';
import persona2 from '../../assets/img/integrante 1.jpg';
import persona3 from  '../../assets/img/integrante 2.jpg';


const SobreNosotros = () => {
  const integrantes = [
    {
      nombre: "Roberto Vizza",
      descripcion: "Dir. Sanaciones Cuánticas",
      foto: persona1, // Ruta de la imagen
    },
    {
      nombre: "Luciana Vizza",
      descripcion: "Terapeuta Floral",
      foto: persona2, // Ruta de la imagen
    },
    {
      nombre: "Silvia Villanueva",
      descripcion: "Maestra de reiki",
      foto: persona3, // Ruta de la imagen
    },
  ];

  return (
    <section className="SobreNosotros" id="aboutus">
      <h2>Sobre Nosotros</h2>
      <div className="integrantes">
        {integrantes.map((integrante, index) => (
          <div className="integrante" key={index}>
            <img src={integrante.foto} alt={integrante.nombre} />
            <h3>{integrante.nombre}</h3>
            <p>{integrante.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SobreNosotros;

