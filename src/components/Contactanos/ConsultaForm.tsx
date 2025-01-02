import { useState, useRef, FormEvent } from 'react';
import './ConsultaForm.css'
import emailjs from '@emailjs/browser';

const ConsultaForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false); 

  const sendEmail = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (formRef.current) { 
      emailjs
        .sendForm('service_3jeh72g', 'template_r6a6w6c', formRef.current, {
          publicKey: 'ABLinatQ9KGPp3djv', 
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
    </div>
  );
};

export default ConsultaForm;