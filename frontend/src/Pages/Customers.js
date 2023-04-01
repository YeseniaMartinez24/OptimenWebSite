//Autor: Espinoza Gomez Abraham Salvador

import Nadvar from "../layouts/Nadvar"; // importar el layout de navegación
import Fotter from "../layouts/Footer"; // importar el layout de pie de página
import Customer from "../Components/customer/customers"; // importar el componente de clientes
import Carru from "../Components/customer/carrusel"; // importar el componente de carrusel

function Customers() {
  return (
    <>
      <>
        <>
          <Nadvar /> {/* renderizar el layout de navegación */}
          <Carru/> {/* renderizar el carrusel */}
          <Customer /> {/* renderizar el componente de clientes */}
        </>
        <Fotter /> {/* renderizar el layout de pie de página */}
      </>
    </>
  );
}

export default Customers;
