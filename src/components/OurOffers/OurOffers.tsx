
import './OurOffers.css'
import chacra1 from '../../assets/img/logo2.png'
import chacra2 from '../../assets/img/chacra 2.png'
import chacra3 from '../../assets/img/chacra 3.png'
import chacra4 from '../../assets/img/chacra 4.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const OurOffers = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='OurOffers' id="ourOffers">
        <div className="container">
            <div className="carouselContainer">
                <div className="col-12">
                    <div className="OurOffersBox">
                    <h2>Nuestros servicios</h2>    


<Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} className="owl-carousel owl-theme skill-slider"
>

                            <div className="item">
                                <img src={chacra1} alt="Image" />
                                <p>SANACIONES CUANTICAS</p>
                            </div>
                            <div className="item">
                                <img src={chacra2} alt="Image" />
                                <p>APERTURA DE CAMINOS</p>
                            </div>
                            <div className="item">
                                <img src={chacra3} alt="Image" />
                                <p>TERAPIA FLORAL</p>
                            </div>
                            <div className="item">
                                <img src={chacra4} alt="Image" />
                                <p>OPERACIONES ASTRALES</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )

}