import React, { useContext } from "react";
import uno from "../../img/Home/uno.png";
import "../../css/home.css"; // Importa hoja de estilo externa
import {  FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Homes = () => {
  const idioma = useContext(langContext);

  console.log(idioma);

  return (
    <header className="home-header">
      <img className="home-image" src={uno} alt="avión" />
      <div className="home-content">
        <h1 className="home-title anim-fade-in">
          <FormattedMessage id="app.welcome" defaultMessage="Welcome" />
        </h1>
        <p className="home-description anim-slide-up">
          <FormattedMessage id="app.Description" defaultMessage="null" />
        </p>
      </div>
    </header>
  );
};

export default Homes;
