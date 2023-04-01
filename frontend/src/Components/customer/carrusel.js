//Autor: Espinoza Gómez Abraham Salvador

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  // Crear el estado 'index' y su función de actualización 'setIndex' usando el hook 'useState'
  const [index, setIndex] = useState(0);

  // Función para actualizar el estado 'index' cuando se selecciona un elemento del carrusel
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
        // Renderizar el componente Carousel de react-bootstrap
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            {/* Cada Carousel.Item representa un slide del carrusel */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/10/20/17/40/aircraft-1756149_1280.jpg"
          alt="First slide"
          height="700px"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/07/23/04/35/flyer-5430378_1280.jpg"
          alt="Second slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/05/15/11/24/dji-4204801_1280.jpg"
          alt="Third slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

// Exportar el componente ControlledCarousel para poder ser utilizado en otros componentes
export default ControlledCarousel;