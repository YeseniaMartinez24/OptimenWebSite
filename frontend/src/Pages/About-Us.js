//Autor: Espinoza Gomez Abraham Salvador

// Importación de componentes y módulos necesarios
import Nadvar from "../layouts/Nadvar";
import Fotter from "../layouts/Footer";
import Carrusel from "../Components/aboutus/About-Us";
import Valores from "../Components/aboutus/Valores";

// Definición del componente "AboutUs"
function AboutUs() {
  return (
    // Uso de un fragmento para englobar varios elementos sin necesidad de crear un nodo padre
    <>
      {/* Importación del componente "Nadvar" */}
      <>
        <Nadvar />
        {/* Importación del componente "Carrusel" */}
        < Carrusel />
      </>
      {/* Importación del componente "Valores" */}
      <Valores/>
      {/* Importación del componente "Fotter" */}
      <Fotter />
    </>
  );
}

// Exportación del componente "AboutUs"
export default AboutUs;
