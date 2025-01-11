import { useState, useRef, FormEvent } from 'react';
import './ConsultaForm.css'
import emailjs from '@emailjs/browser';
import navIcon1 from '../../assets/whatappicon.png';
import navIcon2 from '../../assets/instagramicon.png';


const ConsultaForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false); 

  const sendEmail = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (formRef.current) { 
      emailjs
        .sendForm('service_wjc9xhs', 'template_awetk8f', formRef.current, {
          publicKey: '8cVXo8Gy3DRLY06r2', 
        })
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true); 
        })
        .catch((error) => {
          console.error('FAILED...', error.text);
          // Puedes mostrar un mensaje de error al usuario aquí
        });
    }
  };



  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/+5491123048560/?text=urlencodedtext`; 
    window.open(whatsappUrl, '_blank'); 
  };

  return (
    <div className='formContainer' id='ContactUs'>
      <form ref={formRef} onSubmit={sendEmail}> 
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
        {isSuccess && <p>¡Mensaje enviado con éxito!</p>} 
      </form>
      <div className="NavSocialIconsContainerMobile">
        <a href="#" onClick={handleWhatsAppClick}>
          <img src={navIcon1} alt="whatsapp" />
        </a>

        <a href="https://www.instagram.com/sanacionescuanticas/">
          <img src={navIcon2} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default ConsultaForm;