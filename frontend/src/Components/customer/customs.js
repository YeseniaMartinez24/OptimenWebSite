//Componente echo por Fernando 

import React, { Fragment } from "react"; // Importa React y Fragment desde la biblioteca 'react'
import "../../css/Casouser.css"; // Importa el archivo CSS para estilos personalizados

import Button from "react-bootstrap/Button"; // Importa el componente Button de la biblioteca 'react-bootstrap'

import InfiniteCarousel from "react-leaf-carousel"; // Importa el componente InfiniteCarousel de la biblioteca 'react-leaf-carousel'

import uno from "../../img/customers/uno.jpg"; // Importa la imagen 'uno' desde el directorio de imágenes
import dos from "../../img/customers/dos.jpg"; // Importa la imagen 'dos' desde el directorio de imágenes
import tres from "../../img/customers/tres.jpg"; // Importa la imagen 'tres' desde el directorio de imágenes
import cuatro from "../../img/customers/cuatro.jpg"; // Importa la imagen 'cuatro' desde el directorio de imágenes
import cinco from "../../img/customers/cinco.jpg"; // Importa la imagen 'cinco' desde el directorio de imágenes
import seis from "../../img/customers/seis.jpg"; // Importa la imagen 'seis' desde el directorio de imágenes
import siete from "../../img/customers/siete.jpg"; // Importa la imagen 'siete' desde el directorio de imágenes
import ocho from "../../img/customers/ocho.jpg"; // Importa la imagen 'ocho' desde el directorio de imágenes
import nueve from "../../img/customers/nueve.jpg"; // Importa la imagen 'nueve' desde el directorio de imágenes
import diez from "../../img/customers/diez.jpg"; // Importa la imagen 'diez' desde el directorio de imágenes

const Customs = () => {
  return (
    <Fragment>
      {" "}
      {/* Utiliza un Fragment para devolver elementos sin un nodo padre */}
      <section className="sec">
        {" "}
        {/* Define una sección con la clase 'sec' */}
        <div className="row">
          {" "}
          {/* Define un div con la clase 'row'*/}
          <InfiniteCarousel // Usa el componente InfiniteCarousel para crear un carrusel de imágenes
            sideSize={0.5} // Define el tamaño de las imágenes en el carrusel
            slidesToScroll={1} // Define el número de diapositivas que se desplazan cuando se hace clic en el botón anterior/siguiente
            autoCycle={true} // Activa la función de cambio automático del carrusel
            slidesToShow={3} // Define el número de diapositivas visibles en el carrusel
          >
            <Button // Utiliza el componente Button para crear un botón con un enlace
              className="but" // Asigna la clase 'but' al botón
              variant="link" // Define el estilo del botón como un enlace
              href="https://es.flyfrontier.com/nosotros-1xs/" // Define la URL del enlace
            >
              <div className="customer">
                {" "}
                {/* Crea un div con la clase 'customer'*/}
                <div className="img">
                  {" "}
                  {/* Crea un div con la clase 'img'*/}
                  <img src={uno} alt="1" />{" "}
                  {/* Inserta la imagen 'uno' con un atributo 'alt' */}
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
  );
};
export default Customs;
