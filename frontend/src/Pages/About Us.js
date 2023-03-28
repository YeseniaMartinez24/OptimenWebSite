import Nadvar from "../layouts/Nadvar";
import Fotter from "../layouts/Footer";
import Carrusel from "../Components/aboutus/About-Us";
import Valores from "../Components/aboutus/valores";


function AboutUs() {
  return (
    <>
      <>
        <Nadvar />
        < Carrusel />
      </>
      <Valores/>
      <Fotter />
    </>
  );
}

export default AboutUs;
