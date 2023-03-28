import React from "react";
import Nadv from "../layouts/Nadvar";
import Home from "../Components/home/Home";
import Carru from "../Components/home/carruselimg";
import Caerti from "../Components/home/centifications";
import Fotter from "../layouts/Footer";
import Innovation from '../Components/home/Innovation';
import Services from "../Components/aboutus/OurServices";


function Dashboard() {
  return (
    <>
      <>
        <>
          <>
            <>
              <Nadv />
              <Home />
              <Innovation/>
              <Services/>

            </>
            <Carru />
          </>
          <Caerti />
        </>
        <>
          <Fotter />
        </>
      </>
    </>
  );
}

export default Dashboard;
