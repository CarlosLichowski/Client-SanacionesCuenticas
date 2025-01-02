import NavBar from './components/Navbar/NavBar';
import './App.css';
import { OurOffers } from './components/OurOffers/OurOffers';
import SobreNosotros from './components/AboutUs/AboutUs';
import Servicios from './components/Servicios/Servicios';
import Banner from './components/Banner/Banner';
import ConsultaForm from './components/Contactanos/ConsultaForm';





function App() {
  

  return (
    <div className="AppContainer">
      <NavBar />
      <Banner />
      <OurOffers />
      {/* Aquí pasamos la prop Knowledges */}
    
      <Servicios/>
      <SobreNosotros/>
      <ConsultaForm/>








    </div>



  );
}

export default App;
