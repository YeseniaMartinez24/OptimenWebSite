import React, {Fragment} from "react";
import "../../css/Casouser.css";
 
import Button from "react-bootstrap/Button";

import InfiniteCarousel from "react-leaf-carousel";

import uno from "../../img/customers/uno.jpg";
import dos from "../../img/customers/dos.jpg";
import tres from "../../img/customers/tres.jpg";
import cuatro from "../../img/customers/cuatro.jpg";
import cinco from "../../img/customers/cinco.jpg";
import seis from "../../img/customers/seis.jpg";
import siete from "../../img/customers/siete.jpg";
import ocho from "../../img/customers/ocho.jpg";
import nueve from "../../img/customers/nueve.jpg";
import diez from "../../img/customers/diez.jpg";



const Customs = () => {
    return(
        <Fragment>
            <section className="sec">
                <div className="row">
                <InfiniteCarousel
            sideSize={.5}
            slidesToScroll={1}
            autoCycle={true}
            slidesToShow={3} 
          >
                   <Button
              className="but"
              variant="link"
              href="https://es.flyfrontier.com/nosotros-1xs/"
            >
              <div className="customer">
                <div className="img">
                  <img src={uno} alt="1" />
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://grupo.iberia.es/about_us"
            >
            <div className="customer">
              <div className="img">
                <img src={dos} alt="Ahora pasa"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.united.com/ual/en/us/fly/company/united-airlines-ventures.html"
            >
            <div className="customer">
              <div className="img">
                <img src={tres} alt="ALTAM"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.voegol.com.br/es-ar/sobre-gol"
            >
            <div className="customer">
              <div className="img">
                <img src={cuatro} alt="nada"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://aeromexico.com/es-mx/acerca-de-aeromexico/corporativo-aeromexico"
            >
            <div className="customer">
              <div className="img">
                <img src={cinco} alt="sisisi"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.alaskaair.com/content/about-us"
            >
            <div className="customer">
              <div className="img">
                <img src={seis} alt="ggg"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.endeavorair.com/content/endeavor-air/en_us/about-us.html"
            >
            <div className="customer">
              <div className="img">
                <img src={siete} alt="ggg"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.copaair.com/es/web/mx/nuestra-historia"
            >
            <div className="customer">
              <div className="img">
                <img src={ocho} alt="ggg"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.voeazul.com.br/ar/sobre-azul/sobre-azul"
            >
            <div className="customer">
              <div className="img">
                <img src={nueve} alt="ggg"></img>
              </div>
            </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="http://www.kalittaair.com/ourcompany-"
            >
            <div className="customer">
              <div className="img">
                <img src={diez} alt="ggg"></img>
              </div>
            </div>
            </Button>
                    </InfiniteCarousel>
                </div>
            </section>
        </Fragment>
        
    )
}
export default Customs