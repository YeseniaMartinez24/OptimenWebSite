import Nadvar from "../layouts/Nadvar";
import Fotter from "../layouts/Footer";
import Customer from "../Components/customer/Customers";
import Carru from "../Components/customer/carrusel";


function Customers() {
  return (
    <>
      <>
        <>
          <Nadvar />
        <Carru/>
        <Customer />
      </>
      <Fotter />
      </>
    </>
  );
}

export default Customers;
