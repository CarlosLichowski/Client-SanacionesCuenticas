

import './NavBar.css';
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import navIcon1 from '../../assets/whatappicon.png';
import navIcon2 from '../../assets/instagramicon.png';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');



  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/+5491123048560/?text=urlencodedtext`; 
    window.open(whatsappUrl, '_blank'); 
  };

  return (
      <div className={`navbarContainer`}>
              <div className='logoContainer'>
              <img src={logo} className='logo' alt="logo" />
              <h1>Sanaciones Cuanticas </h1>

              <div className="NavSocialIconsContainerMobile">
        <a href="#" onClick={handleWhatsAppClick}>
          <img src={navIcon1} alt="whatsapp" />
        </a>

        <a href="https://www.instagram.com/sanacionescuanticas/">
          <img src={navIcon2} alt="instagram" />
        </a>
      </div>
      </div>
      {/* <span></span>   TOGGLE ICON */}

      <ul className="burguerBtn">
  <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</a>
  <a href="#ourOffers" className={activeLink === 'ourOffers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Servicios</a>
  <a href="#courses" className={activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('courses')}>Cursos</a>
  <a href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>Equipo</a>
  
</ul>

      <ul className="links">
  <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</a>
  <a href="#ourOffers" className={activeLink === 'ourOffers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Servicios</a>
  <a href="#courses" className={activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('courses')}>Cursos</a>
  <a href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>Equipo</a>
  <a href='#ContactUs' className='contactMobile'  role="button" onClick={() => console.log('connect')}>Contacto</a>
  
</ul>



      <div className="NavSocialIconsContainer">
        <a href="#" onClick={handleWhatsAppClick}>
          <img src={navIcon1} alt="whatsapp" />
        </a>

        <a href="https://www.instagram.com/sanacionescuanticas/">
          <img src={navIcon2} alt="instagram" />
        </a>
      </div>

      <a href='#ContactUs' className='button-15'  role="button" onClick={() => console.log('connect')}>Contacto</a>

      
    </div>
  );
};


export default NavBar;