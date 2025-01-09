
import './Banner.css';
import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import certificado from '../../assets/certificado.png'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [' USUI', 'KARUNA'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>
      <div className="box1">

      <div className='BannerContainer'>
        <div className='BannerColumn1'>
          <h1>Sanaciones Cuánticas</h1>
          <h3>REIKI <span className="wrap"> {text}</span></h3>
           
          <img src={logo} className='logoBanner' />

        </div>

        <div className='BannerColumn2'>
       
          
            <iframe  src="https://www.youtube.com/embed/Vh5bgpoxWwI?si=pJEo-ZDo4QUMrd3e" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         
        </div>
      </div>
      </div>
      <div className="box2">
        <h2>Entregamos certificado de participacion</h2>
        <img src={certificado} className='certificado'/>
      </div>
    </section>
  );
};


export default Banner;