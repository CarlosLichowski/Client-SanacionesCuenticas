import './NavBar.css';
import { useState } from 'react';
import logo from '../../assets/img/logo2.png';
import navIcon1 from '../../assets/whatappicon.png';
import navIcon2 from '../../assets/instagramicon.png';
import navIcon3 from '../../assets/youtubeicon.png';
import { Menu, X } from 'lucide-react'; // Using Lucide icons instead of image

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    setIsMenuOpen(false); // Close menu when clicking a link
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/+5491123048560/?text=urlencodedtext`; 
    window.open(whatsappUrl, '_blank'); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbarContainer ${isMenuOpen ? 'menu-open' : ''}`}>
      <button 
        className='hamburger-btn'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className='logoContainer'>
        <img src={logo} className='logo' alt="logo" />
        <h1>Sanaciones Cuánticas</h1>

        <div className="NavSocialIconsContainerMobile">
          <a href="#" onClick={handleWhatsAppClick}>
            <img src={navIcon1} alt="whatsapp" />
          </a>

          <a href="https://www.instagram.com/sanacionescuanticas/">
            <img src={navIcon2} alt="instagram" />
          </a>
        </div>
      </div>

      <ul className={`links ${isMenuOpen ? 'show' : ''}`}>
        <a 
          href="#home" 
          className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
          onClick={() => onUpdateActiveLink('home')}
        >
          Inicio
        </a>
        <a 
          href="#ourOffers" 
          className={activeLink === 'ourOffers' ? 'active navbar-link' : 'navbar-link'} 
          onClick={() => onUpdateActiveLink('services')}
        >
          Servicios
        </a>
        <a 
          href="#courses" 
          className={activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'} 
          onClick={() => onUpdateActiveLink('courses')}
        >
          Cursos
        </a>
        <a 
          href="#aboutus" 
          className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} 
          onClick={() => onUpdateActiveLink('aboutus')}
        >
          Equipo
        </a>
        <a 
          href='#ContactUs' 
          className='contactMobile' 
          role="button" 
          onClick={() => onUpdateActiveLink('contact')}
        >
          Contacto
        </a>
      </ul>

      <div className="NavSocialIconsContainer">
        <a href="#" onClick={handleWhatsAppClick}>
          <img src={navIcon1} alt="whatsapp" />
        </a>

        <a href="https://www.youtube.com/@sanacionescuanticas-j6g">
          <img src={navIcon3} alt="youtube" />
        </a>

        <a href="https://www.instagram.com/sanacionescuanticas/">
          <img src={navIcon2} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;